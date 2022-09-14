function generarpdf (){
    let nombres = document.getElementById('Nombres').value;
    let apellidos = document.getElementById('Apellidos').value;
    let institucion = document.getElementById('institucion').value;
    let sede = document.getElementById('sede').value;
    let asignatura = document.getElementById('asignatura').value;
    let calificacion  = document.getElementById('calificacion').value;
    
   var documentoPDF = new jsPDF();
   documentoPDF.setFontSize(20);
   documentoPDF.text(15, 15, 'AutoEvaluacion');
   documentoPDF.setFontSize(12);
   documentoPDF.text(20,30, 'Fecha: ' + new Date());
   documentoPDF.setFontSize(10);
   documentoPDF.text(20, 40, 'Nombres: ' + nombres);
   documentoPDF.text(20, 50, 'Apellidos: ' + apellidos);
   documentoPDF.text(20, 60, 'Institucion: ' + institucion);
   documentoPDF.text(20, 70, 'Sede: ' + sede);
   documentoPDF.text(20, 80, 'Asignatura: ' + asignatura);
   documentoPDF.text(20, 90, 'Calificacion: ' + calificacion);
   documentoPDF.save('AutoEvaluacion');

}

