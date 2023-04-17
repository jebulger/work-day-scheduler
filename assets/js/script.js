// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentDayEl = document.getElementById("currentDay");
  var textAreaEl = document.getElementsByClassName("description");
  var toDos = readLocalStorage();
  console.log(textAreaEl);
  console.log(toDos);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Event listener for the save buttons
  $(".saveBtn").click(function() {
    var userInput = $(this).siblings("textarea").val().trim();
    var timeBlockEl = $(this).parent().attr("id");
    var timeBlock = timeBlockEl.replace(/[^0-9]/g,"");
    newToDo = {
      time:  timeBlock,
      input:  userInput,
    };
    var toDos = readLocalStorage();
    //find that value and replace it using findIndex
    // if not found, then just put value in the new time slot
    toDos.push(newToDo);
    addToStorage(toDos);
    console.log(localStorage);
    console.log(toDos);
  })
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?4

  // This function checks local storage for any previously saved toDos
  function readLocalStorage() {
    var toDos = localStorage.getItem("toDos");
    if (toDos) {
      toDos = JSON.parse(toDos);
    } else {
      toDos = []
    }
    return toDos;
  }

  // Function to save todo entry into storage
  function addToStorage(toDos) {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }

  // TODO: Add code to display the current date in the header of the page.

  // Grabs current time and stores into variable
  // Then displays the time into the header
  var currentTime = dayjs().format("dddd, MMMM DD");
  currentDayEl.textContent = currentTime;
});
