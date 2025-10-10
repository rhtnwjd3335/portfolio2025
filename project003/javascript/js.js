$(document).ready(function () {

    // 네비게이션 설정

    for (let clN = 0; clN < 5; clN++) {

        $(`nav ul li:nth-child(${clN})`).click(function (e) {
            e.preventDefault();

            $('nav ul li').removeClass('on').css('opacity', '0.6');
            $('nav ul li').eq(clN - 1).addClass('on').css('opacity', '1');

            $('section').removeClass('on');
            $('section').eq(clN - 1).addClass('on');

            $('.yoon').css('display', 'none');
            $('.yang').css('display', 'none');
            $('.lee').css('display', 'none');
            $('.son').css('display', 'none');
        });
    };


    // 메인 설정
    // main의 백그라운드 이미지 3초마다 변경
    let i = 1;

    setInterval(function () {
        i++;

        if (i == 6) i = 1;

        $('.main').css({ 'background-image': `url(img/main_bg_0${i}.jpg)`, 'transition': 'all 1s' });
    }, 3000);

    // 멤버 설정
    // 마우스 위치에 따라 이미지 보이기
    $('.member').mousemove(function (e) {
        let x = e.pageX;
        let y = e.pageY;

        console.log(x, y);

        $('.mouse').css({ 'left': x, 'top': y });
    });


    let cl = 0;

    // 멤버별 클릭에 따라 개인페이지로 이동
    $('.mem_yoon p').click(function (e) {

        e.preventDefault();

        $('.yoon').css('display', 'block');
        $('.yang').css('display', 'none');
        $('.lee').css('display', 'none');
        $('.son').css('display', 'none');

        cl = 0;
    });

    $('.mem_yang p').click(function (e) {

        e.preventDefault();

        $('.yang').css('display', 'block');
        $('.yoon').css('display', 'none');
        $('.lee').css('display', 'none');
        $('.son').css('display', 'none');

        cl = 0;
    });

    $('.mem_lee p').click(function (e) {

        e.preventDefault();

        $('.lee').css('display', 'block');
        $('.yoon').css('display', 'none');
        $('.yang').css('display', 'none');
        $('.son').css('display', 'none');

        cl = 0;
    });

    $('.mem_son p').click(function (e) {

        e.preventDefault();

        $('.son').css('display', 'block');
        $('.yoon').css('display', 'none');
        $('.yang').css('display', 'none');
        $('.lee').css('display', 'none');

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
            $('.yoon>.txt').css('opacity', '1');
            $('.yoon>img:nth-child(6)').css('opacity', '1');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'ot1 1s linear 1, ot2 1s linear infinite' });

        }

        else {
            $('.yoon>.txt').css('opacity', '0');
            $('.yoon>img:nth-child(6)').css('opacity', '0');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'none', 'opacity': '0' });
        }

    });

    $('.yoon>.txt').click(function () {
        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('.yoon>img:nth-child(6)').click(function () {
        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('.yoon .other_txt p:nth-child(1)').click(function (e) {
        e.preventDefault();

        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');

        $('.yang').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('.yoon').css('display', 'none');
        $('.lee').css('display', 'none');
        $('.son').css('display', 'none');

        cl = 0;

    });

    $('.yoon .other_txt p:nth-child(2)').click(function (e) {
        e.preventDefault();

        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');

        $('.lee').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('.yoon').css('display', 'none');
        $('.yang').css('display', 'none');
        $('.son').css('display', 'none');

        cl = 0;
    });

    $('.yoon .other_txt p:nth-child(3)').click(function (e) {
        e.preventDefault();

        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');

        $('.son').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('.yoon').css('display', 'none');
        $('.yang').css('display', 'none');
        $('.lee').css('display', 'none');

        cl = 0;
    });

    // 양요섭 설정
    $('.yang>p').click(function (e) {
        e.preventDefault();

        cl++;

        if (cl == 2) cl = 0;

        if (cl == 1) {
            $('.yang>.txt').css('opacity', '1');
            $('.yang>img:nth-child(6)').css('opacity', '1');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'ot1 1s linear 1, ot2 1s linear infinite' });
        }

        else {
            $('.yang>.txt').css('opacity', '0');
            $('.yang>img:nth-child(6)').css('opacity', '0');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'none', 'opacity': '0' });
        }

    });

    $('.yang>.txt').click(function () {
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('.yang>img:nth-child(6)').click(function () {
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('.yang .other_txt p:nth-child(1)').click(function (e) {
        e.preventDefault();

        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');

        $('.yoon').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('.yang').css('display', 'none');
        $('.lee').css('display', 'none');
        $('.son').css('display', 'none');

        cl = 0;
    });

    $('.yang .other_txt p:nth-child(2)').click(function (e) {
        e.preventDefault();

        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');

        $('.lee').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('.yoon').css('display', 'none');
        $('.yang').css('display', 'none');
        $('.son').css('display', 'none');

        cl = 0;
    });

    $('.yang .other_txt p:nth-child(3)').click(function (e) {
        e.preventDefault();

        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');

        $('.son').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('.yoon').css('display', 'none');
        $('.yang').css('display', 'none');
        $('.lee').css('display', 'none');

        cl = 0;
    });


    // 이기광 설정
    $('.lee>p').click(function (e) {
        e.preventDefault();

        cl++;

        if (cl == 2) cl = 0;

        if (cl == 1) {
            $('.lee>.txt').css('opacity', '1');
            $('.lee>img:nth-child(6)').css('opacity', '1');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'ot1 1s linear 1, ot2 1s linear infinite' });
        }

        else {
            $('.lee>.txt').css('opacity', '0');
            $('.lee>img:nth-child(6)').css('opacity', '0');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'none', 'opacity': '0' });
        }

    });

    $('.lee>.txt').click(function () {
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('.lee>img:nth-child(6)').click(function () {
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('.lee .other_txt p:nth-child(1)').click(function (e) {
        e.preventDefault();

        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');

        $('.yoon').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('.yang').css('display', 'none');
        $('.lee').css('display', 'none');
        $('.son').css('display', 'none');

        cl = 0;
    });

    $('.lee .other_txt p:nth-child(2)').click(function (e) {
        e.preventDefault();

        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');

        $('.yang').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('.yoon').css('display', 'none');
        $('.lee').css('display', 'none');
        $('.son').css('display', 'none');

        cl = 0;
    });

    $('.lee .other_txt p:nth-child(3)').click(function (e) {
        e.preventDefault();

        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');

        $('.son').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('.yoon').css('display', 'none');
        $('.yang').css('display', 'none');
        $('.lee').css('display', 'none');

        cl = 0;
    });


    // 손동운 설정
    $('.son>p').click(function (e) {
        e.preventDefault();

        cl++;

        if (cl == 2) cl = 0;

        if (cl == 1) {
            $('.son>.txt').css('opacity', '1');
            $('.son>img:nth-child(6)').css('opacity', '1');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'ot1 1s linear 1, ot2 1s linear infinite' });
        }

        else {
            $('.son>.txt').css('opacity', '0');
            $('.son>img:nth-child(6)').css('opacity', '0');

            // 개인페이지에서 다른 멤버페이지 이동
            // other 설정
            $('.other').css({ 'animation': 'none', 'opacity': '0' });
        }

    });

    $('.son>.txt').click(function () {
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('.son>img:nth-child(6)').click(function () {
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });

        cl = 0;
    });

    $('.son .other_txt p:nth-child(1)').click(function (e) {
        e.preventDefault();

        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');

        $('.yoon').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('.yang').css('display', 'none');
        $('.lee').css('display', 'none');
        $('.son').css('display', 'none');

        cl = 0;
    });

    $('.son .other_txt p:nth-child(2)').click(function (e) {
        e.preventDefault();

        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');

        $('.yang').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('.yoon').css('display', 'none');
        $('.lee').css('display', 'none');
        $('.son').css('display', 'none');

        cl = 0;
    });

    $('.son .other_txt p:nth-child(3)').click(function (e) {
        e.preventDefault();

        $('.yoon>.txt').css('opacity', '0');
        $('.yoon>img:nth-child(6)').css('opacity', '0');
        $('.yang>.txt').css('opacity', '0');
        $('.yang>img:nth-child(6)').css('opacity', '0');
        $('.lee>.txt').css('opacity', '0');
        $('.lee>img:nth-child(6)').css('opacity', '0');
        $('.son>.txt').css('opacity', '0');
        $('.son>img:nth-child(6)').css('opacity', '0');

        $('.lee').css('display', 'block');
        $('.other').css({ 'animation': 'none', 'opacity': '0' });
        $('.yoon').css('display', 'none');
        $('.yang').css('display', 'none');
        $('.son').css('display', 'none');

        cl = 0;
    });


    let alN = 0;

    // 앨범 설정
    $('.album .play .song>p').click(function () {

        if (alN < 8) {
            alN++;
        }

        if (alN == 8) alN = 0;

        $('.playlist').css('left', (-750 * alN) + 'px');
    });

    for (let songN = 0; songN < 24; songN++) {
        $(`.song${songN}`).click(function () {
            $('.playlist>div').removeClass('on');
            $('.playlist>div').eq(songN - 1).addClass('on');

            const formatNum = (songN).toString().padStart(2, '0');
            $('.lp img[src*="song_lp"]').attr('src', `img/song_lp_${formatNum}.png`);

            $('.album .play .lp img:nth-child(1)').css('animation', 'none');
            $('.album .play .lp img:nth-child(2)').css('animation', 'none');

            // 다음 프레임에서 애니메이션 다시 적용 (리셋 효과)
            setTimeout(function () {
                $('.album .play .lp img:nth-child(1)').css('animation', 'lp 10s linear infinite 2.5s');
                $('.album .play .lp img:nth-child(2)').css('animation', 'ta1 2s linear 1, ta2 1s linear infinite 2s');
            }, 10);

            $('.lyrics p').removeClass('on');
            $('.lyrics p').eq(songN-1).addClass('on');
            $('.lyrics').scrollTop(0);
        });
    };

})