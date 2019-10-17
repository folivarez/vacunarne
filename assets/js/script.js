$(document).ready(function() {


var token = 'APP_USR-3265451425852245-101703-b847d72e3c0af6200a6e65551a680065-479997334';




 $("#submit").click(function(e) {
        e.preventDefault();

        var title = $("#title").val();
        var description = $("#description").val();
        var image = $("#picture").val();

        console.log("dando de alta " + title + ' ' + description + ' ' + image );

        var product = {
                        "title": "Item de test - No Ofertar " + title,
                        "category_id":"MLA1417",
                        "price":"1000",
                        "currency_id":"ARS",
                        "available_quantity":1,
                        "buying_mode":"buy_it_now",
                        "listing_type_id":"gold_special",
                        "description": { "plain_text": "Item de test - No Ofertar " + description},
                        "video_id": "",
                        "attributes": [
                            { "id" : "ITEM_CONDITION", "value_id": "2230284"} 
                        ],
                        "sale_terms":[
                            {"id": "WARRANTY_TYPE", "value_id": "2230279" },
                            {"id": "WARRANTY_TIME", "value_name": "90 dias"}
                        ],
                        "pictures":[
                            {"source":image}
                        ]
                    };
        console.log(product);

        $.ajax({
        type: "POST",
        //the url where you want to sent the userName and password to
        url: "https://api.mercadolibre.com/items?access_token=" + token,
        dataType: 'json',
        async: false,
        //json object to sent to the authentication url
        data: JSON.stringify(product),
        success: function () {
            location.reload();
        }
        
    });
        
       
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