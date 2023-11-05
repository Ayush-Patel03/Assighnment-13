const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/teams", (req,res) => {
    const teams = [];
    
    teams[0] = {
        name: "Falcons",
        city: "Atlanta",
        championships: "0",
        mascot: "Freddie",
        colors: ["red","black","white"],
        img: "images/falcons.jpeg"
    }
    teams[1] = {
        name: "Hawks",
        city: "Atlanta",
        championships: "1",
        mascot: "Harry",
        colors: ["red","black","yellow"],
        img: "images/hawks.jpeg"
    }
    teams[2] = {
        name: "Braves",
        city: "Atlanta",
        championships: "3",
        mascot: "Blooper",
        colors: ["blue","white","red"],
        img: "images/braves.jpeg"
    }
    teams[3] = {
        name: "United",
        city: "Atlanta",
        championships: "1",
        mascot: "none",
        colors: ["red","black","gold"],
        img: "images/united.jpeg"
    }
    teams[4] = {
        name: "Panthers",
        city: "Charlotte",
        championships: "0",
        mascot: "Sir Purr",
        colors: ["Blue","black","white"],
        img: "images/panthers.jpeg"
    }
 


    res.json(teams);
});

app.listen(3000, ()=>{
    console.log("listening");
});