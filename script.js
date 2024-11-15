const btnColorToggle = document.querySelector(".btn-color-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Check the initial theme based on the OS preference and set the appropriate theme
if (prefersDarkScheme.matches) {
  document.documentElement.classList.add("dark-theme");
  btnColorToggle.src = 'images/svg-icons/sun.svg';  
} else {
  document.documentElement.classList.add("light-theme");
  btnColorToggle.src = 'images/svg-icons/moon.svg';
}

// Add the event listener for toggling between themes
btnColorToggle.addEventListener("click", function () {
  if (document.documentElement.classList.contains("dark-theme")) {
    // Switch to light theme
    document.documentElement.classList.remove("dark-theme");
    document.documentElement.classList.add("light-theme");
    btnColorToggle.src = 'images/svg-icons/moon.svg';
  } else {
    // Switch to dark theme
    document.documentElement.classList.remove("light-theme");
    document.documentElement.classList.add("dark-theme");
    btnColorToggle.src = 'images/svg-icons/sun.svg';
  }
});
