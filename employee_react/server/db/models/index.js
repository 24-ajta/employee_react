const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.resolve(__dirname, '../config/config.js'))[env];

if (config.database.url) {
  mongoose.connect(config.database.url, config.database.options);
} else if (config.database.config.dbName) {
  mongoose.connect(`${config.database.protocol}://${config.database.username}:${config.database.password}@${config.database.host}:${config.database.port}`,
    config.database.options
  );
} else {
  mongoose.connect(`${config.database.protocol}://${config.database.username}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.name}`,
    config.database.options
  );
}

const db = () => {
  const models = {};

  fs.readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = require(path.resolve(__dirname, file));
      if (model.modelName) {
        models[model.modelName] = model;
      }
    });

  return models;
};

const models = db();

module.exports = { mongoose, models };
