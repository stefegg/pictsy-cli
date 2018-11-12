require('dotenv').config({
  path: './env/.env'
});

module.exports = {
  database: process.env.MONGO_PATH,
  secret: process.env.MONGO_SECRET
}