function button(glow) {
    var glowmf=document.querySelector("."+glow);
    glowmf.classList.add("pressed");
    setTimeout(function() {
        glowmf.classList.remove("pressed");
    },100);


};


document.addEventListener('keypress', function drum(ayushi) {
    var a=ayushi.key;
    button(a);
    switch (a) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        default:
            break;
    }

     
    });

    for(var i=0;document.querySelectorAll(".drum").length;i++){
        document.querySelectorAll("button")[i].addEventListener('click',function sound()
        {
            var butt=this.innerHTML;
            button(butt);
            switch (butt) {
                case 'w':
                    var audio = new Audio('sounds/tom-1.mp3');
                    audio.play();
                    break;
                case 'a':
                    var audio = new Audio('sounds/tom-2.mp3');
                    audio.play();
                    break;
                case 's':
                    var audio = new Audio('sounds/tom-3.mp3');
                    audio.play();
                    break;
                case 'd':
                    var audio = new Audio('sounds/tom-4.mp3');
                    audio.play();
                    break;
                case 'j':
                    var audio = new Audio('sounds/kick-bass.mp3');
                    audio.play();
                    break;
                case 'k':
                    var audio = new Audio('sounds/crash.mp3');
                    audio.play();
                    break;
                case 'l':
                    var audio = new Audio('sounds/snare.mp3');
                    audio.play();
                    break;
    
                default:
                    break;
            }
        })
    
    
    };


