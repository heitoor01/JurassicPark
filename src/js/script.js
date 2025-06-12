function buyTickets(){
    window.location.href = "tickets.html";
}

// Menu toggle setting for media query

const toggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
});