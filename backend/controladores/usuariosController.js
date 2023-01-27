var ModelUsuarios = require(__dirname + '/../model/modelUsuarios').usuarios
var usuariosController = {}

usuariosController.Guardar = function(request,response){
    var post = {
        cedula:request.body.cedula,
        name:request.body.name,
        apellido:request.body.apellido,
        direccion:request.body.direccion,
        telefono:request.body.telefono,
        edad:request.body.edad,
        estadocivil:request.body.estadocivil
    }

    if (post.cedula == "" || post.cedula==null || post.cedula == undefined ){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false
    }
    if( isNaN(post.cedula) ) {
        response.json({state:false,mensaje:"El campo cedula solo acepta valores numericos"})
        return false;
    }

    if (post.cedula.length <= 5){
        response.json({state:false,mensaje:"El campo cedula debe ser superior a 5 números"})
        return false
    }

    if (post.cedula.length > 15){
        response.json({state:false,mensaje:"El campo cedula no debe ser superior a 15 números"})
        return false
    }
    
   
    if (post.name == "" || post.name==null || post.name == undefined ){
        response.json({state:false,mensaje:"El campo nombre es obligatorio"})
        return false
    }

    if (post.name.length <= 2){
        response.json({state:false,mensaje:"El campo nombre debe ser superior a 2 caracteres"})
        return false
    }
    if (post.name.length > 10){
        response.json({state:false,mensaje:"El campo nombre no debe ser superior a 10 caracteres"})
        return false
    }
    

    if (post.apellido == "" || post.apellido==null || post.apellido == undefined ){
        response.json({state:false,mensaje:"El campo apellido es obligatorio"})
        return false
    }

    if (post.apellido.length <= 2){
        response.json({state:false,mensaje:"El campo apellido debe ser superior a 2 caracteres"})
        return false
    }
    if (post.apellido.length > 10){
        response.json({state:false,mensaje:"El campo apellido no debe ser superior a 10 caracteres"})
        return false
    }

    if (post.direccion == "" || post.direccion==null || post.direccion == undefined ){
        response.json({state:false,mensaje:"El campo dirección es obligatorio"})
        return false
    }


    if (post.telefono == "" || post.telefono==null || post.telefono == undefined ){
        response.json({state:false,mensaje:"El campo teléfono es obligatorio"})
        return false
    }
    if( isNaN(post.telefono) ) {
        response.json({state:false,mensaje:"El campo teléfono solo acepta valores numericos"})
        return false;
    }

    if (post.telefono.length <= 5){
        response.json({state:false,mensaje:"El campo teléfono debe ser superior a 5 números"})
        return false
    }

    if (post.telefono.length > 15){
        response.json({state:false,mensaje:"El campo teléfono no debe ser superior a 15 números"})
        return false
    }

    if (post.edad == "" || post.edad==null || post.edad == undefined ){
        response.json({state:false,mensaje:"El campo edad es obligatorio"})
        return false
    }
    if( isNaN(post.edad) ) {
        response.json({state:false,mensaje:"El campo edad solo acepta valores numericos"})
        return false;
    }

    var age = parseInt(post.edad)

    if (age <= 0){
        response.json({state:false,mensaje:"El campo edad debe ser superior a 0 años"})
        return false
    }

    if (age > 120){
        response.json({state:false,mensaje:"El campo edad no debe ser superior a 120 años"})
        return false
    }

    
   if(post.estadocivil == "" || post.estadocivil == null || post.estadocivil == undefined){
       response.json({state:true,mensaje:"El campo estado civil es obligatorio"})
       return false
   }

   ModelUsuarios.Guardar(post,function(respuesta){
    response.json(respuesta)
   })



}

