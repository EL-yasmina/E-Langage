

let btngrp= document.getElementById("btngrp");
let btnindv= document.getElementById("btnindv");

let groupe= document.getElementById("groupe");
let indiv= document.getElementById("indiv");


groupe.style.display = "";
indiv.style.display = "none";


btngrp.onclick = function boutonClique() {
    console.log("Bouton btngrp");
    
    if(groupe.style.display == "none"){
        groupe.style.display = "";
        indiv.style.display = "none";
        
    }
}

btnindv.onclick = function boutonClique() {
    console.log("Bouton indv");

    if(indiv.style.display == "none"){
        indiv.style.display = "";
        groupe.style.display = "none";
    
    }



}


