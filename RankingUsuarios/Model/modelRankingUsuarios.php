<?php
    include_once("../config/CDataBase.php");

	class modelRankingUsuarios
	{	
        private $Jornada;
        private $General;
        private $Respuesta;

        public  function __construct($val1) 
        {
           $this->Jornada = $val1;           
           $this->Respuesta = new stdClass();
        }

		public function GetJornada()
		{
			CLog::grabarLogx("[". __METHOD__ ."] Jornada[".$this->Jornada."]");
            $sSql = "call SP_GetJornada($this->Jornada);";
			$this->Respuesta = CDataBase::getConsulta(LA_COPA_DEL_SABER_PRUEBA,$sSql);
			
            if($this->Respuesta->codigo != __OK__ )
			{
				CLog::grabarLogx("[". __METHOD__ ."] Ocurrio un error[".$this->Respuesta->descripcion."] ");			
			}	

			return $this->Respuesta;
		}//Termina GetJornada()
		
		public function GetGeneral()
		{
			CLog::grabarLogx("[". __METHOD__ ."] General");
            $sSql = "call SP_GetGeneral();";
			$this->Respuesta = CDataBase::getConsulta(LA_COPA_DEL_SABER_PRUEBA,$sSql);
			
            if($this->Respuesta->codigo != __OK__ )
			{
				CLog::grabarLogx("[". __METHOD__ ."] Ocurrio un error[".$this->Respuesta->descripcion."] ");			
			}	

			return $this->Respuesta;
		}//Termina GetGeneral()
	}//Termina Class ModelCifmodelRankingUsuariosrasPrevias
	
?>