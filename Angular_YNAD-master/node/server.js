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

// //use the post method to get the sign-up data (a form always posts)
// app.post("/save-new-user", function(req, res) {
//     console.log(req);
//     res.send('ok')
// })

//read/select from database all users
db.query( 'SELECT * FROM users', (err, ajData ) =>{
    console.log(ajData[0].firstname);
})

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, x-access-token');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next() 
  }); 

app.get("/api", (req, res)=> {
        // res.json([{id:1},{id:2}])
    var stmt = 'SELECT * FROM users';
    db.query(stmt, (err, ajData)=>{
        console.log(ajData);
        res.json(ajData);
    });
})




// //Insert a user into database
// var jUser = {
//     "firstname": 'Anne Mai',
//     "lastname": 'Særker-Sørensen',
//     "profession": 'Web Developer',
//     "description": 'My name is Anne Mai and love the web',
//     "password": '123',
//     "profile_image": 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c0.5.320.320/p320x320/18156901_10156189333629698_7999203246869048154_n.jpg?_nc_cat=0&oh=ea6744a58f846b3752644e176ea9c35a&oe=5B5F9343',
//     "facebook_url": null,
//     "twitter_url": 'https://www.linkedin.com/in/thorkelsdottir/',
//     "phone_number": '004593845257',
//     "instagram_url": 'https://www.instagram.com/katrinduasig/',
//     "roles_idroles": 1,
//     "location_idlocation": 2,
//     "thread_idthread": null
// }
// var stmt = 'INSERT INTO users SET ?'
// db.query(stmt, jUser, (err, jData)=>{
//     console.log("uData",jData);
//     if(jData.affectedRows == 1){
//         console.log('great, JSON user inserted');
//     }
// })


//Listening to port
var port = 1982
app.listen(port, err => {
    if(err) {
        console.log("error");
        return
    }
    console.log("server is running on port 1982");
})