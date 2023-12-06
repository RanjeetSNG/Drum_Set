

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
       var currvar=this.innerHTML;
       makesound(currvar);
        animator(currvar);
    })

}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    animator(event.key);

});



function makesound(key) {
    switch (key) {
        case "z":
            var aud= new Audio("sounds/tom-1.mp3");
                  aud.play();
            break;
        case "x":
            var aud= new Audio("sounds/tom-2.mp3");
                  aud.play();
            break;
        case "c":
            var aud= new Audio("sounds/tom-3.mp3");
                  aud.play();
            break;
        case "v":
            var aud= new Audio("sounds/tom-4.mp3");
                  aud.play();
            break;
        case "b":
            var aud= new Audio("sounds/kick-bass.mp3");
                  aud.play();
            break;
        case "n":
            var aud= new Audio("sounds/snare.mp3");
                  aud.play();
            break;
        case "m":
            var aud= new Audio("sounds/crash.mp3");
                  aud.play();
            break;
    
        default:
            break;
    }
}
function animator(key) {
    var currbutton = document.querySelector("." + key);
    currbutton.classList.add("pressed");
    setTimeout(function () {
         currbutton.classList.remove("pressed");     
    },100)
}