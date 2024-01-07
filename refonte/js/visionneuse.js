const btnSuivant = document.querySelector(".suivant");
const btnPrecedent = document.querySelector(".precedent");
const refImageServices=document.querySelector(".nosServices__services");
let intCpt=1;

function avancer(){
    if(intCpt<3){
        intCpt++
        refImageServices.src="./images/nosServices/services"+intCpt+".png";
    }else if(intCpt==3){
        intCpt=1
        refImageServices.src="./images/nosServices/services"+intCpt+".png";
    }
}

function reculer(){
    if(intCpt>1){
        intCpt--
        refImageServices.src="./images/nosServices/services"+intCpt+".png";
    }else if(intCpt==1){
        intCpt=3
        refImageServices.src="./images/nosServices/services"+intCpt+".png";
    }
}

btnSuivant.addEventListener("click", function(){
    avancer();
});
btnPrecedent.addEventListener("click", function(){
    reculer();
})