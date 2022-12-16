const express =require('express');
const mongoose =require('mongoose');
const bodyParser=require('body-parser')
const passport=require('passport');
const cors=require('cors');



const app = express();

app.use(cors())


const usersvar=require('./routes/user');

const user = require('./models/User');

// Database url
const db=require('./config/keys').mongoURI
const port = process.env.PORT || 3000;
// body-parser middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// passport middleware
app.use(passport.initialize());
require('./config/passport')(passport)



// Connect to Mongodb
mongoose
.connect(db)
.then(()=>
console.log("Db connected"))
// INSERT INTO bootstrap
bootStrap()
// Routes
app.use('/api/users',usersvar);



app.listen(port,()=>console.log(`server is running at ${port}`));
app.get('/',(req,res) => res.send("kitni bar yahi karoge?"));

// Adding comment for testing git
// Super users to be inserted here.
function bootStrap(){
const conn = mongoose.connection;

const collection = conn.collection("users")

}