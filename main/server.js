const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const app = require('./app.js');
const path = require('path');

console.log('Dotenv loaded file:', path.resolve(__dirname, '../config.env'));
console.log('ENV PORT:', process.env.PORT);

process.on('uncaughtException', (err) => {
  console.log('Uncaught exception');
  console.log(err.name, err.message);
  process.exit(1);
});

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.log('DB connection error:', err));

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is listing on ${process.env.PORT}...`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

console.log('MODE', process.env.NODE_ENV);
