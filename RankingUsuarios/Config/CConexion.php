<?php  
	include_once("../core/CLog.php");
	include_once("../core/Definiciones.php");
	include_once("dbCore.php");
	class CConexion
	{
		public static function GetConectionDataBase($DataBase)
		{			
			try 
			{
				$cnxBd = null;
				switch($DataBase)
				{
					case	LA_COPA_DEL_SABER_PRUEBA:	$cnxBd =  new PDO("mysql:host=".IP_LACOPADELSABERPRUEBA.";dbname=".DB_LACOPADELSABERPRUEBA, USR_LACOPADELSABERPRUEBA, PASS_LACOPADELSABERPRUEBA);	;break;
					default: CLog::grabarLogx("[". __METHOD__ ."] Opcion Incorrecta[".$DataBase."] ");	 break;
				}
			} 
			catch (PDOException $e) 
			{
				
				CLog::grabarLogx("[". __METHOD__ ."] ERR Abrir Conexion [".$e->getMessage()."] ");
			}
			
			return $cnxBd;
		}//Termina  GetConectionDataBase($DataBase)
	}
?>
