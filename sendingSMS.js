// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "";
const authToken = "";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Outside Air is toxic, might be dangerous to go outside',
     from: '+',
     to: ''
   })
  .then(message => console.log(message));
