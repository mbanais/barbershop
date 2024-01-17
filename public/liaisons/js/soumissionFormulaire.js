/**
 *
 */

function recupererJson(){
    fetch("./public/liaisons/js/objJSONMessages.json")
        .then(objet => objet.json())
        .then(lesErreurs => this.tErreurs=lesErreurs)
}

function soumettreFormulaire(event){
    recupererJson()
    let arrChamps = document.querySelectorAll(".champ");
    let erreurs = 0;
    arrChamps.forEach(champ=>{
        console.log(champ.children[1].value);
        if(champ.children[1].value===""){
            erreurs++;
            champ.children[2].innerHTML="Veuillez remplir le champ.";
        }
    });
    if(erreurs!==0){
        console.log(erreurs)
        event.preventDefault()
    }
}

document.querySelector(".btnEnvoyer").addEventListener("click", soumettreFormulaire)