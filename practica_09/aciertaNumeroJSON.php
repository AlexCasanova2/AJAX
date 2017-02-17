<?php
session_start();

$json .= '{';  //inciamos el JSON

if(isset($_GET['inicio'])){     //se ha indicado iniciar un nuevo juego
        $numeroAleatorio=rand(0,10);//seleccionamos un numero aleatorio entre 0 y 10
        $_SESSION['numeroOculto'] = $numeroAleatorio;
                
        $json .= "<inicio>".$_SESSION['numeroOculto']."</inicio>" . "\n";//retornamos el numero generado
    }else{
        $numeroUsuario = $_GET['numero'];
        $numeroOculto=$_SESSION['numeroOculto'];
    
    if($numeroUsuario > $numeroOculto ){
        $resultado .= '"encontrado":"no","mensaje":"Has introducido un valor demasiado alto"';
    }else {
        if($numeroUsuario < $numeroOculto ){
            $xml .= "<encontrado>no</encontrado>" . "\n";
            $xml .= "<mensaje>Has introducido un valor demasiado bajo"."</mensaje>" . "\n";
        }else{
              $xml .= "<encontrado>si</encontrado>" . "\n";
            $xml .= "<mensaje>Exacto!</mensaje>" . "\n";
        } 
        
    }
}
//finalizamos la estructura JSON
$json .= '}';

//insertamos la respuesta XML
echo($xml);
?>
