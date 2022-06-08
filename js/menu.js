/**
 * @author Anaïs Mannée-Batschy <2134649@csfoy.ca>
 * @file JS - Barbershop
 * @version 0.0.1
 */

 const refImageMenu = document.querySelector('.nav_icon');
 let refMenu = document.querySelector('.menuCache');

function changerIcone(){
    let strMenuOuvert = refImageMenu.classList[1];
    if(strMenuOuvert === 'ouvert'){
        refImageMenu.src='../images/hamburger_menu_icon.svg';
        refImageMenu.classList.remove('ouvert');
        refImageMenu.classList.add('ferme');
        refMenu.style.display='none';
    } else if (strMenuOuvert === 'ferme'){
        refImageMenu.src='../images/close_icon.svg';
        refImageMenu.classList.remove('ferme');
        refImageMenu.classList.add('ouvert');
        refMenu.style.display='block';
    }
}

document.querySelector('.nav_icon').addEventListener('click', function(){
     changerIcone();
 });


