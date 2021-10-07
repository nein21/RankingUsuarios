<?php

	include_once("../Core/CLog.php");
	include_once("../Model/modelRankingUsuarios.php");	
	
	////////////////////////////////////////////////////////////////	
	//Obtener el nombre del archivo para registro en log
	$_file_ = basename( __FILE__  );
	//$_file_ = $_arrFile_[(count($_arrFile_)-1)];
	
	////////////////////////////////////////////////////////////////

	$Opcion				= filter_input(INPUT_POST,'Opcion',FILTER_SANITIZE_NUMBER_INT);
	$Opcion   			= empty($Opcion) ? -666 : $Opcion;

	$Jornada			= filter_input(INPUT_POST,'Jornada',FILTER_SANITIZE_NUMBER_INT);
	$Jornada   			= empty($Jornada) ?  -667 : $Jornada;

	$__LOG__   			= basename(filter_input(INPUT_POST,'sLog',FILTER_SANITIZE_STRING));
	$__LOG__   			= empty($__LOG__) ? "NULL-ZERO" : $__LOG__;
	
    $RankinUsuarios = new modelRankingUsuarios($Jornada);

	switch ($Opcion)
	{	
		case 1://Jordanas
				CLog::grabarLogx("[". $_file_ ."] [GetJornada] ");			 
				$datos=$RankinUsuarios->GetJornada($Jornada);
				echo json_encode($datos);
		break;

		case 2://General
				CLog::grabarLogx("[". $_file_ ."] [GetGeneral] ");			
				$datos=$RankinUsuarios->GetGeneral();
				echo json_encode($datos);
		break;

        case 106:CLog::grabarLogx("[". $_file_ ."] $__LOG__ ");
            break;

		default:
				$Respuesta = new stdClass();
				$Respuesta->codigo = "-666";
				$Respuesta->descripcion = "ERR [Opcion Incorrecta.]";
				echo json_encode($Respuesta);
		break;
	}
?>
