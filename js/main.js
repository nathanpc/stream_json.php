// main.js
// The main/general stuff

var image = {
  error: function(image) {
    image.onerror = "";
    image.src = "img/no-poster-placeholder.png";

    return true;
  }
};