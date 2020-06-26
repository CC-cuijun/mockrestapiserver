const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();
const app = express();
const server = require('http').createServer(app);
const fs = require("fs");

app.use(bodyParser.json({limit: '1mb'}));  //指定参数使用 json 格式
app.use(bodyParser.urlencoded({extended: true}));


app.post('/listBindBrands', function (req, res) {
/*    fs.readFile( __dirname + "/resdata/" + "brandlist.json", 'utf8', function (err, data) {
        console.log( data );
        res.send( data );
    });*/
    let data = {
        "success": false,
        "code": 1001,
        "message": "数据不存在",
        "extInfos": {
            "apiResponse": {
                "result": false,
                "code": 200,
                "msg": "null",
                "data": null
            }
        },
        "data": null
    }
    res.send( data );
})

app.get('/getsyncstatus', function (req, res) {
    fs.readFile( __dirname + "/resdata/" + "syncstatusres.json", 'utf8', function (err, data) {
        console.log( data );
        res.send( data );
    });
})

app.get('/getbrandlist/:id', function (req, res) {
    fs.readFile( __dirname + "/resdata/" + "brandlist.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var brand = data["brand" + req.params.id]
        console.log( brand );
        res.send( JSON.stringify(brand));
    });
})

app.post('/updateOrganization', function (req, res) {
    console.log(req.body)
    fs.readFile( __dirname + "/resdata/" + "updatestatusres.json", 'utf8', function (err, data) {
        console.log( data );
        res.send( data );
    });
});


const PORT = process.env.PORT || 8001;
server.listen(PORT);
