//ChatGPT help for JS buttons not working
// ChatGPT assistance: JavaScript to control museum video and music buttons
// Allows both video and audio to play independently
document.addEventListener("DOMContentLoaded", () => {

  // VIDEO
  const video = document.getElementById("museumVideo");
  const videoBtn = document.getElementById("videoBtn");

  // AUDIO
  const audio = document.getElementById("museumAudio");
  const audioBtn = document.getElementById("audioBtn");

  // VIDEO BUTTON
  if (video && videoBtn) {

    videoBtn.addEventListener("click", () => {

      if (video.paused) {

        video.play();
        videoBtn.innerHTML = "❚❚";

      } else {

        video.pause();
        videoBtn.innerHTML = "▶";

      }

    });

  }

  // AUDIO BUTTON
  if (audio && audioBtn) {

    audioBtn.addEventListener("click", () => {

      if (audio.paused) {

        audio.play();
        audioBtn.innerHTML = "❚❚";

      } else {

        audio.pause();
        audioBtn.innerHTML = "▶";

      }

    });

  }

});
