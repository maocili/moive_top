var myVideo = document.getElementById("myVideo");
function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}
function playClose() {
    if (myVideo.muted) {
        myVideo.muted = false; //打开视频中的音频

    }
    else {
        myVideo.muted = true; //关闭视频中的音频

    }
}