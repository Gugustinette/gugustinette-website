/// APP INIT

// Create the app
// const { debug } = require('console')

const express = require('express');
var cors = require('cors');
const got = require('got');

// const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.json());


// Create Server
const server = require('http').createServer(app);
app.use(express.static(__dirname + "/static"));







/// REST API

// Static Index Root
app.get('/', (req, res) => { // Page d'index - Redirection basique de la page HTML
  res.sendFile(__dirname + "/static/gugustinette" + req.originalUrl);
});
app.get('/*/*', (req, res) => { // Redirection des autres pages
  var website = req.originalUrl.split("/")[1];
  if (website !== "gus-ui" && website !== "gus-univ") {
    res.sendFile(__dirname + "/static/gugustinette" + req.originalUrl);
  }
  else {
    res.sendFile(__dirname + "/static" + req.originalUrl);
  }
});

/*
 * Gus Edt
*/
app.get('/gus-edt-ics-g*', cors(), async (req, res) => { // Gus Edt
  var groupId = req.originalUrl.split("-")[3];

  try {
		const response = await got(`https://edt.univ-nantes.fr/iut_nantes/${groupId}.ics`);
    res.send(response.body);
	} catch (error) {
    res.send(error.response.body);
	}

});



// Setting up the server to listen on port 3000
server.listen(3000);
