$(document).ready(function () {

    let n = null;

    // 네비게이션 설정
    $('nav ul li:nth-child(1)').mouseenter(function () {
        if (n != null) return;
        $('nav ul li:nth-child(2) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(3) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(4) img:nth-child(1)').css('opacity', '0.6');
    });

    $('nav ul li:nth-child(1)').mouseleave(function () {
        if (n != null) return;
        $('nav ul li:nth-child(2) img:nth-child(1)').css('opacity', '1');
        $('nav ul li:nth-child(3) img:nth-child(1)').css('opacity', '1');
        $('nav ul li:nth-child(4) img:nth-child(1)').css('opacity', '1');
    });

    $('nav ul li:nth-child(2)').mouseenter(function () {
        if (n != null) return;
        $('nav ul li:nth-child(1) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(3) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(4) img:nth-child(1)').css('opacity', '0.6');
    });

    $('nav ul li:nth-child(2)').mouseleave(function () {
        if (n != null) return;
        $('nav ul li:nth-child(1) img:nth-child(1)').css('opacity', '1');
        $('nav ul li:nth-child(3) img:nth-child(1)').css('opacity', '1');
        $('nav ul li:nth-child(4) img:nth-child(1)').css('opacity', '1');
    });

    $('nav ul li:nth-child(3)').mouseenter(function () {
        if (n != null) return;
        $('nav ul li:nth-child(1) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(2) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(4) img:nth-child(1)').css('opacity', '0.6');
    });

    $('nav ul li:nth-child(3)').mouseleave(function () {
        if (n != null) return;
        $('nav ul li:nth-child(1) img:nth-child(1)').css('opacity', '1');
        $('nav ul li:nth-child(2) img:nth-child(1)').css('opacity', '1');
        $('nav ul li:nth-child(4) img:nth-child(1)').css('opacity', '1');
    });

    $('nav ul li:nth-child(4)').mouseenter(function () {
        if (n != null) return;
        $('nav ul li:nth-child(1) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(2) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(3) img:nth-child(1)').css('opacity', '0.6');
    });

    $('nav ul li:nth-child(4)').mouseleave(function () {
        if (n != null) return;
        $('nav ul li:nth-child(1) img:nth-child(1)').css('opacity', '1');
        $('nav ul li:nth-child(2) img:nth-child(1)').css('opacity', '1');
        $('nav ul li:nth-child(3) img:nth-child(1)').css('opacity', '1');
    });

    function resetN() {
        $('nav ul li img:nth-child(1)').css({ 'opacity': '1', 'height': '', 'margin-left': '' });
        $('nav ul li img:nth-child(2)').css('opacity', '0');
        $('nav ul li img:nth-child(3)').css('opacity', '0');
        $('nav ul li img:nth-child(4)').css('opacity', '0');
    }

    $('nav ul li:nth-child(1)').click(function (e) {
        e.preventDefault();

        if (n != 1) {
            resetN();
            n=1;

            $('nav ul li:nth-child(1) img:nth-child(1)').css({ 'height': '40px', 'margin-left': '-10px' });
        $('nav ul li:nth-child(2) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(3) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(4) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(1) img:nth-child(2)').css('opacity', '1');
        $('nav ul li:nth-child(1) img:nth-child(3)').css('opacity', '1');
        $('nav ul li:nth-child(1) img:nth-child(4)').css('opacity', '1');
        }
    });

    $('nav ul li:nth-child(2)').click(function (e) {
        e.preventDefault();

        if (n != 2) {
            resetN();
            n=2;

        $('nav ul li:nth-child(2) img:nth-child(1)').css({ 'height': '40px', 'margin-left': '-20px' });
        $('nav ul li:nth-child(1) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(3) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(4) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(2) img:nth-child(2)').css('opacity', '1');
        $('nav ul li:nth-child(2) img:nth-child(3)').css('opacity', '1');
        $('nav ul li:nth-child(2) img:nth-child(4)').css('opacity', '1');
        }
    });

    $('nav ul li:nth-child(3)').click(function (e) {
        e.preventDefault();

        if (n != 3) {
            resetN();
            n=3;

        $('nav ul li:nth-child(3) img:nth-child(1)').css({ 'height': '40px', 'margin-left': '-20px' });
        $('nav ul li:nth-child(1) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(2) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(4) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(3) img:nth-child(2)').css('opacity', '1');
        $('nav ul li:nth-child(3) img:nth-child(3)').css('opacity', '1');
        $('nav ul li:nth-child(3) img:nth-child(4)').css('opacity', '1');
        }
    });

    $('nav ul li:nth-child(4)').click(function (e) {
        e.preventDefault();

        if (n != 4) {
            resetN();
            n=4;

        $('nav ul li:nth-child(4) img:nth-child(1)').css({ 'height': '40px', 'margin-left': '-20px' });
        $('nav ul li:nth-child(1) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(2) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(3) img:nth-child(1)').css('opacity', '0.6');
        $('nav ul li:nth-child(4) img:nth-child(2)').css('opacity', '1');
        $('nav ul li:nth-child(4) img:nth-child(3)').css('opacity', '1');
        $('nav ul li:nth-child(4) img:nth-child(4)').css('opacity', '1');
        }
    });


    // 메인 설정
    // main의 백그라운드 이미지 3초마다 변경
    let i = 1;

    setInterval(function () {
        i++;

        if (i == 6) i = 1;

        $('.main').css({ 'background-image': `url(../img/main_bg_0${i}.jpg)`, 'transition': 'all 1s' });
    }, 3000);


    let cl = 0;

    // 멤버 설정
    // 마우스 위치에 따라 이미지 보이기
    $('.member').mousemove(function (e) {
        let x = e.pageX;
        let y = e.pageY;

        console.log(x, y);

        $('.mouse').css({ 'left': x, 'top': y });
    });

    // 멤버별 클릭에 따라 개인페이지로 이동
    $('.mem_yoon p').click(function (e) {

        e.preventDefault();

        $('section.yoon').css('display', 'block');
        $('section.yang').css('display', 'none');
        $('section.lee').css('display', 'none');
        $('section.son').css('display', 'none');

        cl = 0;
    });

    $('.mem_yang p').click(function (e) {

        e.preventDefault();

        $('section.yang').css('display', 'block');
        $('section.yoon').css('display', 'none');
        $('section.lee').css('display', 'none');
        $('section.son').css('display', 'none');

        cl = 0;
    });

    $('.mem_lee p').click(function (e) {

        e.preventDefault();

        $('section.lee').css('display', 'block');
        $('section.yoon').css('display', 'none');
        $('section.yang').css('display', 'none');
        $('section.son').css('display', 'none');

        cl = 0;
    });

    $('.mem_son p').click(function (e) {

        e.preventDefault();

        $('section.son').css('display', 'block');
        $('section.yoon').css('display', 'none');
        $('section.yang').css('display', 'none');
        $('section.lee').css('display', 'none');

        cl = 0;
    });


    // 개인 설정
    // 윤두준 설정
    // yoon>p(click버튼)을 클릭했을 때, 필모그래피 설명 보여라
    $('.yoon>p').click(function (e) {
        e.preventDefault();

        cl++;

        if (cl == 2) cl = 0;

        if (cl == 1) {
            $('section.yoon>.txt').css('opacity', '1');
            $('section.yoon>img:nth-child(6)').css('opacity', '1');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'ot1 1s linear 1, ot2 1s linear infinite' });

        }

        else {
            $('section.yoon>.txt').css('opacity', '0');
            $('section.yoon>img:nth-child(6)').css('opacity', '0');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'none', 'opacity': '0' });
        }

    });

    $('section.yoon>.txt').click(function () {
        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('section.yoon>img:nth-child(6)').click(function () {
        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('.yoon .other_txt p:nth-child(1)').click(function (e) {
        e.preventDefault();

        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');

        $('section.yang').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('section.yoon').css('display', 'none');
        $('section.lee').css('display', 'none');
        $('section.son').css('display', 'none');

        cl = 0;

    });

    $('.yoon .other_txt p:nth-child(2)').click(function (e) {
        e.preventDefault();

        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');

        $('section.lee').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('section.yoon').css('display', 'none');
        $('section.yang').css('display', 'none');
        $('section.son').css('display', 'none');

        cl = 0;
    });

    $('.yoon .other_txt p:nth-child(3)').click(function (e) {
        e.preventDefault();

        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');

        $('section.son').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('section.yoon').css('display', 'none');
        $('section.yang').css('display', 'none');
        $('section.lee').css('display', 'none');

        cl = 0;
    });

    // 양요섭 설정
    $('.yang>p').click(function (e) {
        e.preventDefault();

        cl++;

        if (cl == 2) cl = 0;

        if (cl == 1) {
            $('section.yang>.txt').css('opacity', '1');
            $('section.yang>img:nth-child(6)').css('opacity', '1');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'ot1 1s linear 1, ot2 1s linear infinite' });
        }

        else {
            $('section.yang>.txt').css('opacity', '0');
            $('section.yang>img:nth-child(6)').css('opacity', '0');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'none', 'opacity': '0' });
        }

    });

    $('section.yang>.txt').click(function () {
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('section.yang>img:nth-child(6)').click(function () {
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('.yang .other_txt p:nth-child(1)').click(function (e) {
        e.preventDefault();

        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');

        $('section.yoon').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('section.yang').css('display', 'none');
        $('section.lee').css('display', 'none');
        $('section.son').css('display', 'none');

        cl = 0;
    });

    $('.yang .other_txt p:nth-child(2)').click(function (e) {
        e.preventDefault();

        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');

        $('section.lee').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('section.yoon').css('display', 'none');
        $('section.yang').css('display', 'none');
        $('section.son').css('display', 'none');

        cl = 0;
    });

    $('.yang .other_txt p:nth-child(3)').click(function (e) {
        e.preventDefault();

        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');

        $('section.son').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('section.yoon').css('display', 'none');
        $('section.yang').css('display', 'none');
        $('section.lee').css('display', 'none');

        cl = 0;
    });


    // 이기광 설정
    $('.lee>p').click(function (e) {
        e.preventDefault();

        cl++;

        if (cl == 2) cl = 0;

        if (cl == 1) {
            $('section.lee>.txt').css('opacity', '1');
            $('section.lee>img:nth-child(6)').css('opacity', '1');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'ot1 1s linear 1, ot2 1s linear infinite' });
        }

        else {
            $('section.lee>.txt').css('opacity', '0');
            $('section.lee>img:nth-child(6)').css('opacity', '0');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'none', 'opacity': '0' });
        }

    });

    $('section.lee>.txt').click(function () {
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('section.lee>img:nth-child(6)').click(function () {
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('.lee .other_txt p:nth-child(1)').click(function (e) {
        e.preventDefault();

        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');

        $('section.yoon').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('section.yang').css('display', 'none');
        $('section.lee').css('display', 'none');
        $('section.son').css('display', 'none');

        cl = 0;
    });

    $('.lee .other_txt p:nth-child(2)').click(function (e) {
        e.preventDefault();

        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');

        $('section.yang').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('section.yoon').css('display', 'none');
        $('section.lee').css('display', 'none');
        $('section.son').css('display', 'none');

        cl = 0;
    });

    $('.lee .other_txt p:nth-child(3)').click(function (e) {
        e.preventDefault();

        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');

        $('section.son').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('section.yoon').css('display', 'none');
        $('section.yang').css('display', 'none');
        $('section.lee').css('display', 'none');

        cl = 0;
    });


    // 손동운 설정
    $('.son>p').click(function (e) {
        e.preventDefault();

        cl++;

        if (cl == 2) cl = 0;

        if (cl == 1) {
            $('section.son>.txt').css('opacity', '1');
            $('section.son>img:nth-child(6)').css('opacity', '1');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'ot1 1s linear 1, ot2 1s linear infinite' });
        }

        else {
            $('section.son>.txt').css('opacity', '0');
            $('section.son>img:nth-child(6)').css('opacity', '0');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'none', 'opacity': '0' });
        }

    });

    $('section.son>.txt').click(function () {
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('section.son>img:nth-child(6)').click(function () {
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('.son .other_txt p:nth-child(1)').click(function (e) {
        e.preventDefault();

        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');

        $('section.yoon').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('section.yang').css('display', 'none');
        $('section.lee').css('display', 'none');
        $('section.son').css('display', 'none');

        cl = 0;
    });

    $('.son .other_txt p:nth-child(2)').click(function (e) {
        e.preventDefault();

        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');

        $('section.yang').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('section.yoon').css('display', 'none');
        $('section.lee').css('display', 'none');
        $('section.son').css('display', 'none');

        cl = 0;
    });

    $('.son .other_txt p:nth-child(3)').click(function (e) {
        e.preventDefault();

        $('section.yoon>.txt').css('opacity', '0');
        $('section.yoon>img:nth-child(6)').css('opacity', '0');
        $('section.yang>.txt').css('opacity', '0');
        $('section.yang>img:nth-child(6)').css('opacity', '0');
        $('section.lee>.txt').css('opacity', '0');
        $('section.lee>img:nth-child(6)').css('opacity', '0');
        $('section.son>.txt').css('opacity', '0');
        $('section.son>img:nth-child(6)').css('opacity', '0');

        $('section.lee').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('section.yoon').css('display', 'none');
        $('section.yang').css('display', 'none');
        $('section.son').css('display', 'none');

        cl = 0;
    });

})