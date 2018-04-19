var WebSocket = require('ws');
var SocksProxyAgent = require('socks-proxy-agent');
var HttpProxyAgent = require('http-proxy-agent');
var Socks = require('socks');

// var agent = new SocksProxyAgent('socks://127.0.0.1:9050');
 var agent = new HttpProxyAgent('http://192.99.236.78:80');
// var agent = new Socks.Agent({proxy: { ipaddress: '127.0.0.1', port: 1081, type: 4 }});
var agent = null;

var ws = new WebSocket('ws://192.99.236.78:8089', { agent: agent });
var wsData = {
  PNum: 0
};

ws.on('error', function(error) {
  console.log('error', error);
})

ws.on('open', function open() {
  console.log('open');

  send({
    ID: '',
    PC: pcId(),
    PNum: ++wsData.PNum,
    Response: 'Session',
    Version: '4.49',
    SitePassword: ''
  })
});

ws.on('message', function(data, flags) {
  data = JSON.parse(data);

  console.log(data);

  switch(data.Command) {
    case 'Session':
      wsData.ID = data.ID;
      send({
        Response: 'LoginRequest',
        ID: wsData.ID,
        Player: 'bot001',
        PNum: ++wsData.PNum
      })
      break;
    case 'LoginSalt':
      var salt = data.Salt;
      var password = 'abc123';

      send({
        Response: 'Login',
        ID: wsData.ID,
        Player: 'bot001',
        Hash: sha256(password + salt),
        NextHash: hashPassword(password),
        PNum: ++wsData.PNum,
        ValCode: ''
      })
      break;
    case 'Login':
      if (data.Status == 'OK') {
        console.log('LOGIN OK');
      }

      send({
        ID: wsData.ID,
        PNum: ++wsData.PNum,
        Response: 'LobbyChat',
        Text: 'hello from bot001'
      })

      // setTimeout(() => {
      //   send({
      //     ID: wsData.ID,
      //     PNum: ++wsData.PNum,
      //     Response: 'LogoutRequest'
      //   })
      // })
      break;
    // case 'LogoutRequest':
    //   send({
    //     ID: wsData.ID,
    //     PNum: ++wsData.PNum,
    //     Response: 'Logout'
    //   })

    //   setTimeout(() => {
    //     process.exit(0)
    //   })
    //   break;
  }
});

function sha256(text) {
  const crypto = require('crypto');
  const hash = crypto.createHash('sha256');
  
  hash.update(text);

  return hash.digest('hex').toUpperCase();
}

function send(data) {
  ws.send(JSON.stringify(data));
}

function pcId() {
  var g = Math.round(Math.random() * 4294967295).toString(16).toUpperCase();
  while (g.length < 8) {
    g = "0" + g
  }
  return g;
}

function hashPassword(bB) {
  if (bB.length == 0) {
    return ""
  }
  var g, bC;
  g = Math.round(Math.random() * 4294967295).toString(16).toUpperCase();
  while (g.length < 8) {
    g = "0" + g
  }
  bC = sha256(sha256(bB + g));
  return g + "-" + bC
}