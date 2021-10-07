class AjaxLib  
{
	static log(liga,LogMessage)
	{
		$.ajax
		({
			async		: true,
			cache		: false,
			url			: liga,
			type		: 'POST',
			dataType	: 'json',
			data		: {opcion:"106",sLog:LogMessage},
			success: function(data)
			{			
				console.log(data);			
			},
			error: function(a,b,c)
			{
				console.log("Error - 1: " + JSON.stringify(a));
				console.log("Error - 2: " + JSON.stringify(b));
				console.log("Error - 3: " + JSON.stringify(c));
			}
		});
	}//Termina JsLog(liga,LogMessage)

	static ajax(objParam, url) 
	{			
		var resp;
		$.ajax(
		{
			async	:	false,
			cache	:	false,
			url		:	url,
			type	:	'POST',
			data	:	objParam,
			dataType:	'JSON',
			success	:	function(respuesta)
			{
				if (respuesta !== null)	
				{
					resp =  respuesta;
				}
				else
				{				
					var mensaje = new MensajesLib('ModalMensajes',"Ocurrió un error al obtener la informacion [Ajax] [Respuesta Nula]",colorModal.amarillo);
                	mensaje.mostrarmensaje();
				}
							
			},
			error	:	function(a, b, c)
			{
				console.log("Err Ajax : a["+a+"] b["+b+"] c["+c+"]");
				var mensaje = new MensajesLib('ModalMensajes',"Ocurrió un error al recabar información [peticion Ajax]",colorModal.amarillo);
                mensaje.mostrarmensaje();
				
			}
		});
		return resp;
	}//End ajax(objParam, url)

	static ajaxHtmlcallback(url,id,callback) 
	{		
		$.ajax(
			{
				url: url,
				async: false,
				cache:false,
				success: function(data)
				{
					if (data != '')
					{
						$("#"+id).html(data);
						callback();
					}
					else
					{
						var mensaje = new MensajesLib('ModalMensajes',"Ocurrió un error No se encontro la página solicitada",colorModal.amarillo);
               			mensaje.mostrarmensaje();
					}
				},
				error: function(a, b, c)
				{
					var mensaje = new MensajesLib('ModalMensajes',"Ocurrió un error al recabar información [peticion Ajax]",colorModal.amarillo);
               		mensaje.mostrarmensaje();
					console.log("Err Ajax : a["+a+"] b["+b+"] c["+c+"]");
				}
			});//termina ajax
	}//End ajaxHtml(objParam, url)

	static ajaxHtml(url,id) 
	{		
		$.ajax(
			{
				url: url,
				async: false,
				cache:false,
				success: function(data)
				{
					if (data != '')
					{
						$("#"+id).html(data);						
					}
					else
					{						
						var mensaje = new MensajesLib('ModalMensajes',"Ocurrió un error No se encontro la página solicitada",colorModal.amarillo);
               			mensaje.mostrarmensaje();
						alert("title","",colorModal.amarillo);
					}
				},
				error: function(a, b, c)
				{
					var mensaje = new MensajesLib('ModalMensajes',"Ocurrió un error al recabar información [peticion Ajax]",colorModal.amarillo);
               		mensaje.mostrarmensaje();
					console.log("Err Ajax : a["+a+"] b["+b+"] c["+c+"]");
				}
			});//termina ajax
	}//End ajaxHtml(url)

	static ajaxUploadFile(objParam, url) 
	{
	  var iValor = 0;
	  var resp;
		$.ajax(
		{
			async	:	false,		
			url		:	url,
			type	:	'POST',
			data	:	objParam,
			dataType:	'JSON',
			contentType: false,
			processData: false,		
			success	:function(respuesta)
			{				
				//alert(respuesta.codigorespuesta);
				console.log("ajaxUploadFile");
				console.log(respuesta);
				resp = respuesta;

			},
			beforeSend: function()
			{
				//bloquearUI("Subiendo archivo al servidor...");
			},
			error	:	function(a, b, c)
			{
				//console.log(a, b, c);
				console.log("Err Ajax : a["+a+"] b["+b+"] c["+c+"]");
				var mensaje = new MensajesLib('ModalMensajes',"Ocurrió un error al pasar archivo a servidor información [peticion Ajax]",colorModal.amarillo);
               	mensaje.mostrarmensaje();		
			}
		});		
		return resp;
	}//End ajaxUploadFile(objParam, url) 

	static ajaxCallback(objParam, url,callback) 
	{
		var iValor = 0;
		$.ajax(
		{
			async	:	false,
			cache	:	false,
			url		:	url,
			type	:	'POST',
			data	:	objParam,
			dataType:	'JSON',
			success	:	function(respuesta)
			{
				if(respuesta.codigoRespuesta == 1)
				{	
					
					callback(respuesta.consulta);				
				}
				else
				{
					var mensaje = new MensajesLib('ModalMensajes',respuesta.descripcion,colorModal.amarillo);
               		mensaje.mostrarmensaje();
					
				}
			},
			error	:	function(a, b, c)
			{
				console.log("Err Ajax : a["+a+"] b["+b+"] c["+c+"]");
				var mensaje = new MensajesLib('ModalMensajes',"Ocurrió un error al recabar información [peticion Ajax]",colorModal.amarillo);
               	mensaje.mostrarmensaje();			
			}
		});
		return iValor;
	}//End ajaxCallback(objParam, url,callback) 

	static ajaxUploadFileCallback(objParam, url,callback) 
	{
		console.log(objParam);
		var iValor = 0;
		$.ajax(
		{
			async	:	false,		
			url		:	url,
			type	:	'POST',
			data	:	objParam,
			dataType:	'JSON',
			contentType: false,
			processData: false,		
			success	:function(respuesta)
			{
				if(respuesta.codigoRespuesta == 1)
				{				
					callback(respuesta.consulta);				
				}
				else
				{
					var mensaje = new MensajesLib('ModalMensajes',respuesta.descripcion,colorModal.amarillo);
               		mensaje.mostrarmensaje();			
				}
			},
			beforeSend: function()
			{
				 //bloquearUI("Subiendo archivo al servidor...");
			},
			error	:	function(a, b, c)
			{
				console.log("Err Ajax : a["+a+"] b["+b+"] c["+c+"]");
				var mensaje = new MensajesLib('ModalMensajes',"Ocurrió un error al recabar información [peticion Ajax]",colorModal.amarillo);
               	mensaje.mostrarmensaje();			
			}
		});
		return iValor;
	}//End ajaxUploadFileCallback(objParam, url,callback) 
}//End class AjaxLib 