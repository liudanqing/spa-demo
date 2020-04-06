$(function() {
    var t = $("progress");
    var n = 0;
    var c = 0;
    
    $("#start-button").click(function() {
        0 === n && (n = window.setInterval(function() {
            t.attr("value", c++)
        }, 10))
    }),
    $("#stop-button").click(function() {
        window.clearInterval(n),
        n = 0
    }),
    $("#reset-button").click(function() {
        t.attr("value", c = 0)
    })
});
