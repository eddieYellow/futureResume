
function playFPX() { 
    pauseWang();
    var fpxVideo = document.getElementById("fpx"); 
    fpxVideo.play(); 
}

function playWang() { 
    pauseFPX();
    var cookVideo = document.getElementById("wanggang"); 
    cookVideo.play(); 
}

function pauseFPX() {
    var fpxVideo = document.getElementById("fpx"); 
    fpxVideo.pause(); 
}
function pauseWang() {
    var cookVideo = document.getElementById("wanggang"); 
    cookVideo.pause(); 
}

function pauseALL() {
    var cookVideo = document.getElementById("fpx"); 
    var fpxVideo = document.getElementById("wanggang"); 
    fpxVideo.pause(); 
    cookVideo.pause();
}