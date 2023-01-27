var usuariosController = require(__dirname + '/controladores/usuariosController.js').usuario
//CRUD
//Create

app.post("/Usuarios/Guardar", function(request,response){
    usuariosController.Guardar(request,response) 
})



//Read
app.post("/Usuarios/ListarUsuarios", function(request,response){
    usuariosController.ListarUsuarios(request,response)
})



//Update
app.post("/Usuarios/ActualizarPorCedula", function(request,response){
    usuariosController.ActualizarPorCedula(request,response)
})



//Delete
app.post("/Usuarios/EliminarPorCedula",function(request,response){
    usuariosController.EliminarPorCedula(request,response)
})
