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

  // =========================
  // VIDEO BUTTON
  // =========================

  if (video && videoBtn) {

    videoBtn.addEventListener("click", () => {

      if (video.paused) {

        video.play();

        // Change button to pause icon
        videoBtn.innerHTML = "❚❚";

      } else {

        video.pause();

        // Change button back to play icon
        videoBtn.innerHTML = "▶";

      }

    });

  }

  // =========================
  // AUDIO BUTTON
  // =========================

  if (audio && audioBtn) {

    audioBtn.addEventListener("click", () => {

      if (audio.paused) {

        audio.play();

        // Change button to pause icon
        audioBtn.innerHTML = "❚❚";

      } else {

        audio.pause();

        // Change button back to play icon
        audioBtn.innerHTML = "▶";

      }

    });

  }

});
