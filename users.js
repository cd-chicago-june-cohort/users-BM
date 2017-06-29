function populateTable (fn,ln,em,co) {
var row = '<tr><td>' + fn + '</td><td>' + ln + '</td><td>' + em + '</td><td>' + co + '</td></tr>'

return row;
};

$(document).ready(function() {
 console.log("ready");

$('form').submit(function (event) {
    event.preventDefault();
});

$('#addUser').click(function(){
    var fn = $('#firstName').val();
    var ln = $('#lastName').val();
    var em = $('#email').val();
    var co = $('#contact').val();
    $('tbody').append(populateTable(fn,ln,em,co));
    $('.boxes').val(" ");
});

});