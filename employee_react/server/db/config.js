const mongoose = require("mongoose");

function conn() {
    return mongoose.connect(process.env.DB_URI);
}

module.exports = conn;
