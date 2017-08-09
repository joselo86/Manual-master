function loginInvitado(){  
    localStorage.setItem("tipoLogin", "invitado");
    console.log("tipoLogin: " + localStorage.getItem("tipoLogin"));
    $(location).attr('href',"index.html");
}