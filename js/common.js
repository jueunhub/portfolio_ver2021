$(function(){
    //사이드 메뉴 on&off
    $("header .open_btn").click(function(){
        $("aside").css("right","0");
    });
    $("aside .close_btn, aside .mask").click(function(){
        if(window.outerWidth > 680){
            $("aside").css("right","-40%");
        } else{
            $("aside").css("right","-100%");
        }
    });
});