function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    x.style.flexDirection = "column";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
  document.querySelector('.bground').style.display='none';
  document.querySelector('.content').style.display='none';
  document.querySelector("#leFormulaire").reset();
}

// // // Fermeture de la modale au clic sur la croix supérieure droite par ajout d'une écoute de clic
const onFerme = document.querySelectorAll(".close");
onFerme.forEach((btn) => btn.addEventListener("click", closeModal));

// // // Fermeture de la modale et du fond d'écran bleuté après envoi confirmé du formulaire

document.querySelector(".btn-submit-apresEnvoi").addEventListener("click", e => {
  document.querySelector(".content").style.display="none";
  document.querySelector(".bground").style.display="none";

  
})

// // // Ajouter confirmation quand envoi réussi, définition des constants
// la fonction est définie à la fin de ce .js 

const envoi = document.querySelector(".btn-submit");
const messageEnvoiReussi = document.querySelector(".confirmationEnvoi");
const modale = document.querySelector('.modal-body')
const modaleApresEnvoi = document.querySelector('.modal-body--apresEnvoi')

// // // Vérification de la validité du prénom renseigné 

const prenom = document.querySelector('#first');
const testPrenom = /^[a-zA-Z]{2,30}$/;
const spanPrenom = document.querySelector(".aidesTextuellesPrenom");

prenom.addEventListener("keyup", e => {
  if(testPrenom.test(prenom.value)){
    spanPrenom.setAttribute("class", "aidesTextuellesPrenom aidesTextuelles cacherAide");
  } else {
    spanPrenom.setAttribute("class", "aidesTextuellesPrenom aidesTextuelles afficherAide");

  }
});

function verifPrenom () {
	if(testPrenom.test(prenom.value)){
	  spanPrenom.setAttribute("class", "aidesTextuellesPrenom aidesTextuelles cacherAide");
	  return true;
	} else {
	  spanPrenom.setAttribute("class", "aidesTextuellesPrenom aidesTextuelles afficherAide");
	  return false;
	}
}
prenom.addEventListener("keyup", verifPrenom);


// // // Vérification de la validité du nom renseigné

const nom = document.querySelector('#last');
const testnom = /^[a-zA-Z]{2,30}$/;
const spanNom = document.querySelector(".aidesTextuellesNom");

nom.addEventListener("keyup", e => {
  if(testnom.test(nom.value)){
    spanNom.setAttribute("class", "aidesTextuellesNom aidesTextuelles cacherAide");
  } else {
    spanNom.setAttribute("class", "aidesTextuellesNom aidesTextuelles afficherAide");
  }
});

function verifNom() {
  if(testnom.test(nom.value)){
    spanNom.setAttribute("class", "aidesTextuellesNom aidesTextuelles cacherAide");
    return true; 
  } else {
    spanNom.setAttribute("class", "aidesTextuellesNom aidesTextuelles afficherAide");
    return false;
  };
}

nom.addEventListener("keyup", verifNom);


// // // Vérification de la validité de l'email renseigné 

const email = document.querySelector('#email');
const spanEmail = document.querySelector(".aidesTextuellesEmail");


email.addEventListener("keyup", e => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
      spanEmail.setAttribute("class", "aidesTextuellesEmail aidesTextuelles cacherAide");
    } else {
      spanEmail.setAttribute("class", "aidesTextuellesEmail aidesTextuelles afficherAide");
    }
});

function verifEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
      spanEmail.setAttribute("class", "aidesTextuellesEmail aidesTextuelles cacherAide");
      return true; 
    } else {
      spanEmail.setAttribute("class", "aidesTextuellesEmail aidesTextuelles afficherAide");
      return false;
    };
  
  
}

email.addEventListener("keyup", verifEmail);

// // // Vérification qu'une date est saisie

function verifDate() {
  if (document.querySelector('#birthdate').value) {
    document.querySelector('.aidesTextuellesDate').setAttribute("class", "aidesTextuellesDate cacherAide aidesTextuelles");
    return true;
  } else {
    document.querySelector('.aidesTextuellesDate').setAttribute("class", "aidesTextuellesDate afficherAide aidesTextuelles");
    return false;

  };
}

