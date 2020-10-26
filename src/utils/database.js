const { Client } = require ('pg');

require('dotenv').config();

const client = new Client ({
	host: 'ec2-34-193-232-231.compute-1.amazonaws.com',
	port: 5432,
	password: '6edeeb6643069177127c85156b20c06d688706b195a52049ce7834b9d079d265',
	user: 'efqeswvvleeiiv',
	database: 'd2l9js72r9raqi',
	ssl: {
		rejectUnauthorized: false,
	},
});

client
  .connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error', err.stack));

module.exports = client;