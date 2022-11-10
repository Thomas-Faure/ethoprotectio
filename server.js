//Install express server
const fs = require('fs');
const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');

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
app.use(function (req, res, next) {
	if (req.secure) {
		next();
	} else {
		res.redirect('https://' + req.headers.host + req.url);
	}
});
app.use(express.static('./dist/objective-viewer-client'));


app.get('/*', (req, res) =>
	res.sendFile('index.html', { root: 'dist/objective-viewer-client/' }),
);

// Starting both http & https servers
const httpServer = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);

// Start the app by listening on the default Heroku port

/*httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});*/


httpServer.listen(80, () => {
	console.log("connexion")
});

