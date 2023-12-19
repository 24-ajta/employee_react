import express from "express";
import dotenv from "dotenv";
import conn from "./db/config.js";
import router from "./router.js"
import cors from "cors";

dotenv.config();

const app = express();

// app.post('/cors', (req, res) => {
//     res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.send({ "msg": "This has CORS enabled " })
// });
app.use(cors({
    orgin:'http://127.0.0.1:3000'
}));

app.use(express.json({
    limit:"25mb"
}));
app.use(express.urlencoded({
    extended:true,
    limit:"25mb"
}))




app.use("/",express.static("./static"));
app.use("/api",router);

conn().then(()=>{
    app.listen(process.env.PORT,error=>{
        if(error){
            console.log(error);
            return;
        }
        return console.log("Server started on:   http://localhost:"+process.env.PORT); 
    })
})
.catch(error=>{
    console.log(error);
})