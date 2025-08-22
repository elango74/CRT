let keys=document.querySelector('button')
for (let i=0;i<keys.length;i++){
    keys[i].addEventListener('click',()=>{
        makesound(keys[i].textContent)
        buttonAnimation(keys[i].textContent);
    });
}


document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

//Anmiation for the button


function buttonAnimation(curr){
    var act=document.querySelector("."+curr);
    act.classList.add("pressed");

    setTimeout(function(){
        act.classList.remove("pressed");
    },100);
}


function makesound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var tom5=new Audio("sounds/kick-bass.mp3")
            tom5.play();
            break;
        case "k":
            var tom6=new Audio("sounds/snare.mp3")
            tom6.play();
            break;
        case "l":
            var tom7=new Audio("sounds/crash.mp3")
            tom7.play();
            break;
    }
}