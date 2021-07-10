const $video = document.querySelector("#video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const anterior = document.querySelector("#anterior");
const siguiente = document.querySelector("#siguiente");

play.addEventListener("click", darplay);

function darplay() {
  $video.play();
  play.hidden = true;
  pause.hidden = false;
}
pause.addEventListener("click", darpause);

function darpause() {
  $video.pause();
  play.hidden = false;
  pause.hidden = true;
}

anterior.addEventListener("click", daranterior);

function daranterior() {
  $video.currentTime -= 10;
}

siguiente.addEventListener("click", darsiguiente);

function darsiguiente() {
  $video.currentTime += 10;
}
const progreso = document.querySelector("#progreso");
$video.addEventListener("loadedmetadata", loaded);
$video.addEventListener("timeupdate", Timeupdate);

function loaded() {
  progreso.max = $video.duration;
  console.log("ha cargado el vídeo");
}

function Timeupdate() {
  progreso.value = $video.currentTime;
  console.log("minuto en el que estamos");
}
progreso.addEventListener("input", input);
function input() {
  $video.currentTime = progreso.value;
  console.log(progreso.value);
}
