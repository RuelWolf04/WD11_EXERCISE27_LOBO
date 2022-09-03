const counter = document.querySelector("#count");
const setCount = document.querySelector("#timer");
let num = 0;

function spark(){
  const bg = document.querySelector(".bg");
  let count = setCount.value;
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let rgb = `rgb(${red}, ${green}, ${blue})`;
  
  bg.style.backgroundColor = rgb;

  num += 1;
  count -= num;
  // console.log(count);
  if(count <= 0){
    clearInterval(stopColor);
  }

  newListColor(rgb, count);
  shapeColor(rgb)
}

function stop(){
clearInterval(stopColor);
}

function start(){
  stopColor = setInterval(spark, 1000);
}



function newListColor(newRGB, count){
const list = document.querySelector("#colorsContainer");
const newList = document.createElement("li");
let text = newRGB;

newList.innerHTML = `${text}`;
list.appendChild(newList);
newList.style.color = text;
counter.textContent = count;
}

function reset(){
const list = document.querySelector("#colorsContainer");
const shapes = document.querySelectorAll(".shaper");

  list.textContent = '';
  count = 0;
  num = 0;
  setCount.value = 10;
  counter.textContent = count;
  clearInterval(stopColor);


  shapes.forEach(shape => {
    shape.style.fill = `rgb(221, 221, 253)`
});
}



function shapeColor(rgb){
  const shapes = document.querySelectorAll(".shaper");
shapes.forEach(shape => {
  shape.addEventListener('mouseenter', () => 
    shape.style.fill = `${rgb}`
  )
  
});
}