const { response } = require('express');
var express = require ('express')
global.app = express()
global.datos = [];
var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extends:true}))
const mongoose = require('mongoose')

global.config=require(__dirname+'/config.js').config



app.all('*',function(request,response,next){
        var whitelist = request.headers.origin;
    
        response.header('Access-Control-Allow-Origin', whitelist)
        response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
        response.header('Access-Control-Allow-Headers', " authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        response.header("Access-Control-Allow-Credentials", "true");
    
        next()
    })
   
    var cors = require('cors');
const { config } = require('./config');

    app.use(cors({
        origin:function(origin,callback){
            console.log(origin)
            if(!origin) return callback(null,true) 
            
            if(config.listablanca.indexOf(origin)=== -1){
            return callback('error de cors',false)
            }
            
            return callback(null,true)
        }
    
    }))


    mongoose.connect('mongodb://127.0.0.1:27017/' + config.db,{useNewUrlParser:true,useUnifiedTopology:true},(error,response)=>{
        if (error){
            console.log(error)
        }
        else{
            console.log('Conexion establecida con mongo')
        }
    })
    


require(__dirname + '/routes.js')

app.listen(config.puerto,function(){
        console.log('servidor funcionando por el puerto: ' + config.puerto)
 }
 )















 // app.get("/saluda",function(request,response){
//     response.json({state:true,mensaje:'hola mundo'})
//     response.statusCode=200;
// })
// //get
// app.get("/matematica/suma/:num1/:num2/:num3/:num4",function(request,response){
//     var total1 = parseInt(request.params.num1) + parseInt(request.params.num2)
//     var total2 = parseInt(request.params.num3) + parseInt(request.params.num4)
//     var total = total1 * total2
//     response.json({state:true,total:total})
// })
//get
// app.get("/matematica/resta/:num1/:num2",function(request,response){
//     var total = parseInt(request.params.num1) - parseInt(request.params.num2)
//     response.json({state:true,total:total})
// })
// //get
// app.get("/matematica/multiplicacion/:num1/:num2",function(request,response){
//     var total = parseInt(request.params.num1) * parseInt(request.params.num2)
//     response.json({state:true,total:total})
// })
// //get
// app.get("/matematica/division/:num1/:num2",function(request,response){
//     var total = parseInt(request.params.num1) / parseInt(request.params.num2)
//     response.json({state:true,total:total})
// })



// app.post("/matematica/operacion", function(request,response){
//     var num1 = parseFloat(request.body.num1)
//     var num2 = parseFloat(request.body.num2)
//     var total1
//     var total = Math.sqrt(total1= (Math.pow(num1, 6)) + (Math.pow(num2, 3)))
// if (total < 100){
    
//     response.json({state:true,"el reultado es: ":total.toFixed(2)   })
// }
// else {
//     response.json({state:false, "el resultado es mayor a 100":total.toFixed(2)})
// }
// })
