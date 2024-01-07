/**
 * @author Anaïs Mannée-Batschy <2134649@csfoy.ca>
 * @file JS - Barbershop
 * @version 0.0.1
 */

/**
 * @file Un menu simple, responsive bâti en amélioration progressive.
 * @version v3.1 Mise à jour le 7 février :: changement du préfixe tag pour ref !
 * @author TIMCSF
 * @todo Problème: si le menu est fermé, les liens de menu ne devrait pas être dans l'ordre de tabulation?
 */

//*******************
// Déclaration d'objet(s)
//*******************


let menu = {
    javascriptEnabled: document.body.classList.add('js'),
    strNavClosed: 'Menu',
    strNavOpen: 'Fermer',
    strSourceClosed: './images/hamburger_menu_icon.svg',
    strSourceOpen: './images/clone_icon.svg',
    refButton: null,
    refSpan: null,
    refIcone: null,
    refNav: document.querySelector('.ctn_nav'),

    ouvrirFermerMenu: function(){
        this.refNav.classList.toggle('menuCache');
    }

}   

document.querySelector(".btnMenu").addEventListener('click', function () {
    menu.ouvrirFermerMenu();
});

