const cursor = document.getElementById("cursor");

  // Track mouse position
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  // Optional: Add hover effect on links & buttons
  const hoverTargets = document.querySelectorAll("a, button, .neon-button");
  hoverTargets.forEach(el => {
    el.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
  });