'use strict';

var res = document.getElementById('res');
var button = document.getElementById('send');
var socket = new WebSocket('ws://192.99.236.78:8089');
var wsData = {
    PNum: 0
  };

socket.onopen = function(){
    res.innerHTML = 'Connection established';
};

socket.onerror = function(error) {
    res.innerHTML = "Error is: " + error.message;
};

send.addEventListener('click', function(){
    sendReq({
        ID: '',
        PC: pcId(),
        PNum: ++wsData.PNum,
        Response: 'Session',
        Version: '4.49',
        SitePassword: ''
      })
});

socket.onmessage = function(data, flags) {

    switch(data.Command) {
        case 'Session':
          wsData.ID = data.ID;
          sendReq({
            Response: 'LoginRequest',
            ID: wsData.ID,
            Player: 'bot001',
            PNum: ++wsData.PNum
          })
          break;
        case 'LoginSalt':
          var salt = data.Salt;
          var password = 'abc123';
    
          sendReq({
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
    
          sendReq({
            ID: wsData.ID,
            PNum: ++wsData.PNum,
            Response: 'LobbyChat',
            Text: 'hello from bot001'
          });
    
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

    res.innerHTML = "Recived data: " + data;
    console.log(data);
};



function sha256(text) {
    const crypto = require('crypto');
    const hash = crypto.createHash('sha256');
    
    hash.update(text);
  
    return hash.digest('hex').toUpperCase();
  }
  
  function sendReq(data) {
    socket.send(JSON.stringify(data));
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