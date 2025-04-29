document.addEventListener("DOMContentLoaded", function () {
  const whitneyButton = document.getElementById("whitney-button");
  const leylaButton = document.getElementById("leyla-button");
  const sliderIndicator = document.querySelector(".slider-indicator");
  const whitneyContent = document.getElementById("whitney-content");
  const leylaContent = document.getElementById("leyla-content");

  // Set Whitney as active by default
  whitneyButton.classList.add("active");

  whitneyButton.addEventListener("click", function () {
    // Move slider indicator to Whitney position
    sliderIndicator.style.transform = "translateX(0)";

    // Update active states
    whitneyButton.classList.add("active");
    leylaButton.classList.remove("active");

    // Show Whitney content, hide Leyla content
    whitneyContent.style.display = "block";
    leylaContent.style.display = "none";
  });

  leylaButton.addEventListener("click", function () {
    // Move slider indicator to Leyla position
    sliderIndicator.style.transform = "translateX(100%)";

    // Update active states
    leylaButton.classList.add("active");
    whitneyButton.classList.remove("active");

    // Show Leyla content, hide Whitney content
    leylaContent.style.display = "block";
    whitneyContent.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const whitneyButton = document.getElementById("whitney-button");
  const leylaButton = document.getElementById("leyla-button");
  const sliderIndicator = document.querySelector(".slider-indicator");
  const whitneyContent = document.getElementById("whitney-content");
  const leylaContent = document.getElementById("leyla-content");

  // Function to show Whitney content
  function showWhitney() {
    sliderIndicator.style.transform = "translateX(0)";
    whitneyButton.classList.add("active");
    leylaButton.classList.remove("active");
    whitneyContent.style.display = "block";
    leylaContent.style.display = "none";
  }

  // Function to show Leyla content
  function showLeyla() {
    sliderIndicator.style.transform = "translateX(100%)";
    leylaButton.classList.add("active");
    whitneyButton.classList.remove("active");
    leylaContent.style.display = "block";
    whitneyContent.style.display = "none";
  }

  // Check URL fragment on page load
  if (window.location.hash === "#leyla") {
    showLeyla();
  } else {
    showWhitney(); // Default to Whitney
  }

  // Add click handlers
  whitneyButton.addEventListener("click", function () {
    showWhitney();
    // Update URL without refreshing the page
    history.pushState(null, null, "#whitney");
  });

  leylaButton.addEventListener("click", function () {
    showLeyla();
    // Update URL without refreshing the page
    history.pushState(null, null, "#leyla");
  });

  // Handle browser back/forward navigation
  window.addEventListener("popstate", function () {
    if (window.location.hash === "#leyla") {
      showLeyla();
    } else {
      showWhitney();
    }
  });
});
