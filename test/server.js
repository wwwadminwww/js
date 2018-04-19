var WebSocket = require('ws');
var SocksProxyAgent = require('socks-proxy-agent');
var HttpProxyAgent = require('http-proxy-agent');
var Socks = require('socks');

// var agent = new SocksProxyAgent('socks://127.0.0.1:9050');
var agent = new HttpProxyAgent('http://192.99.236.78:80');
// var agent = new Socks.Agent({proxy: { ipaddress: '127.0.0.1', port: 1081, type: 4 }});

