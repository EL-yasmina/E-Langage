let btn_contact= document.getElementById("btn-contact");
let btn_inscription= document.getElementById("btn-inscription");
let btn_envoyer= document.getElementById("btn-envoyer");
let btn_jeminscris= document.getElementById("je_minscris");
let btn_valider_payement = document.getElementById("btn-valider-payement");
let input_nombre_de_cours = document.getElementById("nombre-de-cours");
let select_prix_par_minute = document.getElementById("prix-par-minute");

let label_prix_total = document.getElementById("prix-total");

let div_contact = document.getElementById("div-contact");
let div_contact_envoyer = document.getElementById("div-contact-envoyer");
let div_inscription = document.getElementById("div-inscription");
let div_inscription_payer = document.getElementById("div-inscription-payer");
let div_inscription_payer_valider = document.getElementById("div-inscription-payer-valider");


div_contact.style.display = "";
div_contact_envoyer.style.display = "none";
div_inscription.style.display = "none";
div_inscription_payer.style.display = "none";
div_inscription_payer_valider.style.display = "none"; 

select_prix_par_minute.onclick = function boutonClique() {
    let prix = document.getElementById("prix-par-minute").value
    let nb_cours = input_nombre_de_cours.value;
    let prix_total = nb_cours * prix;
    label_prix_total.innerHTML = "Prix total : " + prix_total+ " euros"
}

input_nombre_de_cours.onclick = function boutonClique() {
    let prix = document.getElementById("prix-par-minute").value
    let nb_cours = input_nombre_de_cours.value;
    let prix_total = nb_cours * prix;
    label_prix_total.innerHTML = "Prix total : " + prix_total+ " euros"
}

//--------------------CONTACT-------------
btn_contact.onclick = function boutonClique() {
    console.log("btn_contact click");
    
    if(div_contact.style.display == "none"){
        div_contact.style.display = "";
        div_contact_envoyer.style.display = "none";
        div_inscription.style.display = "none";
        div_inscription_payer.style.display = "none";    
        div_inscription_payer_valider.style.display = "none";     
    }
}

btn_envoyer.onclick = function boutonClique() {
    console.log("div_contact_envoyer click");
    
    if(div_contact_envoyer.style.display == "none"){
        btn_contact.style.display = "none";
        btn_inscription.style.display = "none";
        div_contact.style.display = "none";
        div_contact_envoyer.style.display = "";
        div_inscription.style.display = "none";
        div_inscription_payer.style.display = "none";      
        div_inscription_payer_valider.style.display = "none";   
    }
}

//--------------------INSCRIPTION-------------
btn_inscription.onclick = function boutonClique() {
    console.log("btn_inscription click");
    
    if(div_inscription.style.display == "none"){
        div_contact.style.display = "none";
        div_contact_envoyer.style.display = "none";
        div_inscription.style.display = "";
        div_inscription_payer.style.display = "none";       
        div_inscription_payer_valider.style.display = "none";  
    }
}

btn_jeminscris.onclick = function boutonClique() {
    console.log("btn_jeminscris click");
    
    if(div_inscription_payer.style.display == "none"){
        div_contact.style.display = "none";
        div_contact_envoyer.style.display = "none";
        div_inscription.style.display = "none";
        div_inscription_payer.style.display = "";   
        div_inscription_payer_valider.style.display = "none";       
    }
}
btn_valider_payement.onclick = function boutonClique() {
    console.log("btn_valider_payement click");
    
    if(div_inscription_payer_valider.style.display == "none"){
        btn_contact.style.display = "none";
        btn_inscription.style.display = "none";
        div_contact.style.display = "none";
        div_contact_envoyer.style.display = "none";
        div_inscription.style.display = "none";
        div_inscription_payer.style.display = "none";     
        div_inscription_payer_valider.style.display = "";       
    }
}



