/* eslint-disable no-console */
/* eslint-disable n/no-path-concat */
/// APP INIT

// Imports
const http = require('http')
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();


// Create Server
const server = http.createServer(app);
app.use(express.static(__dirname + "/dist"));

const websites = [
  "gus-ui",
  "gus-univ"
]






/// REST API

// Static Index Root
app.get('/', (req, res) => { // Page d'index - Redirection basique de la page HTML
  res.sendFile(__dirname + "/dist/gugustinette" + req.originalUrl);
});
app.get('/*/*', (req, res) => { // Redirection des autres pages
  const website = req.originalUrl.split("/")[1];
  // If website not in websites list
  if (websites.includes(website)) {
    res.sendFile(__dirname + "/dist/gugustinette" + req.originalUrl);
  }
  else {
    res.sendFile(__dirname + "/dist" + req.originalUrl);
  }
});

/*
 * Gus Edt
*/
app.get('/gus-edt-ics-g*', cors(), async (req, res) => { // Gus Edt
  const groupId = req.originalUrl.split("-")[3];

  try {
    const response = await axios.get(`https://edt.univ-nantes.fr/iut_nantes/${groupId}.ics`);
    res.send(response.data);
	} catch (error) {
    res.status(500).send(error);
	}

});


// Setting up the server to listen on port 3000
console.log("Server listening on port 3000");
server.listen(9090);
