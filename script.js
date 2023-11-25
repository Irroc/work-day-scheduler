// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  const currentDay = document.getElementById('currentDay')
  const allHourContainer = document.getElementsByClassName('time-block')
  const nine = document.getElementById('hour-9')
  nine.value = 9
  const ten = document.getElementById('hour-10')
  ten.value = 10
  const eleven = document.getElementById('hour-11')
  eleven.value = 11
  const twelve = document.getElementById('hour-12')
  twelve.value = 12
  const one = document.getElementById('hour-1')
  one.value = 13
  const two = document.getElementById('hour-2')
  two.value = 14
  const three = document.getElementById('hour-3')
  three.value = 15
  const four = document.getElementById('hour-4')
  four.value = 16
  const five = document.getElementById('hour-5')
  five.value = 17
let userInput
  const hoursADay = [nine, ten, eleven, twelve, one, two, three, four, five]
  let storedData
  currentDay.textContent = dayjs().format('MMM/DD/YYYY')
  
  console.log(dayjs().format('H'))
  function colorCodeHours() {
    for (let i = 0; i < hoursADay.length; i++) {
      storedData = localStorage.getItem("userText")
      
      storedData = JSON.parse(storedData)
      if (storedData != null){
      hoursADay[i].children[1].value = storedData[i]
      }
      if (hoursADay[i].value < dayjs().format('H')) {
        hoursADay[i].classList.add('past')
      }
      else if (hoursADay[i].value == dayjs().format('H')) {
        hoursADay[i].classList.add('present')
      }
      else if (hoursADay[i].value > dayjs().format('H')) {
        hoursADay[i].classList.add('future')
      }
    }
  }
  colorCodeHours()
  console.log (hoursADay[0].children[2])
  for (let i = 0; i < hoursADay.length; i++) {
    hoursADay[i].children[2].addEventListener("click", function(){
      console.log(hoursADay[i].children[1].value)
      let userInput = []
      if(storedData == undefined){
        userInput = [ '','','','','','','','','' ]
       }
       else if (storedData){
        userInput = storedData
       }
      userInput[i] = hoursADay[i].children[1].value
      localStorage.setItem("userText", JSON.stringify(userInput))
      colorCodeHours()})
  }
  // allHourContainer.on('click', '.time-block', colorCodeHours)

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

})
