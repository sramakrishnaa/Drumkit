for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var bttn = this.innerHTML;
        sound(bttn);
        btnAnime(bttn);
    });
}

document.addEventListener("keypress", function (evet) {
    sound(evet.key);
    btnAnime(evet.key);
});

function sound(btnPress) {
    switch (btnPress) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }

}

function btnAnime(btnclick){
    var clickbtn=document.querySelector("."+btnclick);
    clickbtn.classList.add("pressed");

    setTimeout(function(){
        clickbtn.classList.remove("pressed");
    },100);
}