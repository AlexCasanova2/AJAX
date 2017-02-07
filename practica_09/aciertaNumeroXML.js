function onclick(){
var XML = document.getElementById("inicioXML").value;
var xmlHttp = new XMLHttpRequest();
var urldestino = "";
xmlHttp.open("GET", urldesti,true);
xmlHttp.setRequestHeader("Content-Type", "application/x-ww-form-urlencoded");


xmlHttp.onreadystatechange = function(){
    if(xmlHttp.readyState == 4){
        alert("RESPUESTA!");
    }
};
xmlHttp.send(null);
}