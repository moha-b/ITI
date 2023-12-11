window.addEventListener('load', function () {
    myvideo = document.getElementById('myvideo');
    let isPlaying = false;
    let buttons = document.querySelectorAll("button");
    myvideo.addEventListener("click",function () {
        if (isPlaying) {
            myvideo.pause();
        } else {
            myvideo.play();
        }
        isPlaying = !isPlaying;
    });

    myvideo.addEventListener("dbclick", function () {
        myvideo.requestFullscreen();
    });

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            playVideo('universe.mp4');
        });
    }
});

function playVideo(videoSrc) {
    myvideo.src = "Video/" + videoSrc;
    myvideo.load();
    myvideo.play();
}