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
    // Save preference to localStorage
    localStorage.setItem("practitionerPreference", "whitney");
    // Update URL without refreshing the page
    history.pushState(null, null, "#whitney");
  }

  // Function to show Leyla content
  function showLeyla() {
    sliderIndicator.style.transform = "translateX(100%)";
    leylaButton.classList.add("active");
    whitneyButton.classList.remove("active");
    leylaContent.style.display = "block";
    whitneyContent.style.display = "none";
    // Save preference to localStorage
    localStorage.setItem("practitionerPreference", "leyla");
    // Update URL without refreshing the page
    history.pushState(null, null, "#leyla");
  }

  // Check for saved preference or URL fragment on page load
  const savedPreference = localStorage.getItem("practitionerPreference");
  const urlFragment = window.location.hash;

  if (urlFragment === "#leyla") {
    showLeyla();
  } else if (urlFragment === "#whitney") {
    showWhitney();
  } else if (savedPreference === "leyla") {
    showLeyla();
  } else {
    // Default to Whitney if no preference
    showWhitney();
  }

  // Add click handlers
  whitneyButton.addEventListener("click", showWhitney);
  leylaButton.addEventListener("click", showLeyla);

  // Handle browser back/forward navigation
  window.addEventListener("popstate", function () {
    if (window.location.hash === "#leyla") {
      showLeyla();
    } else {
      showWhitney();
    }
  });
});

// For navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Add click event listeners to navigation links
  const navLinks = document.querySelectorAll(
    "a[href='about-me.html'], a[href='book.html']",
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const savedPreference = localStorage.getItem("practitionerPreference");
      if (savedPreference) {
        // Modify the href to include the hash
        e.preventDefault(); // Prevent default navigation
        const href = this.getAttribute("href");
        window.location.href = href + "#" + savedPreference;
      }
      // If no preference is saved, use the default href
    });
  });
});
