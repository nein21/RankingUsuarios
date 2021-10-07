<?php 

include_once("Definiciones.php");

/**
*  Clase utilizada para funcionalidades diversas
*/
class CLog
{

	static function grabarLogx($cadena)
	{
		$cadena = htmlspecialchars(str_replace(array("\n", "\r","'"), '',$cadena));		
		$rutaLog = ROUTE_LOG_. date("Y-m-d") . ".log";
		$cad ="[ |".date("Y-m-d H:i:s.u") ."| ]" . $cadena . "\n";	
		try
		{
			$file = fopen($rutaLog, "a");

			if( $file )
			{		fwrite($file, $cad);			}		
			fclose($file);
		}
		catch (Exception $e)
		{
			fclose($file);			
		}
		
	}//TERMINA grabarLogx($cadena)
}
?>