$(window).load(function() {

console.log("ok");



$.get("/productos", function(data) {
           $.each(data, function(key, value) {
                $("#categorias").append($('<option></option>').attr('value', value.id).text(value.name));
            });
            console.log(data._id);
        
});

/*

{
"title":"Item de test - No Ofertar Vacunarne",
"category_id":"MLA1417",
"price":"1000",
"currency_id":"ARS",
"available_quantity":1,
"buying_mode":"buy_it_now",
"listing_type_id":"gold_special",
"description": { "plain_text":"Item de test - No Ofertar ASADO VACIO Vacunarne - X MAYOR Y MENOR !!! El Precio es x kg TRABAJAMOS TODOS LOS CORTES!!!"},
"video_id": "",
"attributes": [
{ "id" : "ITEM_CONDITION", "value_id": "2230284"} 
],
"sale_terms":[
{"id": "WARRANTY_TYPE", "value_id": "2230279" },
{"id": "WARRANTY_TIME", "value_name": "90 dias"}
],
"pictures":[
{"source":"https://www.elliberal.com.ar/fotos/cache/notas/2016/10/11/937x553_293883_20161011111808.jpg"}
]
}

*/

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