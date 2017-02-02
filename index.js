var app = require('express')();
var http = require('http').Server(app);
// creates a new instance of socket.io by passing the http object
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// listens for incoming sockets, logs a message to the console
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(3000, function(){
  console.log('listening on port:3000');
});
