//ChatGPT help with JS for all pages working with GitHub
// ChatGPT assistance: JavaScript to control video and audio buttons

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("museumVideo");
  const audio = document.getElementById("museumAudio");
  const videoBtn = document.getElementById("videoBtn");
  const audioBtn = document.getElementById("audioBtn");

  if (video && videoBtn) {
    videoBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        videoBtn.innerHTML = '<i class="ph-fill ph-pause"></i>';
      } else {
        video.pause();
        videoBtn.innerHTML = '<i class="ph-fill ph-play"></i>';
      }
    });
  }

  if (audio && audioBtn) {
    audioBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        audioBtn.innerHTML = '<i class="ph-fill ph-pause"></i>';
      } else {
        audio.pause();
        audioBtn.innerHTML = '<i class="ph-fill ph-play"></i>';
      }
    });
  }
});
