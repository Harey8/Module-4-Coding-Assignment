(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
    displayMessage(speakWord + " " + name, "hello");
  };

  window.helloSpeaker = helloSpeaker;
})(window);
