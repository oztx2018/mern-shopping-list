const  express = require("express");
const  mongoose = require("mongoose");
const  bodyParser = require("body-parser");
const path = require('path')

const items = require('./routes/api/items');




const app= express();

// Middleware for body-parser
app.use(bodyParser.json());

// Config Database
// this transfer the mlab link to mongodb to inside db variable
const db = require('./config/keys').mongoURI;

//connect mongoDB

mongoose
   // connect database
   .connect(db, {useNewUrlParser:true})
   // then print the connection 
   .then(() => console.log('MongoDB conntected...'))
   // if there is a error print it
   .catch(err => console.log(err)); 


app.use('/api/items', items)

//Serve static asstes if in productions 
if(process.env.NODE_ENV === 'production') {
   app.use(express.static('client/build'));
   app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
       
   });
}

//port set up
   const port = process.env.PORT || 5050;
   // then run it
   app.listen(port, ()=> console.log ('Server is runnging on port' + " " + port));


