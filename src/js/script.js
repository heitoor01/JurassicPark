function buyTickets(){
    window.location.href = "tickets.html";
}

// Menu toggle setting for media query

const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
});