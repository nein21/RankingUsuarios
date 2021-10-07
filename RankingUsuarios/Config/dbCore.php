<?php 
    $xml = simplexml_load_file("../../../Config/webconfig.xml");

    //LA COPA DEL SABER PRUEBA
    $ipServidor                         =       $xml->iplacopaprueba;
    $sUsuario                           =       $xml->usrlacopaprueba;
    $sBasedeDatos                       =       $xml->dblacopaprueba;
    $sPassword                          =       $xml->passlacopaprueba;

    //LA COPA DEL SABER PRUEBA
    define("IP_LACOPADELSABERPRUEBA"            ,$ipServidor);
    define("DB_LACOPADELSABERPRUEBA"            ,$sBasedeDatos);
    define("USR_LACOPADELSABERPRUEBA"           ,$sUsuario);
    define("PASS_LACOPADELSABERPRUEBA"          ,$sPassword);

?>
