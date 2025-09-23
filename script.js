const cursor = document.getElementById("cursor");
  if(window.innerWidth>="800"){

  // Track mouse position
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  // Optional: Add hover effect on links & buttons
  const hoverTargets = document.querySelectorAll("a, button, .neon-button");
  hoverTargets.forEach(el => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hover");
      cursor.classList.remove('hidden');
      
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover");
      cursor.classList.add('hidden');
    });
  });
}

let navLink = document.getElementById("navlinks");
let resNav = document.getElementById("res_nav");
let navBar = document.getElementById("MenuBar");
if(window.outerWidth<="600"){
  navLink.classList.add('hidden')
  resNav.classList.add("hidden")
  navBar.classList.remove("hidden")
  navBar.addEventListener('click',() =>{
    navLink.classList.toggle('hidden');
  });
}
else{
  navLink.classList.add('hidden')
  resNav.classList.remove("hidden")
  navBar.classList.add("hidden")
}