$(function(){
    //풀페이지 js
    $('#fullpage').fullpage({
		//options here
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage'],
        menu: '#menu',
		autoScrolling: true
	});

    //두번째 섹션 탭 기능 적용
    $(".profile .tab_tit li").click(function(){
        $(".profile .tab_tit li").removeClass("on");
        $(this).addClass("on");

        if($(this).hasClass("tab1")){
            $(".keyword").hide();
            $(".content").hide();
            $(".keyword.career_key").show();
            $(".content.career_con").show();
            $(".skillWrap li").removeClass("on");
        }

        if($(this).hasClass("tab2")){
            $(".keyword").hide();
            $(".content").hide();
            $(".keyword.license_key").show();
            $(".content.license_con").show();
            $(".skillWrap li").removeClass("on");
        }

        if($(this).hasClass("tab3")){
            $(".keyword").hide();
            $(".content").hide();
            $(".keyword.skill_key").show();
            $(".content.skill_con").show();
            $(".skillWrap li").addClass("on");
        } 
    });

    //세번째 섹션 이미지 영역 스와이퍼
    var left_swiper = new Swiper(".works .leftBnn.swiper-container", {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        speed: 1000,
        loop: false,
        allowTouchMove : false,
        navigation: {
            nextEl: ".rightText .swiper-button-next",
            prevEl: ".rightText .swiper-button-prev",
          }
    });

    //세번째 섹션 텍스트 영역 스와이퍼
    var right_swiper = new Swiper(".works .rightText.swiper-container", {
        slidesPerView: 1,
        spaceBetween: 0,
        direction: "vertical",
        speed: 1000,
        loop: false,
        allowTouchMove : false,
        navigation: {
            nextEl: ".rightText .swiper-button-next",
            prevEl: ".rightText .swiper-button-prev",
          }
    });

    //네번째 섹션 타이핑 효과
    const content = "“I WANT YOU PCIK ME!”";
    const text = document.querySelector(".pickme");
    let i = 0;

    function typing(){
        if(i < content.length){
            let txt = content.charAt(i);
            text.innerHTML += txt;
            i++;
        }
    }
    setInterval(typing, 200)
});