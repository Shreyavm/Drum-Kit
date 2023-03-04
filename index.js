
var audio1=new Audio("sounds/tom-1.mp3");
var audio2=new Audio("sounds/tom-2.mp3");
var audio3=new Audio("sounds/tom-3.mp3");
var audio4=new Audio("sounds/tom-4.mp3");
var crash=new Audio("sounds/crash.mp3");
var snare=new Audio("sounds/snare.mp3");
var kick=new Audio("sounds/kick-bass.mp3");

function sounds(num){
    
    switch(num)
    {
        case "w":
            audio1.play();
            break;
        case "a":
            audio2.play();
            break;
        case "s":
            audio4.play();
            break;
        case "d":
            audio3.play();
            break;
        case "j":
            crash.play();
             break;
        case "k":
            kick.play();
            break;
        case "l":
            snare.play();
            break;
        default:
            snare.play();    
    }
}

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var innerHtml=this.innerHTML;
        sounds(innerHtml);
        buttonAnimation(innerHtml);
    });
   
}

document.addEventListener("keydown",function(event){
    var num=event.key;
    sounds(num);
    buttonAnimation(num);
})

function buttonAnimation(currentKey)
{
  document.querySelector("."+currentKey).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed")
  },100);
}


