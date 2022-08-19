var hours = 00;
var minutes = 00;
var seconds = 00;
var miliseconds = 00;


var h = document.querySelector("#hours");
var m = document.querySelector("#minutes");
var s = document.querySelector("#seconds");
var ms = document.querySelector("#miliseconds");


let interval;

const start = document.querySelector("#startBtn")
const stop = document.querySelector("#stopBtn")
const reset = document.querySelector("#resetBtn")

function startTimer(){
          miliseconds++;
          if(miliseconds < 10){
                    ms.innerHTML = "0", + miliseconds;
          }if(miliseconds > 10){
          ms.innerHTML = miliseconds
          }

          //increase seconds
          if(miliseconds > 99){
                    seconds++;
                    s.innerHTML = seconds;
                    miliseconds = 0;
                    ms.innerHTML = "0" + 0;
          }
          if(seconds < 10){
                    s.innerHTML = "0" + seconds;
          }if(seconds > 10){
                    s.innerHTML = seconds;
          }

          //increase minutes
          if(seconds > 59){
                    minutes++;
                    m.innerHTML = minutes;
                    seconds = 0;
                    s.innerHTML = "0" + 0;
          }
          if(minutes < 10){
                    m.innerHTML = "0" + minutes;
          }
          //increase hours
          if(minutes > 59){
                    hours++;
                    h.innerHTML = hours;
                    minutes = 0;
                    m.innerHTML = "0" + 0;
          }
          if(hours < 10){
                    h.innerHTML = "0" + minutes;
          }     
}

start.addEventListener("click",function(){
          clearInterval(interval);
          var oneSecond = 9;
          interval = setInterval(startTimer,oneSecond);
})
stop.addEventListener("click",function(){
          clearInterval(interval);
})
reset.addEventListener("click",function(){
          hours = 00;
          minutes = 00;
          seconds = 00;
          miliseconds = 00;
          h.innerHTML = "0"+ hours;
          m.innerHTML = "0" + minutes;
          s.innerHTML = "0" + seconds;
          ms.innerHTML = "0" + miliseconds;
})
