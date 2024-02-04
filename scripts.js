
window.onload = function () {
  document.getElementById('overlay').style.display = 'flex';
};

function animateTitle(Title = "@krulowy", delay = 1000) {
// Counter to keep track of the current position within the title text
let counter = 0;

// Direction flag indicating whether to increase or decrease the counter
let direction = true;

// Set up an interval to repeatedly update the title
aniTitle = setInterval(function () {
    // Check if the counter has reached the end of the title text
    if (counter == Title.length)
        direction = false;

    // Check if the counter is at the beginning of the title text
    if (counter == 0)
        direction = true;

    // Update the counter based on the direction (increase or decrease)
    counter = (direction == true) ? ++counter : --counter;

    // Create a new title by taking a substring of the original title
    // If the counter is 0, use "@"; otherwise, take a substring up to the current counter position
    newtitle = (counter == 0) ? "@" : Title.slice(0, counter);

    // Set the document title to the new title
    document.title = newtitle;
}, delay);
}


animateTitle(Title = "@krulowy", delay = 350)


// Function to remove overlay and initiate text typing animation
function removeOverlay() {
// Get references to the profile and bg music 
var overlay = document.getElementById('overlay');
var profile = document.querySelector('.profile');
var backgroundMusic = document.getElementById('backgroundMusic');

// Adjust opacity and play background music
overlay.style.opacity = 0;
profile.style.opacity = 1;
backgroundMusic.play();

// Set a timeout to hide the overlay after a brief delay
setTimeout(function () {
    overlay.style.display = 'none';

    // Set up text typing animation
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

    // Function to type out the text
    function type() {
        const currentText = texts[currentTextIndex];
        const displayedText = currentText.substring(0, charIndex);
        textElement.textContent = displayedText;

        // Check if there are more characters to type
        if (charIndex < currentText.length) {
            charIndex++;
            setTimeout(type, delay);
        } else {
            // Set a timeout to initiate text deletion after a pause
            setTimeout(() => deleteText(currentText), pauseDuration);
        }
    }

    // Function to delete characters from the displayed text
    function deleteText(currentText) {   

      // Check if there are characters to delete                           
      if (charIndex > 0) {     

        // Decrease the character index
        charIndex--;                                                
         // Get the substring of the current text up to the updated character index
        const displayedText = currentText.substring(0, charIndex); 
        
        // Set the text content of the new text to the new substring with a '|' character at the end

        textElement.textContent = displayedText + '|';   

        // Schedule a timeout to call the deleteText function again after a delay
        setTimeout(() => deleteText(currentText), delay);           
        
      // If there are no more characters to delete,
      // update the currentTextIndex to move to the next text in the array
      } else {

        // update the currentTextIndex to move to the next text in the array
        currentTextIndex = (currentTextIndex + 1) % texts.length;

        // Schedule a timeout to call the 'type' function (presumably to start typing the next text) after a delay
        setTimeout(type, delay);
      }
    }
    // Initiate the typing animation after a brief delay
    setTimeout(type, delay);
  }, 250);
}

// Get references to the audio element and the mute button
const backgroundMusic = document.getElementById('backgroundMusic');
const muteButton = document.getElementById('muteButton');
const muteIcon = document.getElementById('muteIcon');

// Function to toggle mute state
function toggleMute() {
  backgroundMusic.muted = !backgroundMusic.muted;                   // Toggle mute state
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

// Initial state of mute button
updateMuteButton();

particlesJS("particles-js", {
  particles: {
    number: { value: 8, density: { enable: true, value_area: 2800 } },
    color: { value: "#fff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#ffffff" },
      polygon: { nb_sides: 3 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.1122388442605866,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 7,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 1.603412060865523,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 100, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 2 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});