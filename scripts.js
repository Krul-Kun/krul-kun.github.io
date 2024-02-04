  // Show the overlay when the page loads
window.onload = function () {
    document.getElementById('overlay').style.display = 'flex';
 };

function animateTitle(Title = "@krulowy", delay = 1000) {
    let counter = 0;
    let direction = true;
    aniTitle = setInterval(function () {
        if (counter == Title.length)
            direction = false;
        if (counter == false)
            direction = true;
        counter = (direction == true) ? ++counter : --counter;
        newtitle = (counter == 0) ? "@" : Title.slice(0, counter);
        document.title = newtitle;
    }, delay)

}

animateTitle(Title = "@krulowy", delay = 350)

function removeOverlay() {
    var overlay = document.getElementById('overlay');
    var profile = document.querySelector('.profile');
    var backgroundMusic = document.getElementById('backgroundMusic');
    overlay.style.opacity = 0;
    profile.style.opacity = 1;
    backgroundMusic.play();
    setTimeout(function () {
      overlay.style.display = 'none';
      const textElement = document.getElementById('text');
      const texts = [
        "God does not play dice.",
        "Theories are nothing more than words. Accept what you’ve seen.",
        "To rule time is to rule the world.",
        "The time you enjoy wasting is not wasted time.",
        "Having people acknowledge your existence is a wonderful thing.",
        "Even if it's said, it won't be understood.",
        "Have you been so empty you sought solace and only found it in hatred?"
      ];
      const delay = 75; // Decreased delay for faster typing effect
      const pauseDuration = 500; // Pause duration before deleting text
      let currentTextIndex = 0;
      let charIndex = 0;
  
      function type() {
        const currentText = texts[currentTextIndex];
        const displayedText = currentText.substring(0, charIndex);
        textElement.textContent = displayedText;
  
        if (charIndex < currentText.length) {
          charIndex++;
          setTimeout(type, delay);
        } else {
          setTimeout(() => deleteText(currentText), pauseDuration);
        }
      }
  
      function deleteText(currentText) {
        if (charIndex > 0) {
          charIndex--;
          const displayedText = currentText.substring(0, charIndex);
          textElement.textContent = displayedText + '|'; // Keep the last letter
          setTimeout(() => deleteText(currentText), delay);
        } else {
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          setTimeout(type, delay);
        }
      }
  
      setTimeout(type, delay);
    }, 250);
  }
  
// Get references to the audio element and the mute button
const backgroundMusic = document.getElementById('backgroundMusic');
const muteButton = document.getElementById('muteButton');
const muteIcon = document.getElementById('muteIcon');

// Function to toggle mute state
function toggleMute() {
    backgroundMusic.muted = !backgroundMusic.muted; // Toggle mute state
    updateMuteButton(); // Update the button icon based on mute state
  }

// Function to update mute button text/icon based on mute state
function updateMuteButton() {
    if (backgroundMusic.muted) {
      muteIcon.className = 'fas fa-volume-mute'; // Change icon when muted
    } else {
      muteIcon.className = 'fas fa-volume-up'; // Change icon when unmuted
    }
  }

// Initial setup: Set the button text/icon based on the initial mute state
updateMuteButton();
  