// document.querySelector('#birthdate').addEventListener('click', verifDate);

// // // Vérification de la validité du nombre de tournois rentré

const nombre = document.querySelector('#quantity');
const testNombre = /^[0-9]{1,2}$/;
const spanNombre = document.querySelector(".aidesTextuellesNombre");

nombre.addEventListener("keyup", e => {
  if(testNombre.test(nombre.value)){
    spanNombre.setAttribute("class", "aidesTextuellesNombre aidesTextuelles cacherAide");
  } else {
    spanNombre.setAttribute("class", "aidesTextuellesNombre aidesTextuelles afficherAide");
  }
});

function verifNombre() {
  if(testNombre.test(nombre.value)){
    spanNombre.setAttribute("class", "aidesTextuellesNombre aidesTextuelles cacherAide");
    return true;  
  } else {
    spanNombre.setAttribute("class", "aidesTextuellesNombre aidesTextuelles afficherAide");
    return false;
  };
}

nombre.addEventListener("keyup", verifNombre);


// // // Vérifier qu'une option est cochée pour les villes des tournois participés

//déclaration de la liste des boutons radios des villes
let listelocation = document.querySelectorAll(".locationn")

//déclaration d'une fonction qui regarde
//élément par élément s'il est coché : si c'est le cas "indicateur" prend la valeur 1
function verifierRadioVilleCheck () {
  let indicateur = 0;
  listelocation.forEach(loc => {
    // console.log(loc.checked);
    if (loc.checked) {
      indicateur += 1;
      // console.log("l'indicateur vaut "+indicateur+" au rang "+i+" et tableau[indicateur].checked vaut "+tableau[i].checked);
    } else {
      // console.log("l'indicateur vaut "+indicateur+" au rang "+i+" et tableau[indicateur].checked vaut "+tableau[i].checked);
    }
  }
  )
  return indicateur;

}

//création de l'élement JS qui va permettre à la classe HTML d'aide de s'afficher/se cacher
//si "indicateur" vaut 1 alors une case est cochée et l'aide ne s'affiche pas. S'il ne vaut
//pas 1 alors l'aide s'affiche

const spanNombreVille = document.querySelector(".aidesTextuellesNombreVille");

function verifNombreVille () {
  let indicateur = verifierRadioVilleCheck ()
  // console.log(indicateur)
  if(indicateur==0){
    spanNombreVille.setAttribute("class", "aidesTextuellesNombreVille aidesTextuelles afficherAide");
    return false;
  } else {
    spanNombreVille.className = "aidesTextuellesNombreVille cacherAide aidesTextuelles";
    return true;
  };
}

spanNombreVille.addEventListener("keyup", verifNombreVille);


// // //Vérifier que les Conditions Générales (CG) sont acceptées

//on va activer au clic sur le bouton d'envoi de formulaire une fonction qui vérifie
// que la case est cochée : si oui l'aide reste cachée. Autrement elle s'affiche.

const CGradio = document.querySelector('#checkbox1')
const spanCG =document.querySelector('.aidesTextuellesConditions')

function verifCG(){
  if(CGradio.checked){
    spanCG.setAttribute("class", "aidesTextuellesConditions aidesTextuelles cacherAide");
    return true;  
  } else {
    spanCG.className = "aidesTextuellesConditions afficherAide aidesTextuelles";
    return false;
  };
}

spanCG.addEventListener("keyup", verifCG);

function validate () {
  // l'importance de mettre le bon argument en premier
  let resultat = verifNombreVille();
  resultat = verifCG() && resultat;
  resultat = verifPrenom() && resultat;
  resultat = verifNom() && resultat;
  resultat = verifEmail() && resultat ;
  resultat = verifNombre() && resultat;
  resultat = verifDate() && resultat;
  // console.log(verifNombreVille());  
  // console.log(verifCG());  
  // console.log(verifPrenom());  
  // console.log(verifNom());  
  // console.log(verifEmail());  
  // console.log(verifNombre());  
  if (resultat) {
      // Toutes les vérifications ont retourné true
      modale.style.display = "none";
      modaleApresEnvoi.style.display='block'; 
  } else {
      // Au moins l'une des vérifications a retourné false
      return false;
  };
  return false
}
