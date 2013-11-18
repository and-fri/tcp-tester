var fs = require('fs');
var net = require('net');
var prompt = require('prompt');

// TCP NET SETTINGS
var client = new net.Socket();
var HOST = '127.0.0.1';
var PORT = '6969';


prompt.start();
prompt.get(['message'], function (err, result) {
  if (err) { return err; }
  
  var data = result.message;
  
  client.connect(PORT, HOST, function() {
    console.log('CLIENT CONNECTED TO : ' + HOST + ':' + PORT);
  });

  client.write(data, function() {
    client.end();
  });


  client.on('close', function() {
    console.log('Connection closed...');
  });

});
