

const express=require("express")
const app=express()

const cron = require("node-cron");
const router = express. Router();
const route=require("./route")
 app.use("/",route)

 app.listen(process.env.PORT || 3000, function(){
    console.log("running at "+(process.env.PORT||3000))
 })
