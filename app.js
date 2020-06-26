const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();
const app = express();
const server = require('http').createServer(app);
const fs = require("fs");


app.use(bodyParser.json({limit: '1mb'}));  //指定参数使用 json 格式
app.use(bodyParser.urlencoded({extended: true}));


app.post('/ps-data-transfer/v1/organization/brandbind/listBindBrands', function (req, res) {
/*    fs.readFile( __dirname + "/resdata/" + "brandlist.json", 'utf8', function (err, data) {
        console.log( data );
        res.send( data );
    });*/
    let data = {
        "success": false,
        "code": 1002,
        "message": "数据不存在",
        "extInfos": {
            "apiResponse": {
                "result": 1005,
                "code": null,
                "msg": "品牌为空",
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

app.post('/ps-data-transfer/v1/organization/brandbind/createAndBindBrand', function (req, res) {
    console.log(req.body);
    // fs.readFile( __dirname + "/resdata/" + "bindres.json", 'utf8', function (err, data) {
    //     console.log( data );
    //     res.send( data );
    // });
    let data = {
        "success": "ture",
        "code": 1000,
        "message": "绑定成功",
        "extInfos": {
            "apiResponse": {
                "result": 1000,
                "code": 200,
                "msg": "成功",
                "data": 386501
            }
        },
        "data": 386500
    }
    console.log(data);
    res.send(data);
});

app.post('/updateOrganization', function (req, res) {
    console.log(req.body)
    fs.readFile( __dirname + "/resdata/" + "updatestatusres.json", 'utf8', function (err, data) {
        console.log( data );
        res.send( data );
    });
});

app.post('/updateRole', function (req, res) {
    console.log(req.body)
    fs.readFile( __dirname + "/resdata/" + "updatestatusres.json", 'utf8', function (err, data) {
        console.log( data );
        res.send( data );
    });
});

app.post('/updatePersonnel', function (req, res) {
    console.log(req.body)
    fs.readFile( __dirname + "/resdata/" + "updatestatusres.json", 'utf8', function (err, data) {
        console.log( data );
        res.send( data );
    });
});

//erp获取签约信息接口
app.post('/mobile/sign/open/agreement/batch', function (req, res) {
    console.log(req.body)
/*    fs.readFile( __dirname + "/resdata/" + "erpres.json", 'utf8', function (err, data) {
        console.log( data );
        res.send( data );
    });*/
    let data = {
        "content": [
            {
                "brandId": req.body.brandId[0],
                "outContractInfoList": [
                    {
                        "outContractNo": "123456",
                        "outContractChannel": "KERUYUN",
                        "outContractMasterId": "123321",
                        "outContractMasterType": "1",
                        "outContractProductCode": "",
                        "outContractStatus": "AD",
                        "extInfo": {
                            "contractStartTime": "12300000000",
                            "contractEndTime": "12400000000"
                        },
                        "creator": "1",
                        "modifier": "123",
                        "gmtCreate": 1591149681030,
                        "gmtModified": 1591149681030
                    }
                ]
            }
        ],
        "message": null,
        "code": 200,
        "success": true
    }
    console.log(data);
    res.send( data );
})

const PORT = process.env.PORT || 8001;
server.listen(PORT);
