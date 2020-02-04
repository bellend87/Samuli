var latitude;
var longitude;

function starttaa() {
    var nappula = document.createElement("button");
    nappula.innerHTML = "Näytä sijainti";
    document.body.appendChild(nappula);
    nappula.addEventListener("click", naytaSijainti)
    console.log(navigator.geolocation);
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    })
}
else {
    alert("Geolocation ei ole tuettu")
    }
}
function naytaSijainti() {
    var leveysHeader;
    var pituusHeader;
    //alert("Koordinaattisi ovat " + latitude + " leveysastetta ja " + longitude + " pituusastetta")
    //window.location.href = "http://maps.google.com/?q="+latitude + "," + longitude;
    leveysHeader = document.getElementById("leveys")
    leveysHeader.innerHTML = latitude;
    pituusHeader = document.getElementById("pituus")
    pituusHeader.innerHTML = longitude;
}
window.addEventListener("load", starttaa);

