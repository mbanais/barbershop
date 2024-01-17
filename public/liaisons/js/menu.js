/**
 * @author Anaïs MB
 * @file Gestion du menu
 * @version 0.0.1
 */

let javascriptEnabled= document.body.classList.add('js');
let refButton= null;
let refSpan= null;
let refImg= null;
let refNav= document.querySelector('nav');
let refCtn= document.querySelector('div div');
let refListe= document.querySelector('nav ul');

function ouvrirFermerMenu() {
    if(innerWidth >= 600){
        if(refListe.classList[0] !== "menuOuvert"){
            refListe.classList.add("menuOuvert");
            refListe.classList.remove("menuFerme");
        }
    }else{
        if(refListe.classList[0] !== "menuFerme"){
            refListe.classList.add("menuFerme");
            refListe.classList.remove("menuOuvert");
        }
    }
}

function afficherBoutonMenu() {
    console.log(document.querySelector("div div button"))
    if(document.querySelector("div div button") === null && innerWidth <= 600){
        console.log("aucun bouton")
        refButton = document.createElement("button");
        refSpan = document.createElement("span");
        refImg = document.createElement("img");
        refImg.src="./public/liaisons/images/icones/menuFerme.svg";
        refButton.ariaRoleDescription="menu"
        refButton.appendChild(refImg);
        refButton.addEventListener("click", deployerMenuMobile);
        refCtn.appendChild(refButton);
    }else if(document.querySelector("div div button") !== null && innerWidth >= 600) {
        console.log("il y a un bouton")
        refCtn.removeChild(refButton);
    }
}

function deployerMenuMobile() {
    if(refListe.classList[0] !== "menuOuvert"){
        refListe.classList.add("menuOuvert");
        refListe.classList.remove("menuFerme");
        if(innerWidth <=600){
            document.querySelector(".ctn-navbar").classList.add("couleurBg")
        }else{
            document.querySelector(".ctn-navbar").classList.remove("couleurBg")
        }

    }else{
        refListe.classList.add("menuFerme");
        refListe.classList.remove("menuOuvert");
        document.querySelector(".ctn-navbar").classList.remove("couleurBg")
    }
}

window.addEventListener("resize", ouvrirFermerMenu)
window.addEventListener("load", ouvrirFermerMenu)
window.addEventListener("load", afficherBoutonMenu)
window.addEventListener("resize", afficherBoutonMenu)