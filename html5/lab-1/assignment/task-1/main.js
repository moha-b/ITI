window.addEventListener("load", function () {
    let startButton = document.querySelectorAll("button")[0];
    let stopButton = document.querySelectorAll("button")[1];
    let section = document.querySelector("section");
    startButton.onclick = function () {
        section.classList.add("start-animation");
        section.classList.remove("stop-animation");
    }
    stopButton.onclick = function () {
        section.classList.add("stop-animation");
    }
})