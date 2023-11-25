$(document).ready(function () {
  const currentDay = document.getElementById('currentDay')
  const allHourContainer = document.getElementsByClassName('time-block')
  const nine = document.getElementById('hour-9') //all the hour blocks need the value assigned to compair to the current time and assign the correct color for the user 
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
  let storedData //this is declared to pull the stored data from the colorCodeHours function to be used later in the event listeners
  currentDay.textContent = dayjs().format('MMM/DD/YYYY') // this displays the current date to the user 

  console.log(dayjs().format('H'))
  function colorCodeHours() { // this function checks local storage for any saved input and colors the hours according to the time found in the dayjs function. ps its intended the colors, the save data button, and the return saved data will cause the page to change the colors of the hour blocks if the time changes
    for (let i = 0; i < hoursADay.length; i++) { 
      storedData = localStorage.getItem("userText")//this gets the locally stored data frfom the user
      storedData = JSON.parse(storedData)
      if (storedData != null) { //this stops null from displaying if the user has no data stored in an hour of the planner
        hoursADay[i].children[1].value = storedData[i]
      }
      if (hoursADay[i].value < dayjs().format('H')) {//this if and its else if statements color the hour blocks according to the time found in dayjs 
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
  colorCodeHours()//this calls the function to render the page on the initial load of the page
  for (let i = 0; i < hoursADay.length; i++) {//this creates the listeners for the buttons and when its clicked it will store the users input under userText
    hoursADay[i].children[2].addEventListener("click", function () {
      console.log(hoursADay[i].children[1].value)
      let userInput = [] //this must be declared empty to stop errors in loading
      if (storedData == undefined) {//if thers no storred data this will reset the user input to the correct format for the used for loops
        userInput = ['', '', '', '', '', '', '', '', '']
      }
      else if (storedData) {//this will load the users stored data when the page is closed and reopened
        userInput = storedData
      }
      userInput[i] = hoursADay[i].children[1].value//this is how it saves the data in the correct slot in the array
      localStorage.setItem("userText", JSON.stringify(userInput))//this saves the data to local storage
      colorCodeHours()//this is called to recolor the page when any save button is clicked 
    })
  }
})
