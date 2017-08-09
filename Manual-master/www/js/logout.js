logout();

function logout(){  
    localStorage.setItem("tipoLogin", "none");
    $(location).attr('href',"index.html");
}
