let marqtext = document.getElementById("marqtext");
let start = true; // document.getElementById("click_btn");
// let stop = document.getElementById("click_btn");

start.onclick = ss_btn;
stop.onclick = ss_btn;

function ss_btn() {
  start = !start;

  marqtext.stop();
  // }
  // function ss_btn() {
  if (start) {
    marqtext.start();
  }
}
