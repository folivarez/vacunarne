$(window).load(function() {

console.log("ok");



$.get("/productos", function(data) {
           $.each(data, function(key, value) {
                $("#categorias").append($('<option></option>').attr('value', value.id).text(value.name));
            });
            console.log(data._id);
        
});


/*
    $.get("/castraciones/getAviso/web", function(data) {
        $("#aviso").val(data.aviso);
        $("#aviso").attr('data-id', data._id);
        console.log(data._id);
        if (data.activo) {
            $('.webAviso').addClass('box-danger');
            $("#webAviso").html("<h3>Cartel Activo!</h3>");
            $('#activo').prop('checked', true);
        } else {
            console.log('desactivado');
            $("#webAviso").html("<h3>Cartel Desactivado</h3>");
            $('#activo').prop('checked', false);
        }
    });

    $.get("/castraciones/getAviso/otros", function(data) {
            $("#avisoOtros").val(data.aviso);
            $("#avisoOtros").attr('data-id', data._id);
            console.log(data._id);
        
    });
*/



});