/*global $*/

function pauseBackgroundVideo() {
  var video = document.getElementById("backgroundVideo");
  var btn = document.getElementById("pauseButton");

  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

$(document).ready(function() {
  var video = document.getElementById("backgroundVideo");
  video.play();

  setTimeout(function() {
    video.playbackRate = 0.75;
    video.style.filter = 'blur(8px)'
    $(".content").css('opacity', 1);
  }, 1000);
  setTimeout(function() {
    video.playbackRate = 0.5;
  }, 2000);
  /* setTimeout(function() {
    video.playbackRate = 0.4;
  }, 5000);
  setTimeout(function() {
    video.playbackRate = 0.3;
  }, 4000);
  setTimeout(function() {
    video.playbackRate = 0.2;
  }, 5000); */
  setTimeout(function() {
    $("#backgroundVideo").fadeOut(10000, function(){
      video.pause();
    });
  }, 35000);
});