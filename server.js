//Install express server
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const path = require('path');
const http = require('http');
const https = require('https');


const mailjet = require ('node-mailjet').apiConnect(
	'cab0ec7bcf40c7758f9d8324c267444f', '9c3b1b9f7308d1cf3228c909a0925dc2',
	{
	  config: {},
	  options: {}
	} 
  );

const app = express();
// Certificate
//const privateKey = fs.readFileSync('/etc/letsencrypt/live/www.ethoprotectio.fr/privkey.pem', 'utf8');
//const certificate = fs.readFileSync('/etc/letsencrypt/live/www.ethoprotectio.fr/cert.pem', 'utf8');
///const ca = fs.readFileSync('/etc/letsencrypt/live/www.ethoprotectio.fr/chain.pem', 'utf8');


/*const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};*/

// Serve only the static files form the dist directory
/*app.use(function (req, res, next) {
	if (req.secure) {
		next();
	} else {
		res.redirect('https://' + req.headers.host + req.url);
	}
});*/
app.use(express.static('./dist/Ethoprotectio'));


app.post('/sendmail',jsonParser, (req, res) => {
	console.log(req.body)
	res.send('Hello World!')
	const request = mailjet
  .post("send", {'version': 'v3.1'})
  .request({
	"Messages":[
	  {
		"From": {
		  "Email": "contat@ethoprotectio.fr",
		  "Name": "from"
		},
		"To": [
		  {
			"Email": "contat@ethoprotectio.fr",
			"Name": "to"
		  }
		],
		"Subject": "Formulaire contact",
		"HTMLPart": req.body.body,
	  }
	]
  })
  request
	.then((result) => {
	  console.log(result.body)
	})
	.catch((err) => {
	  console.log(err.statusCode)
	})
  })


  
app.get('/*', (req, res) =>
res.sendFile('index.html', { root: 'dist/Ethoprotectio/' }),
);

// Starting both http & https servers
const httpServer = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);

// Start the app by listening on the default Heroku port

/*httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});*/


httpServer.listen(process.env.PORT || 5000, () => {
	console.log("connexion")
});

