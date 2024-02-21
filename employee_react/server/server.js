const express = require("express");
const app = express();
const dotenv = require("dotenv");
const conn = require("./db/config.js");
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use(cors({ orgin: 'http://localhost:3000' }));
app.use(express.static(__dirname + "/public"))
app.use(authRoutes);
app.use(userRoutes);

conn()
  .then(() => {
    app.listen(process.env.PORT, error => {
      if (error) {
        console.log(error);
        return;
      }
      return console.log("Server started on: http://localhost:" + process.env.PORT);
    });
  })
  .catch(error => {
    console.log(error);
  });
