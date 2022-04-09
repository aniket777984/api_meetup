const mongoose =  require("mongoose");

const {Schema} = mongoose;
const {Types}  = Schema;
const {String , Number , Array}  = Types;


function createConnections() {
  return  mongoose.connect('mongodb://localhost:27017/meetups');
}

// We are making a function so that we can export it easily and use it in our main js file

module.exports = createConnections;

