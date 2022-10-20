const boutonMenu = document.querySelector('.navbar_mobile_button')
const listeMenu1 = document.querySelector('.navbar_mobile')
const liens1 = document.querySelector('.lienshide')
const closeBtn = document.querySelector('.closebouton')

boutonMenu.addEventListener('click', function () {
    if (listeMenu1.classList.contains('closedmenu')) {
        listeMenu1.classList.remove('closedmenu')
        listeMenu1.classList.add('openmenu');
        boutonMenu.style.color = "white";
        setTimeout(function () {

            liens1.classList.add('liensmenuopen');

        }, 300);


    } else {
        listeMenu1.classList.add('closedmenu')
        listeMenu1.classList.remove('openmenu');
        liens1.classList.remove('liensmenuopen');
        boutonMenu.style.color = "black";

    }
})
