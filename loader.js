window.onload=this.fadeOut;

// The page loader fades out onload
function fadeOut(){
    let fadeTarget = document.querySelector('.loader-wrapper');
    let fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            fadeTarget.remove();
        }
    }, 20);
  }