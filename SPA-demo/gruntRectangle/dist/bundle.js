$(function() {
    // get dom elem
    var $width = $('#width'),
    $height = $('#height'),
    $btnCal = $('#calculate'),
    $perimeter = $('#perimeter'),
    $area = $('#area');
    /**
     * calc button click event
     */
    $btnCal.click(function() {
        // get value
        var w = Number($width.val()),
            h = Number($height.val());
        // calculate
        var p = 2 * (w + h),
            a = w * h;

        // output
        $perimeter.val(p.toFixed(2));
        $area.val(a.toFixed(2));
    })


});function add(x,y) {
    if((typeof x) === 'number' && (typeof y) === 'number')
        return x + y;
    else
        return NaN;
}

module.exports = add;