<?php

$name = $_GET['nombre'];
//Tipo de archivo a retornar:
@header("Content-type: text/xml");
$xml = '<?xml version="1.0" encoding="utf-8"?>' . "\n";
$xml.='<nombre><![CDATA[' . $name . ']]></nombre>' . "\n";
// End XML response
echo ($xml);
?>