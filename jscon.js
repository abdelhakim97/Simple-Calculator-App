function getvaleur(z) {
    var contenu = z.value;
    var ecran = document.getElementById("tabText");
    ecran.value += contenu;
}
function effacer() {
    var ecran = document.getElementById("tabText");
    ecran.value = " ";
}
function inverse() {
    var ecran = document.getElementById("tabText");
    var a = 1/ecran.value;
    ecran.value = a;
}
function racine() {
    var ecran = document.getElementById("tabText");
    ecran.value = Math.sqrt(ecran.value);
}
function carre() {
    var ecran = document.getElementById("tabText");
    ecran.value = ecran.value*ecran.value;
   
}
function calcul() {
    var ecran = document.getElementById("tabText");
    ecran.value = eval(ecran.value);
}
function pourcentage() {
    var ecran = document.getElementById("tabText");
    var a = ecran.value/100;
    ecran.value = a;
}
function loga() {
    var ecran = document.getElementById("tabText");
    ecran.value = Math.log(ecran.value);
}
function neperien() {
    var ecran = document.getElementById("tabText");
    ecran.value = Math.log(ecran.value);
}
function expo() {
    var ecran = document.getElementById("tabText");
    ecran.value = Math.exp(ecran.value);
}
function unaun() {
    var ecran = document.getElementById("tabText").value;
    document.getElementById("tabText").value = ecran.substring(0, ecran.length - 1);
}
function quoi() {
    var ecran = document.getElementById("tabText");
    ecran.value = 0;
}

function Off(){
    document.getElementById("tabText").disabled=true;
    document.getElementById("tabText").style="background-color:black;color:black";
}
function On(){
    var value=document.getElementById("tabText");
    value.value=0;
    value.disabled=false;
    value.style="background-color:white;color:black";
}
function sin(){
    var ecran = document.getElementById("tabText");
    ecran.value = Math.sin(ecran.value*Math.PI / 180);
}
function cos(){
    var ecran = document.getElementById("tabText");
    ecran.value = Math.cos(ecran.value*Math.PI / 180);
}
function tan(){
    var ecran = document.getElementById("tabText");
    ecran.value = Math.tan(ecran.value*Math.PI / 180);
}

function memory(elem){
    var v= document.getElementById("tabText");
    if(elem.id == "MS"){
        v.value="MS not supported";
    }else if(elem.id == "MR"){
        v.value="MR not supported";
    }else{
        v.value="M+ not supported";
    }
    setTimeout(function() {
        v.value = 0;
    }, 600);
}