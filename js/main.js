AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function changeTitleText() {
  const words = [
    "Solutions Architect",
    "Web Developer",
    "UI/UX Designer"
  ];
  let i = 0;
  const wordsElement = document.getElementById("words");

  setInterval(() => {
    wordsElement.classList.add("fadeOut");
    setTimeout(() => {
      wordsElement.textContent = words[i];
      wordsElement.classList.remove("fadeOut");
      i = (i + 1) % words.length; // Increment i and reset to 0 when it reaches the end of the array
    }, 500); // Duration of fadeOut animation, in milliseconds
  }, 3000); // Interval between title changes, in milliseconds
}

// Call the function
changeTitleText();
