const dotenv = require('dotenv');
dotenv.config(); 
const apikey = process.env.API_KEY;
const dbUrl = process.env.DATABASE_URL;
console.log('API Key:', apikey); console.log('Database URL:', dbUrl);