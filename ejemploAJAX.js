function enviarAjaxHTML(){
    var nombre = document.getElementById("nombre").value;
    var xmlHttp = new XMLHttpRequest();
    var urldesti = "ajaxXML.php?nombre="+nombre;
    xmlHttp.open("GET", urldesti,true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-ww-form-urlencoded");
    
    
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4){
            //funcion a ejecutar al recibir la respuesta
//            repResposta(xmlHttp);
            alert ("RESPUESTA");
        }
    };
    xmlHttp.send(null);
}

function repResposta(){
    
}
