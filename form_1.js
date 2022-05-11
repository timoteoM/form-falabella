$(document).ready(function(){
    $("#form1").validate({
        rules:{
            nombre:{
                required: true,
                minlength:3
            },
            apellido:{
                required: true,
                minlength: 3
            },
            correo:{
                required: true,
                email: true,
                size: 25
            },
            pws:{
                required: true,
                password: true
            },
            pais:{
                required: true
            }
        },
        messages:{
            nombre:{
                required:"Tiene que ingresar un nombre xd",
                minlength: "Requiere un largo de minimo 3 caracteres"
            },
            apellido:{
                required: "Tiene que ingresar el apellido",
                minlength: "Requiere un largo de minimo 3 caracteres",
                maxlength: "Requiere un maximo de 5 caracteres"
            },
            correo:{
                required:"Tiene que ingresar un correo",
                email:"Debe ingresar un correo válido",
                size:"Correo demasiado corto para ser ingresado"
            },
            pws:{
                required: "Tiene que ingresar una contraseña",
                password:"hola"
            }
            

            







        }
    });
});