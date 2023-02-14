const express = require("express"); 
const cron = require("node-cron");
const router = express. Router();

router.post("/schedule", (_, res) => {
try {

    let obj = [
        {
            text: "One",
            time: "2023-02-12 19:55:00"
        },
        {
            text: "Two",
            time: "2023-02-12 19:55:03"
        },
        {
            text: "Three",
            time: "2023-02-12 19:55:06"
        },
        {
            text: "Four",
            time: "2023-02-12 19:55:09"
        },
        {
            text: "Five",
            time: "2023-02-12 19:55:12"
        },
        {
            text: "Six",
            time: "2023-02-12 19:55:15"
        }
    ]
    
    
    
    
    obj.forEach(x => {
        let timeString = x.time
        let [dateString, time] = timeString.split(" ")
    
        let [year, month, date] = dateString.split("-")
        let [hour, min, sec] = time.split(":")
    
        cron.schedule(`${sec} ${min} ${hour} ${date} ${month} *`, () => {
            console.log(x.text)
        })
    })
// let date = new Date();
// let min = date.getMinutes();
// let cuurrentdate =date.getDate();
// let month = date.getMonth(); 
// let hour =date.getHours();
// //console.log(`${min} ${cuurrentdate } ${hour} ${month} ${date}`)

// cron.schedule( `${min + 1} ${hour} ${cuurrentdate} ${month+1} * `, ()=>{
//  console.log("task 1 completed")

// }) 
// cron.schedule( `${min + 2} ${hour} ${cuurrentdate} ${month+1} * `, ()=>{
//     console.log("task 2 completed")
   
// }) 
// cron.schedule( `${min + 3} ${hour} ${cuurrentdate} ${month+1} * `, ()=>{
//     console.log("task 3 completed")
   
// }) 

res.status(201).send({msg:"task scheduled"})
}
catch (error)

{ res.status(500).send("Server error")}})

module.exports = router;

