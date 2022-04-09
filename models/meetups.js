const mongoose = require("mongoose");
const {Schema} = mongoose;
const {Types}  = Schema;
const {String , Number }  = Types;

const meetupSchema = new Schema({
  date :{
    type : Date , 
    default : Date.now 
  } ,
  titleOfMeetup : {
     type : String, 
     required : true 
  }, 
  nameOfHead : {
    type : String,
    required : true
  },
  phoneNo :{
    type : Number,
    required : true
  },
  description : {
      type : String , 
      required :true
  },
  location : {
         type: String , 
         required :true
  }
});

//  required :  true means that key value pair is required while creating objects for the colection and saving in the database

const Meetup = mongoose.model("Model" , meetupSchema);


module.exports = {Meetup};
// We are exporing the Meetup class through which we can do all the process such as adding ,  upadting , deleting , reading etc
