import * as http from 'http';
import * as https from 'https';
import app from '../main';
import * as fs from 'fs';
import * as path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const privateKey = fs.readFileSync(
  path.join(__dirname, '../ssl/private.pem'),
  'utf8',
);
const certificate = fs.readFileSync(
  path.join(__dirname, '../ssl/ca.cer'),
  'utf8',
);
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(process.env.HTTPS_PORT);

httpsServer.on('listening', function() {
  console.log(`https listening on ${process.env.HTTPS_PORT}`);
});
