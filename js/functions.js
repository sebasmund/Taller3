$('#NuevoMed').click(
    function(){
        var nombre=$('#Nombre').val();
        var precio=$('#Precio').val();
        var marca=$('#Marca').val();
        var presentacion=$('#Presentacion').val();
        var cantidad=$('#Cantidad').val();
        $('#Medicamentos tr:last').after('<tr><td>'+nombre+'</td><td>'+ID+'</td></tr>');
        $('#exampleModal').modal('toggle');
    }
    );