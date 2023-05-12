// Define the update function
function updateCursor(event) {
  var x = event.clientX;
  var y = event.clientY;
  var cursorEffect = document.querySelector(".cursor-effect");
  var glassPane = document.querySelector(".glass-pane");
  var cursorEffectCenter = document.querySelector(".cursor-effect-center");
  var centerX = cursorEffect.offsetLeft + cursorEffect.offsetWidth / 2;
  var centerY = cursorEffect.offsetTop + cursorEffect.offsetHeight / 2;
  var distance = Math.sqrt(Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2));
  var maxDistance = Math.sqrt(
    Math.pow(cursorEffect.offsetWidth / 2, 2) +
      Math.pow(cursorEffect.offsetHeight / 2, 2)
  );
  var opacity = 1 - (distance / maxDistance) ** 3;
  cursorEffect.style.opacity = opacity;
  cursorEffect.style.top = y - 50 + "px";
  cursorEffect.style.left = x - 50 + "px";
  cursorEffectCenter.style.opacity = 1 - opacity;
  glassPane.style.top = 0;
  glassPane.style.left = 0;
}

// Define the animation loop
function loop() {
  requestAnimationFrame(loop);
  updateCursor(lastEvent);
}

// Start the animation loop
var lastEvent;
document.addEventListener("mousemove", function (event) {
  lastEvent = event;
});

loop();
