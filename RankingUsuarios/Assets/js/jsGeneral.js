


function IncializaGeneral()
{
    info.Opcion = 2; 
    var respuesta = AjaxLib.ajax(info,url);
    

    var sHtml = "";
	$("#tbGeneral").html("");
	for (var i = 0; i < respuesta.consulta.registros.length; i++)
	{
			sHtml += "<tr class=''>"+
						"<td class='center' width=''><span>" + (i+1) + "</span></td>"+
						"<td class='center' width=''><span>" + respuesta.consulta.registros[i].nombre +"</span></td>"+
						"<td class='center' width=''><span>" + respuesta.consulta.registros[i].equipo + "</span></td>"+					
						"<td class='center' width=''><span>" + respuesta.consulta.registros[i].e_preguntas_realizadas + "</span></td>"+					
						"<td class='center' width=''><span>" + respuesta.consulta.registros[i].e_preguntas_correctas + "</span></td>"+					
						"<td class='center' width=''><span>" + respuesta.consulta.registros[i].e_acertividad + "</span></td>"+					
						"<td class='center' width=''><span>" + respuesta.consulta.registros[i].e_puntaje + "</span></td>"+					
						"<td class='center' width=''><span>" + respuesta.consulta.registros[i].c_reguntas_realizadas + "</span></td>"+					
						"<td class='center' width=''><span>" + respuesta.consulta.registros[i].c_preguntas_correctas + "</span></td>"+					
						"<td class='center' width=''><span>" + respuesta.consulta.registros[i].c_acertividad + "</span></td>"+					
						"<td class='center' width=''><span>" + respuesta.consulta.registros[i].c_puntaje + "</span></td>"+					
						"<td class='center' width=''><span>" + respuesta.consulta.registros[i].c_tiempo_carrera + "</span></td>"+					
						"<td class='center' width=''><span>" + respuesta.consulta.registros[i].acumulado + "</span></td>"+					
					"</tr>";		
	}
    $("#tbGeneral").append(sHtml);
}