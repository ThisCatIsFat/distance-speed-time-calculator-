// i used the toLowerCase method incase user includes capital letters and it results in an invalid answer
// i while loop ensures that if the wrong answer has been entered, the user can easily attempt it again
while (true) {
  try {
    const whatToCalculate = prompt("Calculate: distance, time or speed");
    // if user wants to end loop, they can click on 'cancel' and the process will stop
    if (whatToCalculate === null) {
      break;
    }

    // DISTANCE
    if (whatToCalculate === "distance") {
      // this throw sends a message to the catch that a number has not been entered and the user needs to try again
      const time = prompt("Enter time:");
      // this will let the user know that the error in the code was due to not inputting a number
      if (isNaN(time)) {
        throw "that is not a number, please try again";
      }
      // this will display that the error is from not entering anything into the prompt
      if (time === "") {
        throw `you didn't enter anything, please try again`;
      }

      const speed = prompt("Enter speed:");
      if (isNaN(speed)) {
        throw "that is not a number, please try again";
      }
      if (speed === "") {
        throw `you didn't enter anything, please try again`;
      }
      alert("the answer is: " + speed * time);
      break;
    }

    //   TIME
    else if (whatToCalculate === "time") {
      const distance = prompt("Enter distance:");
      if (isNaN(distance)) {
        throw "that is not a number, please try again";
      }
      if (distance === "") {
        throw `you didn't enter anything, please try again`;
      }
      const speed = prompt("Enter speed:");
      if (isNaN(speed)) {
        throw "that is not a number, please try again";
      }
      if (speed === "") {
        throw `you didn't enter anything, please try again`;
      }
      alert("the answer is: " + distance / speed);
      break;

      // SPEED
    } else if (whatToCalculate === "speed") {
      const distance = prompt("Enter distance:");
      if (isNaN(distance)) {
        throw "that is not a number, please try again";
      }
      if (time === "") {
        throw `you didn't enter anything, please try again`;
      }
      const time = prompt("Enter time:");
      if (isNaN(time)) {
        throw "that is not a number, please try again";
      }
      if (time === "") {
        throw `you didn't enter anything, please try again`;
      }
      alert("the answer is: " + distance / time);
      break;

      /*if user enters an invalid response to the main question, ask them to try again this catches spelling errors or simply if
    the wrong word has been input */
    } else if (
      whatToCalculate != "distance" ||
      whatToCalculate != "time" ||
      whatToCalculate != "speed"
    ) {
      throw "not a valid answer, please try again";
    }
    /* the catch pushes what ever results from the 'throw' to get any error that may be found in the code and let the user know something
    is wrong. Here it is in the form of an alert as this code requires user input, i feel its more appropriate since console
    seems more for developers  */
  } catch (err) {
    alert(err);
  }
}
