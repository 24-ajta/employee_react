module.exports = {
  "development": {
    "database": {
      "url": "mongodb://127.0.0.1:27017/employee",
      "options": {
        "useNewUrlParser": true,
        "dbName": process.env.dbName
      }
    }
  },
  "test": {
    "database": {
      "url": process.env.DB_URI,
      "options": {
        "useNewUrlParser": true,
        "dbName": process.env.dbName
      }
    }
  },
  "production": {
    "database": {
      "url": process.env.DB_URI,
      "options": {
        "useNewUrlParser": true,
        "dbName": process.env.dbName
      }
    }
  }
};
