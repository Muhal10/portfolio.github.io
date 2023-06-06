// Define the text to be animated
var text = "a Web developer";

// Get the element
var typingText = document.getElementById("typing-text");

// Initialize variables
var charIndex = 0;
var typingSpeed = 100; // Adjust the speed of typing (in milliseconds)

// Function to animate the typing
function type() {
    var currentTime = new Date().toLocaleTimeString();

  if (charIndex < text.length) {
    typingText.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  }
}

// Call the typing animation function
type()
