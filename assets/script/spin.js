var rocket = document.querySelector('.quiz-img');
var btn = document.querySelector('.toggle');
var rotate = false;
var runner;
var degrees = 10;

const start = () => {
  runner = setInterval(() => {
    degrees++;
    rocket.style.transform = `rotate(${degrees}deg)`;
  },50)
}

const stop = () => {clearInterval(runner)}

btn.addEventListener('click', function(){
  !rotate ? (rotate = true , start()) : (rotate = false, stop());
})