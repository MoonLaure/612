// ⏳ Loading 進度條動畫
let progress = 0;
let bar = document.getElementById("progress");

let loading = setInterval(()=>{
  progress += Math.random()*20;

  if(progress >= 100){
    progress = 100;
    clearInterval(loading);
    document.getElementById("loading").style.display="none";
  }

  bar.style.width = progress + "%";
},300);


// 🎬 畫面切換動畫
function goTo(screenId){

  const current = document.querySelector(".screen.active");
  current.classList.remove("active");

  setTimeout(()=>{
    document.getElementById(screenId).classList.add("active");
  },200);
}