/*global $*/

function pauseBackgroundVideo() {
  var video = document.getElementById("background-video");
  var btn = document.getElementById("debug-pause-btn");

  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

$(document).ready(function() {
  $('.content').show();
  var video = document.getElementById("background-video");
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
    $("#background-video").fadeOut(10000, function(){
      video.pause();
    });
  }, 35000);
});