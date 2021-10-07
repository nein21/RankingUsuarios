<?php 
    /////////////////////////RUTAS
    define('ROUTE_LOG_'								,"../../../LogPaginas/LogRankingUsuarios_");

    /////////////////////////DATA BASE
    define('LA_COPA_DEL_SABER_PRUEBA'				,1001);


    /////////////////////////ERRORES
    define('__DEFAULT__'							,0);
    define('__OK__'								    ,1);
    define('__ERROR__'								,-1);
    define('PARAMETROS_INCORRECTOS'					,-4);
    //-1XX  NO ENCUENTRA LO QUE BUSCA
    define('NO_SE_ENCONTRO_DIRECTORIO'				,-101);
    define('NO_SE_ENCONTRO_EL_ARCHIVO'				,-102);
    define('ERR_ARCHIVO_NO_GENERADO'				,-103);
    define('ERR_MD5_NO_COINCIDE'					,-109);
    //-2XX  ERRORES DE BASE DE DATOS        
    define('ERR_CONEXION_BASE_DE_DATOS'				,-201);
    define('ERR_EJECUTAR_CONSULTA'					,-202);
    define('ERR_NO_HAY_REG'							,-203);
    //-3XX  ----------
    //-4XX  ERRORES DE WEBSERVICES
    define('ERR_WS_NO_CONECTA'						,-301);
    define('ERR_WS_NO_EXISTE_ARCHIVO_SERVIDOR'		,-308);
    define('ERR_WS_MD5_NO_COINCIDE'					,-309);
    //-5XX  ERRORES FTP
    define('ERR_FTP_CONEXION_SERVIDOR'				,-501);
    define('EER_FTP_ENVIAR_ARCHIVO'					,-502);
    define('EER_FTP_ACHIVO_NO_DISPONIBLE'			,-550);
    //-1000  ERROR TRY-CATCH
    define('ERR_TRY_EXCEPTION'          			,-1000);
?>
