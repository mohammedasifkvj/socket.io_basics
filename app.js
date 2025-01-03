const app = require('express')()
const http = require('http').Server(app)
const path = require('path')
const io=require('socket.io')(http);

app.get('/', function (req, res) {
    let options = {
        root: path.join(__dirname)
    }
    let fileName = 'index.html';
    res.sendFile(fileName, options)
})

io.on('connection',function(socket){
    console.log("A user connected");
     
    socket.on('disconnect',function(){
        console.log("A user disconnected");
    })
})

http.listen(5000, function () {
    console.log("server ready on http://127.0.0.1:5000");
})