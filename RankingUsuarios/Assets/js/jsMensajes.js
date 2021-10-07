class MensajesLib  
{
	constructor(modal,mensaje,color) 
	{
		this.modal = modal;
		$("#"+modal).html("");
		this.color = color;
		this.mensaje = mensaje;
	}

	mostrarmensaje()
	{		
		var  cuerpo = 	'<div class="modal-dialog ">'+
							'<div class="modal-content ">'+
								'<div class="modal-header">'+
									'<h5 class="modal-title" id="">Ranking Usarios</h5>'+									
								'</div>'+
								'<div class="modal-body">'+this.mensaje +'</div>'+
								'<div class="modal-footer">'+
									'<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Aceptar</button>'	+							
								'</div>'+
							'</div>'+
						'</div>';
						
		$("#"+this.modal).html(cuerpo);
		var myModal = document.getElementById(this.modal);
		myModal.style.display = 'none';
		var mobalbootstra = new bootstrap.Modal(myModal);
		mobalbootstra.toggle();
	}//Termina mostrarmensaje()

}//End class MensajesLib 