const { Meetup }  = require("../models/meetups");


function getAllMeetups(req,res){
    Meetup.find().then((meetups)=>{
        res.json({meetups : meetups})
    })
}

function getMeetupById(req , res){
    const id = req.params.id;
    Meetup.findById(id).then((meetup) =>{
        if(meetup)
        {
            return res.json({meetup});
        }
        return res.status(404).json({message : "Meetup not found"})
    }).catch((err)=>{
        res.status(400).json({error : err.message});
    })
}

function createMeetup(req,res){
    const meetup =req.body;
    Meetup.create(meetup).then((meetup)=>{
        res.status(201).json({meetup})
    }).catch((err)=>{
        res.status(400).json({error : err.message})
    })  
}
function deleteMeetup(req,res){
    const id = req.params.id;
    Meetup.deleteOne({_id : id}).then((deleted)=>{
        res.json({message : deleted})
    })
}
function updateMeetup(req,res){
    const id =req.params.id;
    const update = req.body;
    Meetup.findOneAndUpdate({_id : id}, {$set : update}, {new  : true} ).then((updated)=>{
        res.json({meetups  : updated})
    })
}

module.exports = {getAllMeetups , getMeetupById , updateMeetup , deleteMeetup , createMeetup};