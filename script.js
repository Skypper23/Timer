let alertSound = new Audio("alarm.mp3");
let timeStart = false;
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let interval;

function Start(){
    timeStart = true
    interval = setInterval(()=>{
        if(hour.value>1 && min.value<= 0 && sec.value<= 0){
            hour.value -= 1;
            min.value = 59;
            sec.value = 60;
        }
        if(hour.value>0 && min.value<= 0 && sec.value<= 0){
            hour.value = 0;
            min.value = 59;
            sec.value = 60;
        }
        if(min.value>0 && sec.value<=0){
            if(min.value==1){
                sec.value += 60;
            }
            min.value -= 1;
            sec.value = 60;
        }
        if(sec.value>0){
            sec.value -= 1;
        }

        if(hour.value<=0 && min.value<=0 && sec.value<=0){
            clearInterval(interval);
            timeStart = false;
            console.log("Paused");
            alertSound.play();
        }
    }, 1000);
}

function Pause(){
    clearInterval(interval);
    console.log("Paused");
}