$(document).ready(function () {

    // 실행문

    // 로고 클릭 시 메인 페이지로 이동
    $('h1 img').click(function () {
        location.reload();
    });

    let cnum1 = 0;
    let cnum2 = 0;
    let cnum3 = 0;
    let cnum4 = 0;

    // nav li를 클릭했을 때, nav li의 위치와 nav div 크기가 변함
    $('nav ul li:nth-child(1)').click(function () {

        if (cnum2 == 1 || cnum3 == 1 || cnum4 == 1) {
            cnum2 = 0;
            cnum3 = 0;
            cnum4 = 0;
            $('nav ul li:nth-child(2)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '-10px' });
            $('nav ul li:nth-child(3)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '-10px' });
            $('nav ul li:nth-child(4)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '-10px' });
        }

        cnum1++;

        if (cnum1 == 2) cnum1 = 0;

        if (cnum1 == 1) {
            $('nav ul li').addClass('on');

            $('h1').css({ 'justify-content': 'flex-end', 'padding-right': '50px', 'box-sizing': 'border-box', 'padding-top': '30px' });
            $('h1 img').css({ 'width': '20%', 'height': '50%' });
            $('nav ul li').css({ 'top': '-310px' });
            $('nav ul li:nth-child(1)').css({ 'background-image': 'url(img/title_bg_01.png)', 'color': '#45B472', 'top': '-310px' });
            $('nav div').css({ 'top': '-240px' });
            $('nav .box1').css({ 'height': '300px', 'top': '-240px' });
            $('.profile').css({ 'display': 'flex', 'margin-top': '-150px' });

            $('.project01, .project02, .project03').css({ 'display': 'none' });
        }

        else {
            $('nav ul li').removeClass('on');

            $('h1').css({ 'justify-content': 'center', 'padding-right': '0', 'padding-top': '50px' });
            $('h1 img').css({ 'width': '900px', 'height': '420px' });
            $('nav ul li:nth-child(2)').css({ 'top': '100px' });
            $('nav ul li:nth-child(3)').css({ 'top': '200px' });
            $('nav ul li:nth-child(4)').css({ 'top': '300px' });
            $('nav ul li:nth-child(1)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '-10px' });
            $('nav .box2').css({ 'top': '168px' });
            $('nav .box3').css({ 'top': '268px' });
            $('nav .box4').css({ 'top': '368px' });
            $('nav .box1').css({ 'height': '100px', 'top': '58px' });
            $('.profile').css({ 'display': 'none' });
        }

    });

    $('nav ul li:nth-child(2)').click(function () {

        if (cnum1 == 1 || cnum3 == 1 || cnum4 == 1) {
            cnum1 = 0;
            cnum3 = 0;
            cnum4 = 0;
            $('nav ul li:nth-child(1)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '-10px' });
            $('nav ul li:nth-child(3)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '-10px' });
            $('nav ul li:nth-child(4)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '-10px' });
        }

        cnum2++;

        if (cnum2 == 2) cnum2 = 0;

        if (cnum2 == 1) {
            $('nav ul li').addClass('on');

            $('h1').css({ 'justify-content': 'flex-end', 'padding-right': '50px', 'box-sizing': 'border-box', 'padding-top': '30px' });
            $('h1 img').css({ 'width': '20%', 'height': '50%' });
            $('nav ul li').css({ 'top': '-310px' });
            $('nav ul li:nth-child(2)').css({ 'background-image': 'url(img/title_bg_01.png)', 'color': '#45B472', 'top': '-310px' });
            $('nav div').css({ 'top': '-240px' });
            $('nav .box2').css({ 'height': '300px', 'top': '-240px' });
            $('.project01').css({ 'display': 'flex', 'margin-top': '-150px' });

            $('.profile, .project02, .project03').css({ 'display': 'none' });
        }

        else {
            $('nav ul li').removeClass('on');

            $('h1').css({ 'justify-content': 'center', 'padding-right': '0', 'padding-top': '50px' });
            $('h1 img').css({ 'width': '900px', 'height': '420px' });
            $('nav ul li:nth-child(1)').css({ 'top': '-10px' });
            $('nav ul li:nth-child(3)').css({ 'top': '200px' });
            $('nav ul li:nth-child(4)').css({ 'top': '300px' });
            $('nav ul li:nth-child(2)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '100px' });
            $('nav .box1').css({ 'top': '58px' });
            $('nav .box3').css({ 'top': '268px' });
            $('nav .box4').css({ 'top': '368px' });
            $('nav .box2').css({ 'height': '100px', 'top': '168px' });
            $('.project01').css({ 'display': 'none' });
        }

    });

    $('nav ul li:nth-child(3)').click(function () {

        if (cnum1 == 1 || cnum2 == 1 || cnum4 == 1) {
            cnum1 = 0;
            cnum2 = 0;
            cnum4 = 0;
            $('nav ul li:nth-child(1)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '-10px' });
            $('nav ul li:nth-child(2)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '-10px' });
            $('nav ul li:nth-child(4)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '-10px' });
        }

        cnum3++;

        if (cnum3 == 2) cnum3 = 0;

        if (cnum3 == 1) {
            $('nav ul li').addClass('on');

            $('h1').css({ 'justify-content': 'flex-end', 'padding-right': '50px', 'box-sizing': 'border-box', 'padding-top': '30px' });
            $('h1 img').css({ 'width': '20%', 'height': '50%' });
            $('nav ul li').css({ 'top': '-310px' });
            $('nav ul li:nth-child(3)').css({ 'background-image': 'url(img/title_bg_01.png)', 'color': '#45B472', 'top': '-310px' });
            $('nav div').css({ 'top': '-240px' });
            $('nav .box3').css({ 'height': '300px', 'top': '-240px' });
            $('.project02').css({ 'display': 'flex', 'margin-top': '-150px' });

            $('.profile, .project01, .project03').css({ 'display': 'none' });
        }

        else {
            $('nav ul li').removeClass('on');

            $('h1').css({ 'justify-content': 'center', 'padding-right': '0', 'padding-top': '50px' });
            $('h1 img').css({ 'width': '900px', 'height': '420px' });
            $('nav ul li:nth-child(1)').css({ 'top': '-10px' });
            $('nav ul li:nth-child(2)').css({ 'top': '100px' });
            $('nav ul li:nth-child(4)').css({ 'top': '300px' });
            $('nav ul li:nth-child(3)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '200px' });
            $('nav .box1').css({ 'top': '58px' });
            $('nav .box2').css({ 'top': '168px' });
            $('nav .box4').css({ 'top': '368px' });
            $('nav .box3').css({ 'height': '100px', 'top': '268px' });
            $('.project02').css({ 'display': 'none' });
        }

    });

    $('nav ul li:nth-child(4)').click(function () {

        if (cnum1 == 1 || cnum2 == 1 || cnum3 == 1) {
            cnum1 = 0;
            cnum2 = 0;
            cnum3 = 0;
            $('nav ul li:nth-child(1)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '-10px' });
            $('nav ul li:nth-child(2)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '-10px' });
            $('nav ul li:nth-child(3)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '-10px' });
        }

        cnum4++;

        if (cnum4 == 2) cnum4 = 0;

        if (cnum4 == 1) {
            $('nav ul li').addClass('on');

            $('h1').css({ 'justify-content': 'flex-end', 'padding-right': '50px', 'box-sizing': 'border-box', 'padding-top': '30px' });
            $('h1 img').css({ 'width': '20%', 'height': '50%' });
            $('nav ul li').css({ 'top': '-310px' });
            $('nav ul li:nth-child(4)').css({ 'background-image': 'url(img/title_bg_01.png)', 'color': '#45B472', 'top': '-310px' });
            $('nav div').css({ 'top': '-240px' });
            $('nav .box4').css({ 'height': '300px', 'top': '-240px' });
            $('.project03').css({ 'display': 'flex', 'margin-top': '-150px' });

            $('.profile, .project01, .project02').css({ 'display': 'none' });
        }

        else {
            $('nav ul li').removeClass('on');

            $('h1').css({ 'justify-content': 'center', 'padding-right': '0', 'padding-top': '50px' });
            $('h1 img').css({ 'width': '900px', 'height': '420px' });
            $('nav ul li:nth-child(1)').css({ 'top': '-10px' });
            $('nav ul li:nth-child(2)').css({ 'top': '100px' });
            $('nav ul li:nth-child(3)').css({ 'top': '200px' });
            $('nav ul li:nth-child(4)').css({ 'background-image': 'url(img/title_bg_02.png)', 'color': '#fff', 'top': '300px' });
            $('nav .box2').css({ 'top': '168px' });
            $('nav .box3').css({ 'top': '268px' });
            $('nav .box1').css({ 'top': '58px' });
            $('nav .box4').css({ 'height': '100px', 'top': '368px' });
            $('.project03').css({ 'display': 'none' });
        }

    });

    // project02 btn li:nth-child(1) 클릭했을 때, conceptView를 팝업으로 나타내라
    $('.project02 .btn li:nth-child(1)').click(function () {
        // $(window).scrollTop(0);
        $('.conceptView div').scrollTop(0);
        $('.conceptView').css('display', 'flex');
    });

    $('.conceptView div').click(function () {
        $('.conceptView div').scrollTop(0);
        $('.conceptView').css('display', 'none');
    });
})