function play_video() {
  alert('video is playing');
}

function clicked() {
  var cont = document.querySelector(".container");
  console.log(cont);
  cont.classList.toggle("click");
}

function pause_video() {
  alert('video is paused');
}

function m_over() {
  document.getElementById("mouse").innerHTML = "Moused over!<br>";
}

function m_out() {
  document.getElementById("mouse").innerHTML = "Moused out!<br>";
}