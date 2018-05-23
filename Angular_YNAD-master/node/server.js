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


// //read/select from database all users
// db.query( 'SELECT * FROM users', (err, ajData ) =>{
//     console.log(ajData);
// })

// //read/select from database all PIECES
// db.query( 'SELECT * FROM pieces', (err, ajData ) =>{
//     console.log(ajData);
// })

// Add headers
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

//Getting data from users
app.get("/user-api", (req, res)=> {
        // res.json([{id:1},{id:2}])
    var stmt = 'SELECT * FROM users';
    db.query(stmt, (err, ajData)=>{
        // console.log(ajData); 
        if (err) {
                // console.log(err);
                return res.json(err);
            }
        return res.json(ajData);
    });
})

//Getting data from pieces
app.get("/pieces-api", (req, res)=> {
    try{
        var stmt = 'SELECT * FROM pieces';
        db.query(stmt, (err, ajData)=>{
            if (err) {
                // console.log(err);
                return res.json(err);
            }
            return res.send(ajData);
        });
    } catch(err) {
        console.log(err.message);
    }
    
})


//add a new user to database from sign up
app.post("/save-user", function(req, res) {
    try {
         // console.log("nú loggast value-in:");
            var user = req.fields
            // console.log(user)

            // Insert a user into database
            var jUser = {
                firstname: user.firstname,
                lastname: user.lastname,
                profession: user.password,
                description: user.description,
                email: user.email,
                password: user.password,
                profile_image: user.profile_image,
                phone_number: user.phone_number,
                instagram_url: user.instagram_url,
                facebook_url: user.facebook_url,
                twitter_url: user.twitter_url,
                roles_idroles: 1,
                location_idlocation: 2,
                thread_idthread: null 
            }

            var stmt = 'INSERT INTO users SET ?'
            db.query(stmt, jUser, (err, jData)=>{
                // console.log(jData);
                if(err) {
                    return res.send(err);
                }
                if(jData.affectedRows == 1){
                    console.log('great, a new JSON user inserted');
                    return res.send(jData)
                }
            })
      } catch (error) {
        console.log(error.message)
      }
})

//add a new user to database from sign up
app.post("/update-user", function(req, res) {
    try {
        var newUserInfo = req.fields
        var firstname = newUserInfo.firstname
        var lastname = newUserInfo.lastname
        var email = newUserInfo.email
        var phone_number = newUserInfo.phone_number
        var description = newUserInfo.description
        var idusers = 1;
        var sNewUserInfo = [ firstname, lastname, email, phone_number, description, idusers]
        var stmt = 'UPDATE users SET firstname = ?, lastname = ?, email = ?, phone_number = ?, description = ? WHERE idusers = ?' 
            db.query(stmt, sNewUserInfo, (err, jData) => {
                // console.log(jData);
                if(err) {
                    return res.send(err);
                }
                if(jData.affectedRows == 1){
                    console.log('a user has been updated');
                    return res.send('success')
                }
            })

      } catch (error) {
        console.log(error.message)
      }
})


//add new piece to database from sign up
app.post("/save-piece", function(req, res) {
    try {
         // console.log("nú loggast value-in:");
            var piece = req.fields
            console.log(piece)

            // Insert a piece into database
            var jPiece = {
                title: piece.title,
                material: piece.material,
                description: piece.description,
                size: piece.size,
                price: piece.price,
                status_idstatus: 1,
                year_idyear: 4,
                piece_image: piece.piece_image,
                users_idusers: 5,
                media_idmedia: 6 
            }

            var stmt = 'INSERT INTO pieces SET ?'
            db.query(stmt, jPiece, (err, jData)=>{
                console.log(jData);
                if(err) {
                    return res.send(err);
                }
                if(jData.affectedRows == 1){
                    console.log('great, a new JSON piece inserted');
                    return res.send(jData)
                }
            })
      } catch (error) {
        console.log(error.message)
      }
})

////delete piece from database
app.get('/delete-from-api/:idpieces', (req, res)=> {
    // console.log(req.params.idpieces)
    var idpieces = req.params.idpieces;
    var stmt = 'DELETE FROM pieces WHERE idpieces = ?'
    db.query(stmt, idpieces, (err, ajData) => {
        return res.send(ajData)
        // if(jData.affectedRows == 1){
        //     console.log('deleted');
        //     //should be a reload here
        // }
    }) 
})



//Listening to port
var port = 1983
app.listen(port, err => {
    if(err) {
        console.log("error");
        return false
    }
    console.log("server is running on port 1983");
})