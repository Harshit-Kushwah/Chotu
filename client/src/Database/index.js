const qu = require('./query.js')
const express = require('express')
const sql = require('mysql')
const body = require('body-parser')
const app = express()
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

const con = sql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bb15502456e8c5',
    password: 'cfa9ff36',
    database: 'heroku_1f31d6bcc6474b1'
})

con.connect((err) => {
    if (!err)
        console.log("Helloo")
    else
        console.log("sss")
})
app.get('/get', (req, res) => {
    if (req) {
        con.query(qu.getdt1, (err, nex) => {
            if (!err) {
                res.send(nex)
            } else
                res.send("Error")
        })
    } else
        console.log("Select Comand Error")
})
app.get('/get/:id', (req, res) => {
    if (req) {
        con.query(qu.getdt2, [req.params.id], (err, nex) => {
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
     
        con.query(qu.postdata + "('" + a1 + "','" + a2 + "','" + a3 + "')", (err, nex) => {
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
        con.query(qu.deletee, [req.params.id], (err, nex) => {
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
        con.query('update spi set fnm="' + a1 + '",Age="' + a2 + '",city="' + a3 + '" where id="' + a4 + '"', [req.params.id], (err, next) => {
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
    console.log(`Connecting port is ${port}`)
})