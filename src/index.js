const express = require("express")
const cors = require("cors");
const mongoose = require("./utils/DBConection")
const UsersRoute = require("./routes/UsersRoute")
 
const app = express()
const port = process.env.PORT || 4000;

app.use(cors());
//middleware
app.use(express.json());
app.use("/", UsersRoute)

app.get("/", (req, res) =>{
    res.send("get the hell out of here");
})

mongoose.DBConection();

app.listen(port, ()=> console.log("PORT YOU'RE USING IS:", port));