
//function trigger/start the magic
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn = document.querySelector("#reset")

const bg = document.querySelector(".bg")
const list = document.querySelector("#colorsContainer")
const shapes = document.querySelectorAll(".shaper")

const interval = document.querySelector("#interval")
const intervalCount = document.querySelector("#intervalCount")

const viewCount = document.querySelector("#count")
const setDuration = document.querySelector("#timer")


startBtn.addEventListener("click", () => {
  let intervalValue = (interval.value * 1000)
  duration()
  setColor = setInterval(changeBg, intervalValue)

  let y = (intervalValue / 1000)
  let x = (intervalValue / 1000)
  setIntervalID = setInterval(() => {
    if(x < 1){
      x = y
    }
    intervalCount.textContent = x
    x--
  }, 1000);


  
  


  startBtn.setAttribute("disabled", '')
  stopBtn.removeAttribute("disabled")
  resetBtn.removeAttribute("disabled")
  interval.setAttribute("disabled", '')
  setDuration.setAttribute("disabled", '')
})

//handles picking random color in rgb values
function changeBg(){
  let red = Math.trunc(Math.random() * 256)
  let green = Math.trunc(Math.random() * 256)
  let blue = Math.trunc(Math.random() * 256)
  let rgb = `rgb(${red}, ${green}, ${blue})`;
  
  bg.style.backgroundColor = rgb
  
  //padding rgb value and count value
  newListColor(rgb)
  shapeColor(rgb)
}


function newListColor(newRGB){
  const newList = document.createElement("li")
  let text = newRGB
  
  newList.innerHTML = text
  list.appendChild(newList)
  newList.style.color = text
  // counter.textContent = count;
  }

function shapeColor(rgb){
    shapes.forEach(shape => {
      // removing hover effect 
    // shape.addEventListener('mouseenter', () => 
      shape.style.fill = rgb
    // )
  })
  }

function duration(){
  let newDuration = setDuration.value
  
  intervalID = setInterval( () => {
    viewCount.textContent = newDuration
    if(newDuration <= 0){
      clearInterval(setColor)
      clearInterval(intervalID)
      clearInterval(setIntervalID)
      stopBtn.setAttribute("disabled", '')
      intervalCount.textContent = 0
    }
    newDuration--
    
  }, 1000)
}


stopBtn.addEventListener('click', () =>{
  clearInterval(setColor)
  clearInterval(intervalID)
  // clearInterval(setIntervalID)

  stopBtn.setAttribute("disabled", '')
})


resetBtn.addEventListener("click", () => {
  clearInterval(setColor)
  clearInterval(intervalID)
  clearInterval(setIntervalID)
  startBtn.removeAttribute("disabled")
  resetBtn.setAttribute("disabled", '')
  interval.value = 1
  interval.removeAttribute("disabled")
  setDuration.value = 10
  setDuration.removeAttribute("disabled")
  stopBtn.setAttribute("disabled", '')
  viewCount.textContent = 0
  list.innerHTML = ''
  intervalCount.textContent = 0
  bg.style.backgroundColor = `rgb(173, 216, 230)`


  shapes.forEach(shape => {
      shape.style.fill = `rgb(221, 221, 253)`
    
        shape.addEventListener('mouseenter', () => 
          shape.style.fill = `rgb(221, 221, 253)`
        )
      

  })
})