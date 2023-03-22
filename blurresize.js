
// This code adds an event listener for the window resize event. When the window is resized, it temporarily sets the display property of the .overlay element to none, triggers a reflow by reading the offsetHeight property, and then sets the display back to block. This should ensure the blurry part resizes properly with the rest of the content.

window.addEventListener('resize', function() {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
      overlay.style.display = 'none';
      void overlay.offsetHeight; // Trigger a reflow
      overlay.style.display = 'block';
    }
  });