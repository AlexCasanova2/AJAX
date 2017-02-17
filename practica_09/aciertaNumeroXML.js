function iniciarXML(){
var xmlHttp = new XMLHttpRequest();
var urldestino = "aciertaNumeroXML.php?inicio=si";
xmlHttp.open("GET", urldestino,true);
xmlHttp.setRequestHeader("Content-Type", "application/x-ww-form-urlencoded");


xmlHttp.onreadystatechange = function(){
    if(xmlHttp.readyState == 4){
        respuesta(xmlHttp);
    }
};
xmlHttp.send(null);
}


function respuesta(xmlHttp){
    if(xmlHttp.status == 200){
        var respuesta = xmlHttp.responseXML;
        var resf = respuesta.getElementsByTagName("inicio")[0].textContent;
        
        document.getElementById("mensaje").innerHTML = "Se ha generado un numero";
    }
}


function checkAjaxXML(){
    var numero = document.getElementById("numero").value;
    var xmlHttp = new XMLHttpRequest();
    var urldestino = "aciertanumeroXML.php?numero="+numero;
    
    xmlHttp.open("GET", urldestino,true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-ww-form-urlencoded");
    
        xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 ){
            respuesta2(xmlHttp);
        }
    };
    xmlHttp.send(null);
}

function respuesta2 (xmlHttp){
    if(xmlHttp.status == 200){
        var resp = xmlHttp.responseXML;
        var encontrado = resp.getElementsByTagName("encontrado")[0].textContent;
        var mensaje = resp.getElementsByTagName("mensaje")[0].textContent;
        
        document.getElementById("mensaje").innerHTML=encontrado+","+mensaje;
    }
}

//JSON



