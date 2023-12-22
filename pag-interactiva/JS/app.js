
function themePage(){
    var themePage = document.getElementById('theme').value;
    if (themePage == "ligth"){
        document.getElementById('body').classList.add("theme-ligth");
        document.getElementById('body').classList.remove("theme-dark");
    }
    else{
        document.getElementById('body').classList.remove("theme-ligth");
        document.getElementById('body').classList.add("theme-dark");
    }
}


function idioma(){
    var idioma = document.getElementById('language').value;
    if (idioma == "es"){
        document.getElementById('body').innerText.add("es");
        document.getElementById('body').innerText.remove("en");
    }
    else{
        document.getElementById('body').innerText.remove("es");
        document.getElementById('body').innerText.add("en");
    }
}
