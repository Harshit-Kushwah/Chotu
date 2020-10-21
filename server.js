const qu = require('./query.js')
const express = require('express')
const sql = require('mysql')
const body = require('body-parser')
const app = express()
const path = require('path');
app.use(body.json());
app.use(body.urlencoded({
    extended: true
}));

// const con = sql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'emp'
// })
const con = {
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bb15502456e8c5',
    password: 'cfa9ff36',
    database: 'heroku_1f31d6bcc6474b1'
}
var conn;
function handleDisconnect() {
  conn = sql.createConnection(con);                                             
  conn.connect(function(err) {             
    if(err) {                                   
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    }                                   
  });                                
  conn.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                        
    } else {                                      
      throw err;                                  
    }
  });
}

handleDisconnect();
app.get('/get', (req, res) => {
    if (req) {
        conn.query(qu.getdt1, (err, nex) => {
            if (!err) {
                
                res.send(nex)
            } else
                res.send("Error")
        })
    } else
        console.log("Select Comand Error")
})

if (process.env.NODE_ENV === 'production') {
// app.get('/', (req, res) => {
//     if (req) {
//         connection.query(qu.getdt1, (err, nex) => {
//             if (!err) {
                
//                 res.send(nex)
//             } else
//                 res.send("Error")
//         })
//     } else
//         console.log("Select Comand Error")
// })    
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.get('/get/:id', (req, res) => {
    if (req) {
        conn.query(qu.getdt2, [req.params.id], (err, nex) => {
            if (!err) {
                res.send(nex)
            } else
                res.send(err)
        })

    } else
        console.log("Id Error")
})
app.post("/post", (req, res) => {
    if (req) {
        let a1 = req.body.fnm
        let a2 = req.body.age
        let a3 = req.body.city
     
        conn.query(qu.postdata + "('" + a1 + "','" + a2 + "','" + a3 + "')", (err, nex) => {
            if (!err) {
                  // console.log(req.body)
                res.send("Post")
            } else {
              // console.log(err)
            }
        })
    } else {
        console.log("Post Error")
    }
})
app.delete("/del/:id", (req, res) => {
    if (req) {
        conn.query(qu.deletee, [req.params.id], (err, nex) => {
            if (!err) {
                res.send("del")
            } else {
                res.send("Errorr in Del")
            }
        })

    } else {
        console.log(err)
    }
})
app.put("/update/:id", (req, res) => {
    if (req) {
        let a4 = req.body.id;
        let a1 = req.body.fnm;
        let a2 = req.body.age1
        let a3 = req.body.city1
        conn.query('update spi set fnm="' + a1 + '",Age="' + a2 + '",city="' + a3 + '" where id="' + a4 + '"', [req.params.id], (err, next) => {
            if (!err) {
                res.send("Update")
            } else {
                res.send("Error in up")
            }
        })
    } else {
        console.log(err)
    }
})
var port =process.env.PORT || 4100
app.listen(port, () => {
    console.log(`Connecting porting is ${port}`)
})