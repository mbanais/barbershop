/**
 * @author
 * @file
 * @version
 * @type {{tValide: *[], validerAutresChamps: validationFormulaire.validerAutresChamps, validerChampTexte: validationFormulaire.validerChampTexte, formulaire: HTMLFormElement, tErreurs: *[], initialiser: validationFormulaire.initialiser, afficherMsgErreur: validationFormulaire.afficherMsgErreur, recupererJson: validationFormulaire.recupererJson, effacerMsgErreur: validationFormulaire.effacerMsgErreur, modifierTableauValidation: validationFormulaire.modifierTableauValidation}}
 */

const validationFormulaire = {
    formulaire: document.querySelector("form"),
    tErreurs:[],
    tValide:[],

    initialiser: function () {
        document.body.className = "js";
        this.formulaire.setAttribute('novalidate', 'novalidate');
        this.formulaire.querySelector("#nom").addEventListener("blur", this.validerChampTexte.bind(this));
        this.formulaire.querySelector("#prenom").addEventListener("blur", this.validerChampTexte.bind(this));
        this.formulaire.querySelector("#courriel").addEventListener("blur", this.validerChampTexte.bind(this));
        this.formulaire.querySelector("#sujet").addEventListener("blur", this.validerAutresChamps.bind(this));
        this.formulaire.querySelector("#message").addEventListener("blur", this.validerAutresChamps.bind(this));
        this.tValide["nom"]=false;
        this.tValide["prenom"]=false;
        this.tValide["courriel"]=false;
        this.tValide["sujet"]=false;
        this.tValide["message"]=false;

        this.recupererJson()
    },

    recupererJson: function(){
        fetch("./public/liaisons/js/objJSONMessages.json")
            .then(objet => objet.json())
            .then(lesErreurs => this.tErreurs=lesErreurs)
    },

    /**
     * Valide le champ
     * @param {event} evt
     */
    validerChampTexte: function(evt){
        let champValide;
        let champCible = evt.target;
        let strChaineExp=new RegExp(champCible.getAttribute('pattern'));
        if(champCible.value===""){
            //console.log(this.tValide)
            champValide=false;
            this.afficherMsgErreur(champCible);
            this.modifierTableauValidation(champCible.id, champValide);
        }else{
            if(strChaineExp.test(champCible.value)){
                champValide=true;
                //this.intCptBoleen++;
                this.effacerMsgErreur(champCible);
                this.modifierTableauValidation(champCible.id, champValide);
                //this.cacherInformations(champCible);
            }else{
                champValide=false;
                this.afficherMsgErreur(champCible);
                this.modifierTableauValidation(champCible.id, champValide);
            }
        }
    },

    /**
     * Valider le sujet et le message
     * @param {event} evt
     */
    validerAutresChamps: function(evt){
        let champValide;
        let champCible = evt.target;
        console.log(evt.target)
        if(champCible.value===""){
            //console.log(this.tValide)
            champValide=false;
            this.afficherMsgErreur(champCible);
            this.modifierTableauValidation(champCible.id, champValide);
        }else{
                champValide=true;
                //this.intCptBoleen++;
                this.effacerMsgErreur(champCible);
                this.modifierTableauValidation(champCible.id, champValide);
                //this.cacherInformations(champCible);
        }
    },

    /**
     * Affiche le message d'erreur du champ
     * @param {element} objCible
     */
    afficherMsgErreur: function (objCible){
        const pRetroaction = objCible.nextElementSibling;
        const label = objCible.previousElementSibling;
        //objCible.nextElementSibling.innerHTML="<img src='liaisons/images/erreur.svg' alt='champ mal rempli' />";
        //objCible.setAttribute("aria-invalid", "true")
        console.log(objCible)
        if(objCible.value===""){
            pRetroaction.innerHTML=this.tErreurs[objCible.getAttribute("name")]["vide"];
            console.log(this.tErreurs);
        }else{
            pRetroaction.innerHTML=this.tErreurs[objCible.getAttribute("name")]["pattern"];
        }
        objCible.classList.add("erreur");
        pRetroaction.classList.add("retroactionErreur");
        label.classList.add("labelErreur");
    },

    /**
     * Efface le message d'erreur du champ
     * @param {element} objCible
     */
    effacerMsgErreur: function(objCible){
        const pRetroaction = objCible.nextElementSibling;
        const label = objCible.previousElementSibling;
        objCible.classList.remove("erreur");
        //objCible.nextElementSibling.innerHTML="<img src='liaisons/images/formulaire_complete.svg' alt='champ bien rempli' />"
        objCible.nextElementSibling.innerHTML="";
        //objCible.setAttribute("aria-invalid", "false")
        pRetroaction.innerHTML="";
        pRetroaction.classList.remove("retroactionErreur");
        label.classList.remove("labelErreur");
    },

    /**
     * Méthode de d'inscription de l'état des champs dans le tableau de validation
     * @param {string} nomChamp
     * @param {string} valide
     */
    modifierTableauValidation:function(nomChamp,valide){
        this.tValide[nomChamp]=valide;
    },
}


window.addEventListener('load', validationFormulaire.initialiser.bind(validationFormulaire));



