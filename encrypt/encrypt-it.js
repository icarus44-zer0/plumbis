function encryptButton() {
  alert("Button clicked!");
  // document.getElementById("encrypt-it").value = changeUppperCase.value.toUpperCase();
}


(function () {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", alertforload);

  /**
   *
   */
  function alertforload() {
    console.log("Window loaded!");
  }



  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
})();
