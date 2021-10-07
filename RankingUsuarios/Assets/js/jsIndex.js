

var iPaginaCambio = 0;
$(document).ready(function()
{
    getTab("Jornada1",IncializaJornada1);
	$('li').click(function()
	{
		setTabs(this);
	});
});// Termina $(document).ready(function()


function setTabs(valor)
{	

	if(iPaginaCambio != valor.value)
	{
		iPaginaCambio = valor.value;
		cleanTabs();	
		switch(iPaginaCambio)
		{			
			case 1: 	getTab(valor.id,IncializaJornada1);
				break;
            case 2: 	getTab(valor.id,IncializaJornada2);
				break;
            case 3: 	getTab(valor.id,IncializaGeneral);
				break;				
			default:	                        
                        var mensaje = new MensajesLib('ModalMensajes',"Pestaña Incorrecta",colorModal.amarillo);
                        mensaje.mostrarmensaje();
            //alert("","Pestaña Incorrecta",colorModal.amarillo);
				break;
		}		
	}
}//Termina setPestanhas(valor)

function getTab(id,callback)
{	
	var sUrl = "Views/"+id+".html";
	var sIdPestania = id+"-tabcont";
	AjaxLib.ajaxHtmlcallback(sUrl,sIdPestania,callback);
}// Termina getPaginaPestanha(id)

function cleanTabs()
{
    $(".tab-pane").html("");
}