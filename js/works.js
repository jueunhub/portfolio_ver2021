$(function(){
    //WORKS페이지 부분 커스텀 스와이퍼
    if(window.outerWidth > 680){
        var custom_swiper = new Swiper(".custom .swiper-container", {
            slidesPerView: 4,
            spaceBetween: 10,
            effect: 'horizontal',
            speed: 1000,
            loop: false,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
            el: ".custom .swiper-pagination",
            clickable: true,
            }
        });
    } else {
        var custom_swiper = new Swiper(".custom .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 10,
            effect: 'horizontal',
            speed: 1000,
            loop: false,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
            el: ".custom .swiper-pagination",
            clickable: true,
            }
        });
    }

    //개인스킨&맞춤제작&일부커스텀 상세 페이지 상단 높이제어
    function window_resize(){
        let top_height = $('.skin .top_bnn img').height();
        $('.skin .top_bnn').css('height',top_height+'px');
    }
    window_resize();
    $(window).resize(function(){
        window_resize();
    });

    //개인스킨&맞춤제작 작업 영역 스와이퍼
    var skin_swiper = new Swiper(".skin_view .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'horizontal',
        speed: 1000,
        loop: false,
    });

    //개인스킨&맞춤제작 작업 영역 탭 타이틀 추출
    $(".skin_view .swiper-slide .name img").each(function(){
        let tab_tit = $(this).attr("alt");
        $(".skin_view .tit_btn").append($("<a href='#none' class='tab'>"+tab_tit+"</a>"));
    });
    $(".skin_view .tit_btn a").eq(0).addClass("on");

    //개인스킨&맞춤제작 작업 영역 탭 타이틀 on
    skin_swiper.on('slideChange', function(){
    	$(".skin_view .tit_btn a").removeClass("on");
        $(".skin_view .tit_btn a").eq(this.realIndex).addClass("on");
    });
    
    //개인스킨&맞춤제작 작업 영역 탭 타이틀 클릭 액션
    $(".skin_view .tit_btn a").click(function(){
        let tab_length = $(this).length;
        let slide_idx = $(this).index();
        if(slide_idx < 0){
            skin_swiper.slideTo(tab_length);
        } else {
            skin_swiper.slideTo(slide_idx);
        }
    });

    //일부 커스텀 탭 기능 적용
    $(".custom .skin_view .titWrap li").click(function(){
        $(".custom .skin_view .titWrap li").removeClass("on");
        $(this).addClass("on");

        if($(this).hasClass("tit1")){
            $(".tabcon").hide();
            $(".tabcon.cont1").show();
        }

        if($(this).hasClass("tit2")){
            $(".tabcon").hide();
            $(".tabcon.cont2").show();
        }
 
    });
});