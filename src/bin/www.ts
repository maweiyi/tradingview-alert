import * as https from 'https';
import app from '../main';
import * as fs from 'fs';
import * as path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

let httpsServer;
if (process.env.NODE_ENV === 'development') {
  const privateKey = fs.readFileSync(
    path.join(__dirname, '../../ssl/private.pem'),
    'utf8',
  );
  const certificate = fs.readFileSync(
    path.join(__dirname, '../../ssl/ca.cer'),
    'utf8',
  );
  const credentials = { key: privateKey, cert: certificate };
  httpsServer = https.createServer(credentials, app);

  httpsServer.listen(process.env.HTTPS_PORT);
  httpsServer.on('listening', function() {
    // eslint-disable-next-line
    console.log(`https listening on ${process.env.HTTPS_PORT}`);
  });
} else if (process.env.NODE_ENV === 'production') {
  const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/maweiyi.me/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/maweiyi.me/fullchain.pem'),
    requestCert: false,
    rejectUnauthorized: false,
  };
  httpsServer = https.createServer(options, app);
  httpsServer.listen(process.env.PRODUCTION_HTTPS_PORT);
  httpsServer.on('listening', function() {
    // eslint-disable-next-line
    console.log(`https listening on ${process.env.PRODUCTION_HTTPS_PORT}`);
  });
}
