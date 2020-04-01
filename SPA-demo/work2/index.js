$(function() {
    var $username = $('#TANGRAM__PSP_4__userName');
    var $phone = $('#TANGRAM__PSP_4__phone');
    var $password = $('#TANGRAM__PSP_4__password');
    var $verifyCodeSend = $('#TANGRAM__PSP_4__verifyCodeSend');    
    var $isAgree = $("#TANGRAM__PSP_4__isAgree");
    var $submit = $('#TANGRAM__PSP_4__submit');
    var tip1 = false;
    var tip2 = false;
    var tip3 = false;
    var tip4 = false;
    var tip5 = false;

    $isAgree.click(function() {
        if($isAgree.prop("checked")) {
            tip5 = true;
        } else {
            tip5 = false;
        }
    })
    $username.focus(function() {
        $("#tipUser").css("display","block")
    })
    $password.focus(function() {
        $("#passwordTip").css("display","block")
    })
    $username.blur(function() {
        var con = $username.val();
        var reg1 = /^[0-9]*$/g;
        var reg2 = /[`~!@#$%^&*()\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/g;
        $("#tipUser").css("display","none")
        if((con.match(reg1) || con.match(reg2)) && con !== '') {
            tip1 = false;
            $('#TANGRAM__PSP_4__userNameError').html('用户名仅支持中英文、数字和下划线且不能为纯数字')
        } else if(con == '') {
            tip1 = false;
        } else {
            var len = 0;  
            for (var i = 0; i < con.length; i++ ) {
                // 如果是中文，就+2；否则+1
                if (con[i].match(/^[\u4e00-\u9fa5]{0,}$/)) {
                    len += 2;
                } else {
                    len += 1;
                }
                if (len > 14) {
                    break;
                }
            }
            if (len > 14) {
                tip1 = false;
                $('#TANGRAM__PSP_4__userNameError').html('最长14个英文或7个汉字');
            } else {
                tip1 = true;
                $('#TANGRAM__PSP_4__userNameError').html('');
            }
        }
    })
    $phone.blur(function() {
        var con = $phone.val();
        var reg1 = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/g;
        if(!con.match(reg1) && con !== '') {
            tip2 = false;
            $('#TANGRAM__PSP_4__phoneError').html('手机号码格式不正确');
        } else if(con == '') {
            tip2 = false;
        }else {
            tip2 = true;
            $('#TANGRAM__PSP_4__phoneError').html('');
        }
    })
    $password.blur(function() {
        var con = $password.val();
        $("#passwordTip").css("display","none");
        var reg1 = /[a-zA-Z]/;
        var reg2 = /[0-9]/;
        var reg3 = /[《》？：“”【】、；‘'，。、（）……！,.\/;'?:"()!]/;
        var reg4 = /^[《》？：“”【】、；‘'，。、（）……！,.\/;'?:"()!a-zA-Z0-9]{8,14}$/;
        if((con.match(reg1) && con.match(reg2) && con.match(reg4)) || (con.match(reg1) && con.match(reg3)) && con.match(reg4) || (con.match(reg3) && con.match(reg2)) && con.match(reg4)) {
            tip3 = true;
            $('#TANGRAM__PSP_4__passwordError').html('');
        } else if(con == '') {
            tip3 = false;
            $('#TANGRAM__PSP_4__passwordError').html('');
        } else {
            tip3 = false;
            $('#TANGRAM__PSP_4__passwordError').html('密码设置不符合要求');
        }

    })
    $verifyCodeSend.click(function() {
        $verifyCodeSend.attr("disabled", true);
        var num = 5;
        var id = setInterval(function() {
            num -= 1;
            $verifyCodeSend.val(num)
            if(num == 0) {
                $verifyCodeSend.val('获取验证码');
                $verifyCodeSend.attr("disabled", false);
                clearInterval(id);
            }
        },1000);
        tip4 = true;
    })
    $submit.click(function() {
        if(tip1 == true && tip2 == true && tip3 == true && tip4 == true && tip5 == true) {
            alert("注册成功！")
        } else if(tip1 == false) {
            $('#TANGRAM__PSP_4__userNameError').html('用户名不能为空')
        } else if(tip2 == false) {
            $('#TANGRAM__PSP_4__phoneError').html('手机号码不能为空');
        } else if(tip3 == false) {
            $('#TANGRAM__PSP_4__passwordError').html('密码不能为空');
        } else if(tip4 == false) {
            alert("请发送验证码")
        } else if(tip5 == false) {
            alert("请勾选阅读文档")
        }
    })
})