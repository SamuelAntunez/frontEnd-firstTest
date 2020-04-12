const botonbarra = document.querySelector('.botonbarra');

botonbarra.addEventListener("click", function(){
    console.log("clicked")
    document.getElementById("barra").classList.toggle("active");
});

