(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
    displayMessage(speakWord + " " + name, "goodbye");
  };

  window.byeSpeaker = byeSpeaker;
})(window);
