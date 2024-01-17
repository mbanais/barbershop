
function afficher() {
    let refUrl = window.location.href;
    const refLiensNav = document.querySelectorAll("nav a")
    console.log(refLiensNav)

    if(refUrl.includes("histoire")){
        refLiensNav.forEach(
            element=>{
                if(element.href.includes("#histoire")){
                    element.classList.add("sectionEnCours")
                }else{
                    element.classList.remove("sectionEnCours")
                }
            }
        )
    }else if(refUrl.includes("services")){
        refLiensNav.forEach(
            element=>{
                if(element.href.includes("#services")){
                    element.classList.add("sectionEnCours")
                }else{
                    element.classList.remove("sectionEnCours")
                }
            }
        )
    }else if(refUrl.includes("trouver")){
        refLiensNav.forEach(
            element=>{
                if(element.href.includes("#trouver")){
                    element.classList.add("sectionEnCours")
                }else{
                    element.classList.remove("sectionEnCours")
                }
            }
        )
    }
}

window.addEventListener("hashchange", afficher)