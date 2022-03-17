let ligne=0;
let ajouter=()=>{
    //recuperation des elements au niveau de la memoire
    let nom=document.getElementById("nom")
    let prenom=document.getElementById("prenom")
    let age=document.getElementById("age")
    //recuperation des valeurs
    let nomValue=nom.value;
    let prenomValue=prenom.value;
    let ageValue=age.value;
    
    //creation dynamique
    let tr=document.createElement("tr")
    ligne++;
    tr.setAttribute("id","ligne"+ligne)
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")
    let td4=document.createElement("td")
    // liaison
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
   // td4.innerHTML="<button onclick=\"supprimer('"+tr.getAttribute("id")+"')\">delete</button>"
    //button supprimer
    let btn=document.createElement("button")
    btn.innerText="supprimer"
    //btn.setAttribute("onclick",
   // "supprimer('"+tr.getAttribute("id")+"')")
   btn.addEventListener("click",()=>{
    supprimer(tr.getAttribute("id"))
   }) 
   td4.appendChild(btn);
    
    //insertion des valeurs 
    td1.innerText=nomValue;
    td2.innerText=prenomValue;
    td3.innerText=ageValue;
    // liaison avec le tbody
    document.getElementById("tbody").appendChild(tr);
    //vider le formulaire
    nom.value=""
    prenom.value=""
    age.value=""
}
let vider=()=>{
    let nom=document.getElementById("nom")
    let prenom=document.getElementById("prenom")
    let age=document.getElementById("age")
    nom.value=""
    prenom.value=""
    age.value=""
}
let supprimer=(id)=>{
   document.getElementById(id).remove();
}
let viderBtn=document.getElementById("viderBtn")
viderBtn.addEventListener("click",()=>{
    vider()
})
let verifier=()=>{
    
    let nom=document.getElementById("nom")
    let prenom=document.getElementById("prenom")
    let age=document.getElementById("age")
    if(nom.value.length>3 &&
         prenom.value.length>3 && age.value>0 &&
         age.value<125)
         {
        console.log("if")
         document.getElementById("ajouterBtn").
         removeAttribute("disabled")
        }
    else
    {
        console.log("else")
    document.getElementById("ajouterBtn").
    setAttribute("disabled","")
    }
}
let verifierNom=()=>{
    let nom=document.getElementById("nom")
    if(nom.value.length>3)
    {
        //nom.setAttribute("class","success")
        nom.classList.add("success")
        nom.classList.remove("error")
    }
    else{
        nom.classList.add("error")
        nom.classList.remove("success")
    }
}