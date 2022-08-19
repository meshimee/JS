const colors = ['green','red','purple','yellow','blue'];

const btn = document.getElementById('btn');
const bt = document.getElementById('bt');
const color = document.querySelector('.color');

const box = document.querySelector('#box');


btn.addEventListener("click",function(){
          const randomNumber = getRandomNumber();
          box.style.backgroundColor = colors[randomNumber];
          color.textContent = colors[randomNumber];
})
bt.addEventListener("click",function(){
          const randomNumber = getRandomNumber();
          box.style.backgroundColor = colors[randomNumber];
          color.textContent = colors[randomNumber];
})

function getRandomNumber(){
          return Math.floor(Math.random() * colors.length);
}