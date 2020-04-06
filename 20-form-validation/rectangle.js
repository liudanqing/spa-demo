$(function(){
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');

    /*calculate button click event*/
    $btnCal.click(function () {
        //validate if error return;
        if(!validate('#width') || !validate('#height')) return;

        //get value
        var w = Number($width.val()),
            h = Number($height.val());

        //calculate
            var p = roundFractional(2 *(w + h), 2),
                a = roundFractional(w * h, 2);

        //output
        $perimeter.val(p);
        $area.val(a);
    });

    $width.keypress(function (e) {
        if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)) {
            e.preventDefault();
            return;
        }

        var pos = e.target.selectionStart,
            con = e.target.value;

        if(e.key === 'e'){
            if(pos === 0 || con.indexOf('e') !== -1 || con.indexOf('E') !== -1){
                e.preventDefault();
                return;
            }
        }

        if(pos === 1 & con.substring(0,1) === '-'){
            e.preventDefault();
            return;
        }

    });
    $height.keypress(function (e) {
        if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)) {
            e.preventDefault();
            return;
        }
    });
    $width.focusout(function(){
        if(!validate('#width')) $width.select();
    });

    $height.focusout(function(){
        if(!validate('#height')) $height.select();
    });

    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
      }
    
    function validate(field){
        var $data = $(field),
            $msg = $(field + '-validation-message');
        if($data.val() === ''){
            $msg.html('不能为空！');
            $data.select();
            return false;
        }
        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
            $msg.html('必须为数值！');
            $data.select();
            return false;
        }
        if(Number($data.val()) < 0){
            $msg.html('必须大于0');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
    }
});