usuariosController.ListarUsuarios = function(request,response){
    ModelUsuarios.ListarUsuarios(null,function(respuesta){
    response.json(respuesta) 
    })
}
usuariosController.ActualizarPorCedula = function(request,response){
    var post = {
        id:request.body.id,
        cedula:request.body.cedula,
        name:request.body.name,
        apellido:request.body.apellido,
        direccion:request.body.direccion,
        telefono:request.body.telefono,
        edad:request.body.edad,
        estadocivil:request.body.estadocivil
    }
        // var posicion = datos.findIndex((item)=> item.cedula == post.cedula)

        // if(posicion == -1){
        //  response.json({state:false,mensaje:"El usuario no existe"})
        //  return false
        // }
        
           

    if (post.id == "" || post.id==null || post.id == undefined ){
            response.json({state:false,mensaje:"El campo id es obligatorio"})
            return false
        }
    
    if (post.cedula == "" || post.cedula==null || post.cedula == undefined ){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false
    }
    if( isNaN(post.cedula) ) {
        response.json({state:false,mensaje:"El campo cedula solo acepta valores numericos"})
        return false;
    }

    if (post.cedula.length <= 5){
        response.json({state:false,mensaje:"El campo cedula debe ser superior a 5 números"})
        return false
    }

    if (post.cedula.length > 15){
        response.json({state:false,mensaje:"El campo cedula no debe ser superior a 15 números"})
        return false
    }

    
   

    if (post.direccion == "" || post.direccion==null || post.direccion == undefined ){
        response.json({state:false,mensaje:"El campo dirección es obligatorio"})
        return false
    }


    if (post.telefono == "" || post.telefono==null || post.telefono == undefined ){
        response.json({state:false,mensaje:"El campo teléfono es obligatorio"})
        return false
    }
    if( isNaN(post.telefono) ) {
        response.json({state:false,mensaje:"El campo teléfono solo acepta valores numericos"})
        return false;
    }

    if (post.telefono.length <= 5){
        response.json({state:false,mensaje:"El campo teléfono debe ser superior a 5 números"})
        return false
    }

    if (post.telefono.length > 15){
        response.json({state:false,mensaje:"El campo teléfono no debe ser superior a 15 números"})
        return false
    }

    if (post.edad == "" || post.edad==null || post.edad == undefined ){
        response.json({state:false,mensaje:"El campo edad es obligatorio"})
        return false
    }
    if( isNaN(post.edad) ) {
        response.json({state:false,mensaje:"El campo edad solo acepta valores numericos"})
        return false;
    }

    var age = parseInt(post.edad)

    if (age <= 0){
        response.json({state:false,mensaje:"El campo edad debe ser superior a 0 años"})
        return false
    }

    if (age > 120){
        response.json({state:false,mensaje:"El campo edad no debe ser superior a 120 años"})
        return false
    }

    
   if(post.estadocivil == "" || post.estadocivil == null || post.estadocivil == undefined){
       response.json({state:true,mensaje:"El campo estado civil es obligatorio"})
       return false
   }

    //   post.posicion = posicion
         ModelUsuarios.ActualizarPorCedula(post,function(respuesta){
         response.json(respuesta) 
        })  
}

usuariosController.EliminarPorCedula = function(request,response){  
    var post = {
        id:request.body.id  
        
    }
    if (post.id == "" || post.id==null || post.id == undefined ){
        response.json({state:false,mensaje:"El campo id es obligatorio"})
        return false
    }
    // if (post.cedula == "" || post.cedula==null || post.cedula == undefined ){
    //     response.json({state:false,mensaje:"El campo cedula es obligatorio"})
    //     return false
    // }
    // if( isNaN(post.cedula) ) {
    //     response.json({state:false,mensaje:"El campo cedula solo acepta valores numericos"})
    //     return false;
    // }

    // if (post.cedula.length <= 5){
    //     response.json({state:false,mensaje:"El campo cedula debe ser superior a 5 números"})
    //     return false
    // }

    // if (post.cedula.length > 15){
    //     response.json({state:false,mensaje:"El campo cedula no debe ser superior a 15 números"})
    //     return false
    // }


    // var posicion = datos.findIndex((item)=> item.cedula == post.cedula)

    // if(posicion == -1){
    //     response.json({state:false,mensaje:"El usuario no existe"})
    //     return false
    // }
    // post.posicion = posicion
    ModelUsuarios.EliminarPorCedula(post,function(respuesta){
        response.json(respuesta)
    })

        
}

module.exports.usuario = usuariosController 