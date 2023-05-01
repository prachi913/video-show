
const btn = document.getElementById("showbtn")

const close = document.querySelector(".close");

const containervideo = document.getElementById("displaynone");
const video=document.querySelector("video")

btn.addEventListener("click", () => {
    containervideo.classList.remove("active")
})
close.addEventListener("click", () => {
    containervideo.classList.add("active");
    video.pause()
    video.currentTime=0
});