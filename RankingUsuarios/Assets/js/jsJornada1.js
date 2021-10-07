


function IncializaJornada1()
{
    //alert("Estamos en IncializaJornada1");
    //ajax(objParam, url)
    info.Opcion = 1; 
    info.Jornada = 1;
    var respuesta = AjaxLib.ajax(info,url);
    

    var sHtml = "";
	$("#tbJornada1").html("");
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
    $("#tbJornada1").append(sHtml);
}