var limpiar = function(){
    document.getElementById("cedula").value=""
    document.getElementById("name").value=""
    document.getElementById("apellido").value=""
    document.getElementById("direccion").value=""
    document.getElementById("telefono").value=""
    document.getElementById("edad").value=""
    document.getElementById("estadocivil").value=""
    
        }

function peticion (post, callback){

  var requestOptions = {
    method: post.tipo,
    body: post.payload,
    redirect: 'follow'
  };
return callback (
  fetch(post.host + post.path, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)));

}
    function guardar() {



      var cedula = document.getElementById('cedula').value
      var name = document.getElementById("name").value
      var apellido = document.getElementById("apellido").value
      var direccion = document.getElementById("direccion").value
      var telefono = document.getElementById("telefono").value
      var edad = document.getElementById("edad").value
      var estadocivil = document.getElementById("estadocivil").value


      var urlencoded = new URLSearchParams();
      urlencoded.append("cedula", "" + cedula + "");
      urlencoded.append("name", "" + name + "");
      urlencoded.append("apellido", "" + apellido + "");
      urlencoded.append("direccion", "" + direccion + "");
      urlencoded.append("telefono", "" + telefono + "");
      urlencoded.append("edad", "" + edad + "");
      urlencoded.append("estadocivil", "" + estadocivil + "");

      var post = {
          tipo:"POST",
          host:"http://localhost:3000",
          path:"/Usuarios/Guardar",
          payload:urlencoded
      }

      peticion(post,function({respuesta}){
        console.log(respuesta)
      })

      limpiar()
      }

    var listar = function () {
      var urlencoded = new URLSearchParams();

      var post = {
        tipo:"POST",
        host:"http://localhost:3000",
        path:"/Usuarios/ListarUsuarios",
        payload:null
    }

    peticion(post,function({respuesta}){
      console.log(respuesta)
    })
      
  }

    var actualizar = function () {

      var id = document.getElementById('id').value
      var cedula = document.getElementById('cedula').value
      var name = document.getElementById("name").value
      var apellido = document.getElementById("apellido").value
      var direccion = document.getElementById("direccion").value
      var telefono = document.getElementById("telefono").value
      var edad = document.getElementById("edad").value
      var estadocivil = document.getElementById("estadocivil").value
      var urlencoded = new URLSearchParams();

      urlencoded.append("id", "" + id + "");
      urlencoded.append("cedula", ""+cedula+"");
      urlencoded.append("name", "");
      urlencoded.append("apellido", "");
      urlencoded.append("direccion", "" + direccion + "");
      urlencoded.append("telefono", "" + telefono + "");
      urlencoded.append("edad", "" + edad + "");
      urlencoded.append("estadocivil", "" + estadocivil + "");

      var post = {
        tipo:"POST",
        host:"http://localhost:3000",
        path:"/Usuarios/ActualizarPorCedula",
        payload:urlencoded
      }

      peticion(post,function({respuesta}){
      console.log(respuesta)
      })

      limpiar()

    }



    var eliminar = function () {
      // WARNING: For POST requests, body is set to null by browsers.
      var id = document.getElementById('id').value
      var urlencoded = new URLSearchParams();
      urlencoded.append("id", ""+ id +"");

      var post = {
        tipo:"POST",
        host:"http://localhost:3000",
        path:"/Usuarios/EliminarPorCedula",
        payload:urlencoded
      }

      peticion(post,function({respuesta}){
      console.log(respuesta)
      })

      limpiar()
      }   