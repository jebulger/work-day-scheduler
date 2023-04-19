$(function () {
  // After page loads, any previously stored toDo items will be generated
  // onto the page.
  var currentDayEl = document.getElementById("currentDay");
  readLocalStorage();
  storageToPage();
  applyTense();
  
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
    time();
    toDos.push(newToDo);
    // This if statement is checking to see for any changes in the toDo list
    // based on their corresponding time slot, and overriting the old input
    // with the new input
    if (toDos !== []) {
      i = toDos.findIndex(item => item.time === newToDo.time);
      if (toDos[i].time == newToDo.time) {
        toDos[i].input = newToDo.input;
      }
    }
    addToStorage(toDos);
  })

  // When the page loads, this function is called and will go and set the
  // class of the timeblocks based on if they are in the present, past, or
  // future tense.
  function applyTense() {
    var timeNow = dayjs().format('HH');
    var hour9 = $( '#hour-9' );
    var hour10 = $( '#hour-10' );
    var hour11 = $( '#hour-11' );
    var hour12 = $( '#hour-12' );
    var hour13 = $( '#hour-13' );
    var hour14 = $( '#hour-14' );
    var hour15 = $( '#hour-15' );
    var hour16 = $( '#hour-16' );
    var hour17 = $( '#hour-17' );

    if (+timeNow === +(hour9.attr("id").replace(/[^0-9]/g,""))) {
      hour9.addClass('present');
      hour9.removeClass('past');
      hour9.removeClass('future');
    } else if (+timeNow < +(hour9.attr("id").replace(/[^0-9]/g,""))) {
      hour9.addClass('future');
      hour9.removeClass('present');
      hour9.removeClass('past');
    } else {
      hour9.addClass('past');
      hour9.removeClass('future');
      hour9.removeClass('present');
    }
    if (+timeNow === +(hour10.attr("id").replace(/[^0-9]/g,""))) {
      hour10.addClass('present');
      hour10.removeClass('past');
      hour10.removeClass('future');
    } else if (+timeNow < +(hour10.attr("id").replace(/[^0-9]/g,""))) {
      hour10.addClass('future');
      hour10.removeClass('present');
      hour10.removeClass('past');
    } else {
      hour10.addClass('past');
      hour10.removeClass('future');
      hour10.removeClass('present');
    }
    if (+timeNow === +(hour11.attr("id").replace(/[^0-9]/g,""))) {
      hour11.addClass('present');
      hour11.removeClass('past');
      hour11.removeClass('future');
    } else if (+timeNow < +(hour11.attr("id").replace(/[^0-9]/g,""))) {
      hour11.addClass('future');
      hour11.removeClass('present');
      hour11.removeClass('past');
    } else {
      hour11.addClass('past');
      hour11.removeClass('future');
      hour11.removeClass('present');
    }
    if (+timeNow === +(hour12.attr("id").replace(/[^0-9]/g,""))) {
      hour12.addClass('present');
      hour12.removeClass('past');
      hour12.removeClass('future');
    } else if (+timeNow < +(hour12.attr("id").replace(/[^0-9]/g,""))) {
      hour12.addClass('future');
      hour12.removeClass('present');
      hour12.removeClass('past');
    } else {
      hour12.addClass('past');
      hour12.removeClass('future');
      hour12.removeClass('present');
    }
    if (+timeNow === +(hour13.attr("id").replace(/[^0-9]/g,""))) {
      hour13.addClass('present');
      hour13.removeClass('past');
      hour13.removeClass('future');
    } else if (+timeNow < +(hour13.attr("id").replace(/[^0-9]/g,""))) {
      hour13.addClass('future');
      hour13.removeClass('present');
      hour13.removeClass('past');
    } else {
      hour13.addClass('past');
      hour13.removeClass('future');
      hour13.removeClass('present');
    }
    if (+timeNow === +(hour14.attr("id").replace(/[^0-9]/g,""))) {
      hour14.addClass('present');
      hour14.removeClass('past');
      hour14.removeClass('future');
    } else if (+timeNow < +(hour14.attr("id").replace(/[^0-9]/g,""))) {
      hour14.addClass('future');
      hour14.removeClass('present');
      hour14.removeClass('past');
    } else {
      hour14.addClass('past');
      hour14.removeClass('future');
      hour14.removeClass('present');
    }
    if (+timeNow === +(hour15.attr("id").replace(/[^0-9]/g,""))) {
      hour15.addClass('present');
      hour15.removeClass('past');
      hour15.removeClass('future');
    } else if (+timeNow < +(hour15.attr("id").replace(/[^0-9]/g,""))) {
      hour15.addClass('future');
      hour15.removeClass('present');
      hour15.removeClass('past');
    } else {
      hour15.addClass('past');
      hour15.removeClass('future');
      hour15.removeClass('present');
    }
    if (+timeNow === +(hour16.attr("id").replace(/[^0-9]/g,""))) {
      hour16.addClass('present');
      hour16.removeClass('past');
      hour16.removeClass('future');
    } else if (+timeNow < +(hour16.attr("id").replace(/[^0-9]/g,""))) {
      hour16.addClass('future');
      hour16.removeClass('present');
      hour16.removeClass('past');
    } else {
      hour16.addClass('past');
      hour16.removeClass('future');
      hour16.removeClass('present');
    }
    if (+timeNow === +(hour17.attr("id").replace(/[^0-9]/g,""))) {
      hour17.addClass('present');
      hour17.removeClass('past');
      hour17.removeClass('future');
    } else if (+timeNow < +(hour17.attr("id").replace(/[^0-9]/g,""))) {
      hour17.addClass('future');
      hour17.removeClass('present');
      hour17.removeClass('past');
    } else {
      hour17.addClass('past');
      hour17.removeClass('future');
      hour17.removeClass('present');
    }
  }

  // This function checks local storage for any previously saved toDos
  function readLocalStorage() {
    var toDos = localStorage.getItem("toDos");
    if (toDos) {
      toDos = JSON.parse(toDos);
    } else {
      toDos = [];
    }
    return toDos;
  }

  // Function to save todo entry into storage
  function addToStorage(toDos) {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }

  // This function will actually put the local storage on the page
  // The index is storing the toDo item's position in the array
  // Using that index to position the toDo items in their correct locations
  function storageToPage() {
    var toDos = readLocalStorage();
    index = toDos.findIndex(item => item.time === '9');
    var textDisplayEl9 = document.getElementById("hour-9").querySelector(".description");
    if (index !== -1) {
      textDisplayEl9.value = toDos[index].input;
    } else {
      textDisplayEl9.value = "";
    }
    index = toDos.findIndex(item => item.time === '10');
    var textDisplayEl10 = document.getElementById("hour-10").querySelector(".description");
    if (index !== -1) {
      textDisplayEl10.value = toDos[index].input;
    } else {
      textDisplayEl10.value = "";
    }
    index = toDos.findIndex(item => item.time === '11');
    var textDisplayEl11 = document.getElementById("hour-11").querySelector(".description");
    if (index !== -1) {
      textDisplayEl11.value = toDos[index].input;
    } else {
      textDisplayEl11.value = "";
    }
    index = toDos.findIndex(item => item.time === '12');
    var textDisplayEl12 = document.getElementById("hour-12").querySelector(".description");
    if (index !== -1) {
      textDisplayEl12.value = toDos[index].input;
    } else {
      textDisplayEl12.value = "";
    }
    index = toDos.findIndex(item => item.time === '13');
    var textDisplayEl13 = document.getElementById("hour-13").querySelector(".description");
    if (index !== -1) {
      textDisplayEl13.value = toDos[index].input;
    } else {
      textDisplayEl13.value = "";
    }
    index = toDos.findIndex(item => item.time === '14');
    var textDisplayEl14 = document.getElementById("hour-14").querySelector(".description");
    if (index !== -1) {
      textDisplayEl14.value = toDos[index].input;
    } else {
      textDisplayEl14.value = "";
    }
    index = toDos.findIndex(item => item.time === '15');
    var textDisplayEl15 = document.getElementById("hour-15").querySelector(".description");
    if (index !== -1) {
      textDisplayEl15.value = toDos[index].input;
    } else {
      textDisplayEl15.value = "";
    }
    index = toDos.findIndex(item => item.time === '16');
    var textDisplayEl16 = document.getElementById("hour-16").querySelector(".description");
    if (index !== -1) {
      textDisplayEl16.value = toDos[index].input;
    } else {
      textDisplayEl16.value = "";
    }
    index = toDos.findIndex(item => item.time === '17');
    var textDisplayEl17 = document.getElementById("hour-17").querySelector(".description");
    if (index !== -1) {
      textDisplayEl17.value = toDos[index].input;
    } else {
      textDisplayEl17.value = "";
    }
  }

  // Function used for 'findIndex()'
  function time(item) {
    return item;
  }

  // Grabs current time and stores into variable
  // Then displays the time into the header
  var currentTime = dayjs().format("dddd, MMMM DD");
  currentDayEl.textContent = currentTime;
});
