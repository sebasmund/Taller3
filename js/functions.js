$('#NuevoMed').click(
    function () {
        var nombre = $('#Nombre').val();
        var precio = $('#Precio').val();
        var marca = $('#Marca').val();
        var presentacion = $('#Presentacion').val();
        var cantidad = $('#Cantidad').val();
        $('#Medicamentos tr:last').after('<tr><td>' + nombre + '</td><td>' + precio + '</td><td>' + marca + '</td><td>' + presentacion + '</td><td>' + cantidad + '</td></tr>');
        $('#exampleModal').modal('toggle');
    }
);
$('#NuevoFarm').click(
    function () {
        var nombre1 = $('#Nombre1').val();
        var apellido = $('#Apellido').val();
        var id = $('#ID').val();
        var turno = $('#Turno').val();
        $('#Farmaceutas tr:last').after('<tr><td>' + nombre1 + '</td><td>' + apellido + '</td><td>' + id + '</td><td>' + turno + '</td></tr>');
        $('#exampleModal').modal('toggle');
    }
);