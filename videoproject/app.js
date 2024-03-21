const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function(){ //aqui creamos una funcion a la clase btn cuando hacemos click
    if(!btn.classList.contains("slide")) {//si el btn contiene la clase slide
    btn.classList.add("slide");//Aqui se agrega, si el btn no contiene la clase slide, entonces se le agrara esta clase la cual se dezlizara un 50% a la izquierda 
   video.pause();//con este metdo le daremos pausa al video 
}
    else {
        btn.classList.remove("slide");//si tiene la clase slide entonces se remueve
    video.play();//con este metodo le daremos play al video 
    }
})

//look for the function slide in the css, thats the key