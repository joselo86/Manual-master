/*


function enviarConsulta(asunto, detalle){
    if(!asunto){
        $("#validacion").popup("open");      
    }else if(!detalle){
        $("#validacion").popup("open");  
    }else{
        var parametros = {
            "asunto" : asunto,
            "detalle" : detalle
        };
        $.ajax({
                data:  parametros, //datos que se envian a traves de ajax
                url:   'http://manual-php.j.facilcloud.com/manual/agregar.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                    $("#loader").popup("open");
                    console.log("Inicio");
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    console.log("Fin"); 
                    $("#loader").popup("close");
                    $("#loader").on("popupafterclose", function ()
                    {
                            //any action you want like opening another popup
                            setTimeout(function()
                            {
                                if(response == 'OK'){
                                 $("#exito").popup("open"); 
                             }else{
                                 $("#error").popup("open"); 
                             }

                         }, 100);
                        });
                },
                error: function(){
                    // will fire when timeout is reached
                    console.log("Error");  
                    $("#loader").popup("close");
                    $("#loader").on("popupafterclose", function ()
                    {
                     setTimeout(function()
                     {
                        $("#error").popup("open");
                    }, 100);
                 });
                },
                timeout: 20000 // sets timeout to 20 seconds
            });
    }
}

*/