1) First clone the repository 

// In main directory
2) npm init -- yes in terminal to create a package.json 

3) npm i express mongoose 

4) nodemon index.js  ---- to run the index.js to start the server


// Server is running on localhost:80

// base url of meetup router -- api/meetups/

// localhost:80/api/meetups -- post request to create a meetup
    {
    "titleOfMeetup" :"",
    "nameOfHead"  :"",
    "phoneNo" :"",
    "description" :"Detailed discussion",
    "location" : ""
}

// localhost:80/api/meetups --- get request to get all meetups

// http://localhost:80/api/meetups/id  ---- get request -- to get a specific meetup using id


// http://localhost:80/api/meetups/id --- delete request

// http://localhost:80/api/meetups/id --  put request --- to update a specific meetup using id