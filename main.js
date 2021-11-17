nombrealumno_array=[];
function submit(){
    var veralumno_array =[];
    for (var j=1; j<=4; j++){
        var nombre_alumno = document.getElementById("nombre_alumno_"+j).value;
        console.log(nombre_alumno);
        nombrealumno_array.push(nombre_alumno);
    }
    console.log(nombrealumno_array);
    var longitudnombrealumnos_array= nombrealumno_array.length;
    console.log(longitudnombrealumnos_array);
    for (var k=0; k<longitudnombrealumnos_array; k++){
        veralumno_array.push("<h4>nombre - "+ nombrealumno_array[k]+"</h4>");
        console.log(veralumno_array);
    }
    console.log(veralumno_array);
    document.getElementById("ver_nombre_concomas").innerHTML=veralumno_array;
    var sincomas=veralumno_array.join(" ");
    console.log(sincomas);
    document.getElementById("ver_nombre_sincomas").innerHTML=sincomas;
    document.getElementById("botonenviar").style.display="none";
    document.getElementById("boton_ordenar").style.display="inline-block";
}
function sorting(){
    nombrealumno_array.sort();
    console.log(nombrealumno_array);
    var vernombre_array_ordenado=[];
    var longitudnombrealumnos_array = nombrealumno_array.length;
    console.log(longitudnombrealumnos_array);
    for (var h=0; h<longitudnombrealumnos_array; h++){
        vernombre_array_ordenado.push("<h4>nombre - "+ nombrealumno_array[h]+"</h4>");
        console.log(vernombre_array_ordenado);
    }
    var sincomas = vernombre_array_ordenado.join(" ");
    console.log(sincomas);
    document.getElementById("ver_nombre_sincomas").innerHTML=sincomas;
}