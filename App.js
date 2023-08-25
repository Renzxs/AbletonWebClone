let dropdown = document.getElementById("more-dropdown");
let dropdownuUp = document.querySelector(".dropdown-up");

dropdown.addEventListener("click", function() {
    let down = document.querySelector(".dropdown");
    down.style.display = "block";  

    dropdownuUp.addEventListener("click", function() {
        down.style.display = "none";
    })
});

// document.addEventListener("scroll", () => {
//     const header = document.querySelector(".header");
//     const logo = document.querySelector(".header-logo");
//     if(window.scrollY > 0) {
//         header.classList.add('scrolled');
//         logo.src = "logo-white.png";

//     } else {
//         header.classList.remove('scrolled');
//         logo.src = "logo.png";
//     }
// });
