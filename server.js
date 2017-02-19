var express = require('express');
var net = require('net');
var dgram = require("dgram");
var app = express();


// //var Matti = require("./Matti")("192.168.180.21", 4445);

// // var client = new net.Socket();
// // client.connect(7777, '10.70.0.50', function() {
// // 	console.log('Connected');
// // 	client.write('Hello, server! Love, Client.');
// // });

import Matrix from "./business/Records/Matrix";
import ProjectorInfocus from "./business/Records/ProjectorInfocus";

var testiMatti = new Matrix({
    id: 1,
    ip: "192.168.180.201",
    port: 5555
});

var tykki = new ProjectorInfocus({
    id: 1,
    ip: "192.168.180.10",
    port: 23
});

app.get("/*", function (req, res) {
    console.log("Uusi tila", req.param("pin"), req.param("state"), req.host);
    //testiMatti.setVideoConnection(parseInt(req.param("pin")), 5);
    if (req.param("pin") == 12 && req.param("state") == 1) {
        tykki.turnOnProjector();
        console.log("tykki paalle");
    }
});



app.listen(3111, () => {
    console.log("listeting");
});




    ///client.write("change");
    // switch(parseInt(req.param("pin"))) {
    //     case 1:
    //     console.log("ykkonen");
    //         // if(parseInt(req.param("state"))) {
    //         //     console.log("ykkonen");
    //         //     Matti.setVideoConnection(4, 5);
    //         // }
    //         break;
    //     case 2:
    //         if(parseInt(req.param("state"))) {
    //             console.log("kakkonen");
    //             Matti.setVideoConnection(4, 6);
    //         }
    //         break;
    //     // case 3:
    //     //     if(parseInt(req.param("state"))) {
    //     //         console.log("kolmonen");
    //     //         Matti.setVideoConnection(4, 7);
    //     //     }
    //     //     break;
    //     // case 4:
    //     //     if(parseInt(req.param("state"))) {
    //     //         console.log("nelonen");
    //     //         Matti.setVideoConnection(4, 8);
    //     //     }
    //     //     break;
    //     // case 5:
    //     //     if(parseInt(req.param("state"))) {
    //     //         console.log("viisi");
    //     //         Matti.setVideoConnection(4, 9);
    //     //     }
    //     //     break;
    //     // case 6:
    //     //     if(parseInt(req.param("state"))) {
    //     //         console.log("kuusi");
    //     //         Matti.setVideoConnection(4, 10);
    //     //     }
    //     //     break;
    // }




// var client = dgram.createSocket("udp4");

// var message = new Buffer("My KungFu is Good!");

// var message = new Buffer([50, 60, 70, 80]);

// client.send("moi", 4444, "10.70.0.14", function(err, bytes) {
// if (err) throw err;
// console.log("UDP message sent to ");
// client.close();
// });




// var server = net.createServer(function(socket) {
// 	socket.write('Echo server\r\n');
// 	socket.pipe(socket);
//     socket.on("data", function(data) {
// 	console.log('Received: ' + data);
// 	//server.destroy(); // kill client after server's response
//     });
// });


// server.listen(3112);





// client.on('data', function(data) {
// 	console.log('Received: ' + data);
// 	client.destroy(); // kill client after server's response
// });

// client.on('close', function() {
// 	console.log('Connection closed');
// });