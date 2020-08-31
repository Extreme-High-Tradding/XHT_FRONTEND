  
$(function() {
    // When we're using HTTPS, use WSS too.
    var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    var chatsock = new ReconnectingWebSocket(ws_scheme + '://xht-backend.herokuapp.com/transactions' );
    
    chatsock.onmessage = function(message) {
        var data = JSON.parse(message.data);
            console.log(data);

            if (data[0].model === 'app.transactions' && data[0].fields.operation_type === false && data[0].fields.operation_status === true) {
                $('#real_time-table').append('<tr>'
                + '<td>' + data[0].pk + '</td>'
                + '<td>Buy</td>'
                + '<td>' + data[0].fields.asset_id + '</td>'
                + '<td>' + data[0].fields.amount_assets + '</td>'
                + '<td>' + data[0].fields.opening_price + '</td>'
                + '<td>' + data[0].fields.closing_price + '</td>'
            + '</tr>');
            } else if (data[0].model === 'app.transactions' && data[0].fields.operation_type === true && data[0].fields.operation_status === false){
                $('#real_time-table').append('<tr>'
                + '<td>' + data[0].pk + '</td>'
                + '<td>Open Sell</td>'
                + '<td>' + data[0].fields.asset_id + '</td>'
                + '<td>' + data[0].fields.amount_assets + '</td>'
                + '<td>' + data[0].fields.opening_price + '</td>'
                + '<td id="closing">' + data[0].fields.closing_price + '</td>'
            + '</tr>');
            } else if (data[0].model === 'app.transactions' && data[0].fields.operation_type === true && data[0].fields.operation_status === true) {
                $('#real_time-table').append('<tr>'
                + '<td>' + data[0].pk + '</td>'
                + '<td>Closed Sell</td>'
                + '<td>' + data[0].fields.asset_id + '</td>'
                + '<td>' + data[0].fields.amount_assets + '</td>'
                + '<td>' + data[0].fields.opening_price + '</td>'
                + '<td>' + data[0].fields.closing_price + '</td>'
            + '</tr>');
            }
            if (data[0].model === 'app.financial') {
                document.getElementById('balance').innerHTML = data[0].fields.balance
            }
    };

    $('#buy_form').on('submit', function(event) {
        var message = {
            operation_status: $('#operation_status').val(),
            operation_type: $('#operation_type').val(),
            user_id: $('#user_id').val(),
            amount_assets: $('#amount').val(),
            price: $('#price').val(),
            asset_id: $('#asset').val(),
        }
        chatsock.send(JSON.stringify(message));

        return false;
    });
    $('#sell_form').on('submit', function(event) {
        var message = {
            operation_status: $('#operationsell_status').val(),
            operation_type: $('#operationsell_type').val(),
            user_id: $('#usersell_id').val(),
            amount_assets: $('#amountsell').val(),
            price: $('#pricesell').val(),
            asset_id: $('#assetsell').val(),
        }
        chatsock.send(JSON.stringify(message));

        return false;
    });
});
