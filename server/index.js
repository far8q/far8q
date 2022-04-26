const express = require('express')
const bodyParser = require('body-parser')
const mysql =require('mysql')
const cors = require('cors')
var router = express.Router();


const db = mysql.createConnection({
    host: '127.0.0.1',
    user:  'root',
    password: 'messi',
    database: 'publicbuses',

});
const app = express();
app.use(cors());
app.use(express.json());


router.use(bodyParser.urlencoded({extended: true }));

db.connect((err)=>{
    if(err){
        throw err
    }
    console.log(' connected')
})


/*var connection = mysql.createConnection(db);
var del = connection._protocol._delegateError;
connection._protocol._delegateError = function(err, sequence){
  if (err.fatal) {
    console.trace('fatal error: ' + err.message);
  }
  return del.call(this, err, sequence);
};*/


app.get('/insert', function(req, res){
    const e= req.query.email;
    const p=req.query.password;
    console.log(e,p);
    const sql = 'INSERT INTO user_info (email, password ) VALUES (?,?)';

    db.query(
        sql,[e, p],
        (err, result) => {
        if(err){
            console.log(err);
        }
        res.send(result);
    }
    );
});
   /* app.get('/api' , (req, res)=>{
        const email= req.body.Email
        const pass=req.body.pass
        console.log(email)
        console.log(pass)
        
        let sql = "INSERT INTO user_information (email, password)  VALUES (?,?)" ;

        db.query(sql, [email, pass], (err, result)=>{
            console.log(result)
            
        });
        res.send("INSERTED SUCCESFULLY");
        
   });*/
    


app.listen(3001,()=>{
    console.log('server started on port 3001 ')
});
