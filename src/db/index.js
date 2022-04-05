import mongoose from 'mongoose';
import bluebird from 'bluebird';
import { mongo, env } from './vars';

// set mongoose Promise to Bluebird
mongoose.Promise = bluebird;

// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true);
}

const defaultErrorHandler = (err) => {
  console.log(`Connection to Mongo error: ${err}`);
};

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
const connect = async (errorHandler = defaultErrorHandler) => {
  mongoose.connection.on('error', errorHandler);
  mongoose.connect(mongo.uri, {
    useNewUrlParser: true,
    keepAlive: 1
  });
  return mongoose.connection;
};

const disconnect = mongoose.disconnect.bind(mongoose);

module.exports = { connect, disconnect };
