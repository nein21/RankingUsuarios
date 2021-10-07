DELIMITER $$
DROP PROCEDURE IF EXISTS SP_GetJornada$$
CREATE PROCEDURE SP_GetJornada(IN jornada int)
BEGIN
    declare	nombreCompleto varchar(100);
    declare	equipoJugador varchar(50);
    
	declare	eRealizadas int;
	declare	eCorrectas  int;
	declare	eAcertadas  float;
	declare	ePuntaje  int ;
    
	declare	cRealizadas int ;
	declare	cCorrectas  int ;
	declare	cAcertadas  float ;
	declare	cPuntaje  int ;
	declare	cTiempo  float ;
	declare	acumuladoTotal  int ;			
	
	declare	idUser int ;
	declare	EmpleadoId int;
	declare	rol int ;
	declare	tipo int ; 
	declare	bono int ;
	declare	CantidadEntregas int ;
	declare	subtotal int ;
    DECLARE finished int DEFAULT 0;

    declare cursorDatosUsuario 
                        cursor for
                            select usr.idUsuario, CONCAT(usr.nombre, ' ', usr.apellidos) as Nombre, eq.nombre as Nombre_Equpo
                            from usuarios usr inner join equipos eq on (eq.idEquipo = usr.idEquipo);

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET finished = 1;

    OPEN cursorDatosUsuario;


    CREATE TEMPORARY TABLE `tmpJornada` 
    (
        `nombre` varchar(100) DEFAULT 'NULL',
        `equipo` varchar(50) DEFAULT 'NULL',
        `e_preguntas_realizadas` int(11)  DEFAULT 0,
        `e_preguntas_correctas` int(11)  DEFAULT 0,
        `e_acertividad` float(11) DEFAULT 0.0,
        `e_puntaje` int(11) DEFAULT 0,
        `c_reguntas_realizadas` int(11) DEFAULT 0,
        `c_preguntas_correctas` int(11)  DEFAULT 0,
        `c_acertividad` float(11)  DEFAULT 0.0,
        `c_puntaje` int(11)  DEFAULT 0,
        `c_tiempo_carrera` float(11)  DEFAULT 0.0,
        `acumulado` int(11)  DEFAULT 0
        
    );

    getInfo: LOOP
		FETCH cursorDatosUsuario INTO idUser,nombreCompleto,equipoJugador;
		IF finished = 1 THEN 
			LEAVE getInfo;
		END IF;	
        
        select count(cp.idPregunta),count(case when cp.acierto = 1 then cp.acierto end) ,sum(car.puntos) as puntos,sum(tiempo) as tiempo 
        into cRealizadas,cCorrectas,cPuntaje,cTiempo
        from carreras car
        inner join carreras_preguntas cp on (cp.idCarrera = car.idCarrera)
        where idUsuario = idUser and car.idJornada = jornada and car.tipo = 1;
        set cAcertadas= (cCorrectas*100)/cRealizadas;

        select count(cp.idPregunta),count(case when cp.acierto = 1 then cp.acierto end) ,sum(car.puntos)
        into eRealizadas,eCorrectas,ePuntaje
        from carreras car
        inner join carreras_preguntas cp on (cp.idCarrera = car.idCarrera)
        where idUsuario = idUser and car.idJornada = jornada and car.tipo = 2; 
        set eAcertadas= (eCorrectas*100)/eRealizadas;

        set acumuladoTotal = ePuntaje + cPuntaje;

        insert into tmpJornada (nombre,equipo,e_preguntas_realizadas,e_preguntas_correctas,e_acertividad,e_puntaje,c_reguntas_realizadas,c_preguntas_correctas,c_acertividad,c_puntaje,c_tiempo_carrera,acumulado)
        values(nombreCompleto,equipoJugador,eRealizadas,eCorrectas,eAcertadas,ePuntaje,cRealizadas,cCorrectas,cAcertadas,cPuntaje,cTiempo,acumuladoTotal);
        
	END LOOP getInfo;
    select  * from tmpJornada order by acumulado  DESC;
	CLOSE cursorDatosUsuario;
    DROP TABLE tmpJornada;    

END
$$