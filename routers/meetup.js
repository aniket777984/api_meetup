const express = require("express");
const { getAllMeetups, getMeetupById, createMeetup, updateMeetup, deleteMeetup } = require("../controllers/meetup");
const meetupRouter = express.Router();


// ---- /api/meetups
meetupRouter.get('/' , getAllMeetups);
meetupRouter.get('/:id' , getMeetupById)
meetupRouter.post('/' , createMeetup)
meetupRouter.put('/:id' , updateMeetup)
meetupRouter.delete('/:id' , deleteMeetup)



module.exports = {meetupRouter};