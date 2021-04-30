function toggleMobNav() {

    const navButton = document.getElementsByClassName('navigation-hamburger')[0],
          nav = document.querySelector('.nav-links');

    navButton.addEventListener('click', (e)=> {
        nav.classList.toggle('show');
    });
    

}

toggleMobNav();