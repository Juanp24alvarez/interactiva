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
    let idioma = document.getElementById('idioma').value;

    if(idioma == 1){
        
        document.getElementById('p1').innerHTML   = "1 Sandwich BBQ Crunch (1 filete de poillo apanado)";
        document.getElementById('p2').innerHTML   = "1 Kentucky hamburguesa / sandwich (1 filete de pechuga de pollo apanado,pepinillos...)";
        document.getElementById('p3').innerHTML   = "1 sandwich BBQ Crunch (1 filete de pollo) + 1 papa pequeña + gaseosa Pet...";
        document.getElementById('p4').innerHTML   = "1 Kentucky  Coronel hamburguesa / sandwich (1 filete de pechuga de pollo apanada,ensalada...";
        
        document.getElementById('p5').innerHTML   = "1 Kentucky hamburguesa / sandwich (1 filete de pechuga de pollo apanada,pepinillos...";
        document.getElementById('p6').innerHTML   = "1 Kentucky hamburguesa / sandwich (1 filete de pechuga de pollo apanada,pepinillos...";
        document.getElementById('p7').innerHTML   = "1 sandwich  Crispy BBQ(1 filete de pechuga extra grande, triple emsalada,cebolla crip...";
        document.getElementById('p8').innerHTML   = "1 sandwich  Crispy BBQ(1 filete de pechuga extra grande, triple emsalada,cebolla crip...";
    } else {
        
        document.getElementById('p1').innerHTML   = "BBQ Crunch Sandwich (1 breaded chicken fillet)";
        document.getElementById('p2').innerHTML   = "Kentucky burger / sandwich (1 breaded chicken breast fillet, pickles...)";
        document.getElementById('p3').innerHTML   = "1 BBQ Crunch sandwich (1 chicken fillet) + 1 small potato + Pet soda...";
        document.getElementById('p4').innerHTML   = "1 Kentucky Colonel burger / sandwich (1 breaded chicken breast fillet, salad...";
        
        document.getElementById('p5').innerHTML   = "1 Kentucky hamburger / sandwich (1 breaded chicken breast fillet, pickles...";
        document.getElementById('p6').innerHTML   = "1 Kentucky hamburger / sandwich (1 breaded chicken breast fillet, pickles...";
        document.getElementById('p7').innerHTML   = "1 Crispy BBQ sandwich (1 extra large breast fillet, triple salad, crispy onion...";
        document.getElementById('p8').innerHTML   = "1 Crispy BBQ sandwich (1 extra large breast fillet, triple salad, crispy onion...";
        
    }
}
