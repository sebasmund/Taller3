$('#NuevoMed').click(
    function(){
        var nombre=$('#Nombre').val();
        var precio=$('#Precio').val();
        var marca=$('#Marca').val();
        var presentacion=$('#Presentacion').val();
        var cantidad=$('#Cantidad').val();
        $('#Medicamentos tr:last').after('<tr><td>'+nombre+'</td><td>'+precio+'</td><td>'+marca+'</td><td>'+presentacion+'</td><td>'+cantidad+'</td></tr>');
        $('#exampleModal').modal('toggle');
    }
    );