const express = require("express");
const dotenv = require("dotenv");
const conn = require("./db/config.js");
const router = require("./router.js");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:3000'
}));

app.use(express.json({
    limit: "25mb"
}));
app.use(express.urlencoded({
    extended: true,
    limit: "25mb"
}));

app.use("/", express.static("./static"));
app.use("/api", router);

conn().then(() => {
    app.listen(process.env.PORT, error => {
        if (error) {
            console.log(error);
            return;
        }
        return console.log("Server started on:   http://localhost:" + process.env.PORT);
    });
}).catch(error => {
    console.log(error);
});
