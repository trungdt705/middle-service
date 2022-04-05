import path from 'path';
// import .env variables
require('dotenv-safe').config({
  allowEmptyValues: true,
  path: path.join(__dirname, '../../.env'),
});

module.exports = {
  serviceName: 'market_service',
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongo: {
    uri: process.env.MONGO_URI_DEV
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  otherServices: {

  }
};
