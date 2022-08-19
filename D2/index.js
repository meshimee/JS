let count = 0;

const val = document.querySelector("#val");
const btns = document.querySelectorAll(".btn");

const text = "My name is Shimee and I am an upcoming SWE at Google";
let index = 0;

function writeText(){
          document.getElementById("heading").innerText = text;
}
writeText();

btns.forEach(function(btn){
          btn.addEventListener("click",function(e){
                    const styles = e.currentTarget.classList;

                    if(styles.contains("dec")){
                              count --;
                    }
                    else if(styles.contains("inc")){
                              count ++;
                    }
                    else{
                              count = 0;
                    }

                    if(count > 0){
                              val.style.color="blue";
                    }
                    if(count < 0){
                              val.style.color="green";
                    }
                    if(count === 0){
                              val.style.color="red";
                    }
                    val.textContent = count;
          })
})