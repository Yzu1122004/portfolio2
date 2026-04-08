$(document).ready(function() {
    $("#thdInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#thdart .thdbox").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});