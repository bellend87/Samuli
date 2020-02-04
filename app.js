
function teekaikki() {
    var muuttuja = document.createElement("button") 
    muuttuja.innerHTML = "Painike";
    document.body.appendChild(muuttuja);
    
    muuttuja.onclick = function(){
        document.getElementById("moikka").hidden=true;
        console.log("Painettu")
        console.log("samuli")
    }
}
teekaikki();

function halytys() {
    var haly = document.createElement("button")
    haly.innerHTML = "Nappula";
    document.body.appendChild(haly);

    haly.onclick = function(){
        alert("HALYTYS!")   
    }
}
halytys();