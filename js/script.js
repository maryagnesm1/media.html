// ChatGPT assistance: JavaScript to control video and audio buttons
// This allows BOTH video and music to play at the same time

document.addEventListener("DOMContentLoaded", () => {

  // Museum video element
  const video = document.getElementById("museumVideo");

  // Audio (Pixabay music - The Mountain by Dmitrii Kolesnikov)
  const audio = document.getElementById("museumAudio");

  // Buttons for controls
  const videoBtn = document.getElementById("videoBtn");
  const audioBtn = document.getElementById("audioBtn");

  // =========================
  // VIDEO BUTTON (Museum)
  // =========================
  videoBtn.addEventListener("click", () => {

    // If video is paused → play it
    if (video.paused) {
      video.play();

      // Change icon to pause
      videoBtn.innerHTML = '<i class="ph-fill ph-pause"></i>';

    } else {
      // If video is playing → pause it
      video.pause();

      // Change icon back to play
      videoBtn.innerHTML = '<i class="ph-fill ph-play"></i>';
    }
  });

  // =========================
  // AUDIO BUTTON (Music)
  // =========================
  audioBtn.addEventListener("click", () => {

    // If audio is paused → play it
    if (audio.paused) {
      audio.play();

      // Change icon to pause
      audioBtn.innerHTML = '<i class="ph-fill ph-pause"></i>';

    } else {
      // If audio is playing → pause it
      audio.pause();

      // Change icon back to play
      audioBtn.innerHTML = '<i class="ph-fill ph-play"></i>';
    }
  });

});

