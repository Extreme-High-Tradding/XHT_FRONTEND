  
$(function() {
    // When we're using HTTPS, use WSS too.
    var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    var chatsock = new ReconnectingWebSocket(ws_scheme + '://xht-backend.herokuapp.com/transactions' );
    
    chatsock.onmessage = function(message) {
        var data = JSON.parse(message.data);
            console.log(data);
        /* $('#chat').append('<tr>'
            + '<td>' + data.timestamp + '</td>'
            + '<td>' + data.handle + '</td>'
            + '<td>' + data.message + ' </td>'
        + '</tr>'); */
    };

    $('#operation_form').on('submit', function(event) {
        var message = {
            operation_status: $('#operation_status').val(),
            operation_type: $('#operation_type').val(),
            user_id: $('#user_id').val(),
            amount_assets: $('#amount').val(),
            price: $('#price').val(),
            asset_id: $('#asset').val(),
        }
        console.log('hola mun')
        chatsock.send(JSON.stringify(message));
        
        return false;
    });
});
