// function to play sound according to the click / key pressed
function playSound(chr){
    switch (chr) {
        case "w":
            let audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            let audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case "s":
            let audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
            case "d":
                let audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
            case "j":
                let audio5 = new Audio("sounds/snare.mp3");
            audio5.play();
            break;
            case "k":
                let audio7 = new Audio("sounds/kick-bass.mp3");
                audio7.play();
                break;
            case "l":
                let audio6 = new Audio("sounds/crash.mp3");
                audio6.play();
                break;
            
            default:
                console.log(buttonInnerHtml);
            }
        }

// Applying animations on the buttons on click / key pressed
function buttonAnimation(chr){
    document.querySelector("."+chr).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+chr).classList.remove("pressed");
    },99)
}

// Detecting Button press on website
numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(let i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
    let buttonInnerHtml= this.textContent;
    playSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    })
}

// Detecting keyboard press
document.addEventListener("keydown",function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})