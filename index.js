const express = require("express");
const { meetupRouter } = require("./routers/meetup");
const app = express();
const port =80;
const createConnections = require("./db/index");

app.use(express.json());

createConnections().then(()=>{
    console.log("MongoDb connected....");
});


app.get('/' , (req,res)=>{
    res.json({message : "Api is Working"});
})

// Base url for the meetups router
app.use('/api/meetups' , meetupRouter);

app.listen(port , ()=>{
    console.log("Server is running on port " + port);
})
