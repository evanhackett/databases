var express = require('express');
var db = require('./db');
// var mysql = require('mysql');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();

//connection.query('USE chat');


//dealing with CORS

// app.all('*', function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// app.use(express.static(__dirname + "/../client"));

// app.get('/', function (req, res) {
//   console.log("ENTERS THE GET REQUEST");
//   res.writeHead(200);
//   res.end('Hello World!');
//   // instead of res.writeHead and res.end, we can just call res.send
//   //res.send("Hello woorld");
// });

// app.post('/', function (req, res) {
//   console.log("ENTERS THE POST REQUEST");
//     req.on('data', function(data) {
//       console.log("ENTERS THE POST REQUEST- DATA");
//       console.log(JSON.parse(data));
//       connection.query("INSERT into messages (username) values ('Mike')", req.body, 
//           function (err, result) {
//               if (err) throw err;
//               console.log("Enters database function");
//               // res.send('User added to database with ID');
//           }
//       );

//     });

      
//   res.send('POST request to the homepage');
// });



module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);
// app.use("/", router);


// Serve the client files
app.use(express.static(__dirname + "/../client"));


// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

