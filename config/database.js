require('dotenv').config();

if (process.env.NODE_ENV === 'test') {
  database_path = process.env.MONGO_TEST_PATH
} else {
  database_path = process.env.MONGO_PATH || 'mongodb://localhost:27017/pictsy'
}

module.exports = {
  database: database_path,
  secret: process.env.MONGO_SECRET || 'yoursecret'
}