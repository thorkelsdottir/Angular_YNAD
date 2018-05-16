//require from my package.json
var mysql = require('mysql')
var express = require('express')
var app = express()
var formidable = require('express-formidable')
app.use(formidable())
var bodyParser = require('body-parser')

//create a connection to mysql
var db = mysql.createConnection({
    host: "localhost", 
    user: "admin",
    password: "password",
    database: "dbynad",
    port: 8889
})

//connect to my dbynad database 
db.connect(err => {
    if(err){
        console.log('Error'); process.exit()
    }
    console.log('Connected');
})

//use the post method to get the sign-up data (a form always posts)
app.post("/save-new-user", function(req, res) {
    console.log(req);
    res.send('ok')
})

//read/select from database all users
db.query( 'SELECT * FROM users', (err, ajData ) =>{
    console.log(ajData);
})


///starting for the chat
var messages = [{text:'Whats up?', owner: 'Katrin'},{text:'Not much!', owner: 'Birna'}];
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
// create router with express that will let us seperate and orginaize our differnt routes
// We will make one router for our general purpous web api routes and later another one for authentication specific routes
// new router
var api = express.Router();
api.get('/messages', (req, res) => {
    // res.send('hello')
    res.json(messages)
})
api.post('/messages', (req, res) => {
    // res.send('hello')
    // console.log(req.body)
    // res.json(messages)
    // push message to body in service chat c
    messages.push(req.body)
    // status ok
    // res.sendStatus(200);
    res.json(req.body);
})
// tell express to use our new router
// creates base route for the first property. 
//So in order to acces our routes now, we have to start with /api/...
app.use('/api', api)

//Insert a user into database
var jUser = {
    "firstname": 'Anne Mai',
    "lastname": 'Særker-Sørensen',
    "profession": 'Web Developer',
    "description": 'My name is Anne Mai and love the web',
    "password": '123',
    "profile_image": 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c0.5.320.320/p320x320/18156901_10156189333629698_7999203246869048154_n.jpg?_nc_cat=0&oh=ea6744a58f846b3752644e176ea9c35a&oe=5B5F9343',
    "facebook_url": null,
    "twitter_url": 'https://www.linkedin.com/in/thorkelsdottir/',
    "phone_number": '004593845257',
    "instagram_url": 'https://www.instagram.com/katrinduasig/',
    "roles_idroles": 1,
    "location_idlocation": 2,
    "thread_idthread": null
}
var stmt = 'INSERT INTO users SET ?'
db.query(stmt, jUser, (err, jData)=>{
    console.log("uData",jData);
    if(jData.affectedRows == 1){
        console.log('great, JSON user inserted');
    }
})


//Listening to port
var port = 1982
app.listen(port, err => {
    if(err) {
        console.log("error");
        return
    }
    console.log("server is running on port 1982");
})