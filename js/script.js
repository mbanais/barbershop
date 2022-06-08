/**
 * @author Anaïs Mannée-Batschy <2134649@csfoy.ca>
 * @file JS - Barbershop
 * @version 0.0.1
 */



function enleverCouleur(){
    let refInputChecked = document.querySelector('[type=radio]:checked');
    let refLi = refInputChecked.closest('li')
    let refLabelSelectionne = document.querySelector('.selectionne');
    if(refLabelSelectionne){
        refLabelSelectionne.classList.remove('selectionne')
        refLi.classList.remove('selectionne')
    }
};

function ajouterCouleur(){
    enleverCouleur()

    let refInputChecked = document.querySelector('[type=radio]:checked');
    let refLabelSelectionne = document.querySelector(`[for=${refInputChecked.id}]`);
    let refLi = refInputChecked.closest('li');
    const arrLabel =  document.querySelectorAll('input[type=radio]+label');
    
    arrLabel.forEach(function() {
        if (refInputChecked.id === refLabelSelectionne.htmlFor){
            refInputChecked.nextElementSibling.classList.add('selectionne')
        }
    });
};

function ajouterCouleurDisabled(){
    const arrInputRadioDisabled = document.querySelectorAll('input[type=radio]:disabled');
    
    for (let intCpt = 0; intCpt <= arrInputRadioDisabled.length; intCpt++){
        let refInputDisabled = arrInputRadioDisabled[intCpt];
        refInputDisabled.nextElementSibling.classList.add('disabled');


    }
};

function ajouterCouleurRouge(){
    const arrInputRadio = document.querySelectorAll('input[type=radio]');
    for (let intCpt1 = 0; intCpt1 <= arrInputRadio.length; intCpt1++){
        let refInputClass = arrInputRadio[intCpt1];
        if(refInputClass.classList.length === 2){
            refInputClass.setAttribute('disabled', 'true');
            refInputClass.nextElementSibling.classList.add('rouge');
        }
    }
};

document.querySelector('.jour').addEventListener('click', function(){
    ajouterCouleur();
});
window.addEventListener('load', function(){
    ajouterCouleurDisabled();
});
window.addEventListener('load', function(){
    ajouterCouleurRouge();
});

