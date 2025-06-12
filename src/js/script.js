function buyTickets(){
    window.location.href = "tickets.html";
}

// Menu toggle setting for media query

const toggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Close/Open button
toggle.addEventListener('click', (event)=>{
    event.stopPropagation(); // Prevent immediate close
    navLinks.classList.toggle('active');
});

// Close clicking anywhere on the screen
document.addEventListener('click', (event) =>{
    const isClickingInsideMenu = navLinks.contains(event.target);
    const isClickingOnToggle = toggle.contains(event.target);

    if(!isClickingInsideMenu && !isClickingOnToggle) {
        navLinks.classList.remove('active');
    }
})