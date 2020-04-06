var $timerButton = (function() {
    var $btn = $('<input type="button" class="timer-button" value="同意(6s)" disabled>')
    // var html = '<input type="button" value="同意(6s)" disabled>';
    var timer;
    var cfg = {
        container: 'body',
        num : 6,
        title: '同意'
    }
    var num;
    function show(conf) {
        $(cfg.container).append($btn)
        // $(container).html(html);
        $.extend(cfg,conf);
        num = cfg.num;
        $btn.val(cfg.title+'('+cfg.num+'s)');
        timer = setInterval(function() {
            num--;
            if(num === 0) {
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');
            } else {
                $btn.val(cfg.title+"("+num+"s)");
            }
        },1000);
    }


    $btn.click(function() {
        // alert("就知道你会同意的！");
        cfg.onClick();
    })

    return {
        show:show
    }
}())