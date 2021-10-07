<?php 
	include_once("../core/CLog.php");
	include_once("../core/Definiciones.php");
	include_once("CConexion.php");
	class CDataBase
	{
		public static function getConsulta($DATABASE,$SQL)
		{			
			$cnxBd = null;
			$Datos = new stdClass();
			$Datos->codigo = 0;
			$Datos->descripcion = "";
			$Datos->consulta = array();
			$Err = array();
			$datoRespuesta = array();

			$cnxBd = CConexion::GetConectionDataBase($DATABASE);

			if($cnxBd)
			{	
				try
				{						
					CLog::grabarLogx("[". __METHOD__ ."] DataBase[".$DATABASE."] Consulta [".$SQL."]");
					$resulSet = $cnxBd->query($SQL);					
					if($resulSet)
					{				
						$response = $resulSet->fetchAll();
						foreach ($response as $reg) 
						{
							//$datoRespuesta['registros'][] = array_map('utf8_encode', array_map('rtrim', (array)$reg));							
							$datoRespuesta['registros'][] =$reg;							
						}
									
						$Datos->consulta = $datoRespuesta;					
						$Datos->codigo = __OK__;					
						$Datos->descripcion = "Consulta realizada correctamente";
						CLog::grabarLogx("[". __METHOD__ ."] Consulta realizada correctamente ");
					}
					else
					{						
						$Datos->codigo = ERR_NO_HAY_REG;
						$Datos->descripcion = "No se encontraron registros ";
						$Err = $cnxBd->errorInfo();
						CLog::grabarLogx("[". __METHOD__ ."] No se encontraron registros " . $Err[0] . "-" . $Err[1] . "-" . $Err[2] );
					}
				}
				catch (Exception $e)
				{										
					$mensaje= "Excepcion:[" . $e->getMessage() . "] Linea:[" . $e->getLine() .    "]  Codigo:[" .  $e->getCode()."] SQL[".$SQL."]";
					CLog::grabarLogx("[". __METHOD__ ."]" . $mensaje);
					$Datos->codigo = ERR_TRY_EXCEPTION;					
					$Datos->descripcion = "Ocurrió un error al ejecutar Consulta ";
				}				
			}
			else
			{
				$Err = $cnxBd->errorInfo();
				$Datos->codigo = ERR_CONEXION_BASE_DE_DATOS;
				$Datos->descripcion = "Error en la conexion: " . $Err[0] . "-" . $Err[1] . "-" . $Err[2];
				CLog::grabarLogx("[". __METHOD__ ."] Error en la conexion: " . $Err[0] . "-" . $Err[1] . "-" . $Err[2]);
			}
			$cnxBd = null;			
			return $Datos;
		}//Termina  getConsulta($DATABASE,$SQL)
	}//Termina class CBaseDatos
?>
