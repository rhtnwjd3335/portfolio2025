$(document).ready(function () {
    $('.fa-bars-staggered').click(function (e) {
        e.preventDefault();

        $('.menu_sub').slideToggle();
    });

    // $('.logo a>img').click(function (e) {
    //     e.preventDefault();

    //     $('.menu_sub').slideToggle();
    // });

    // 네비게이션 클릭 시, 섹션 위치 설정
    $('.nav ul li').click(function () {
        let index = $(this).index();

        if (index == 0) {
            $('html, body').animate({ scrollTop: 0 });
        }

        else {
            scrollTop(200);
        }
    });

    // 히어로 섹션 슬라이더 설정
    // 슬라이더 설정
    let s = 0;

    function updateSlide() {
        $('.box3-1 li').css('left', '-100%');

        $('.box3-1 li').eq(s - 1).css('left', '0').stop().animate({ 'left': '-100%' }, 1500);
        $('.box3-1 li').eq(s).css('left', '100%').stop().animate({ 'left': '0', 'opacity': '1' }, 1500);

        $('.box3-3 ul li').each(function (index) {
            if (index === s) {
                $(this).find('img:nth-child(1)').fadeIn(1500);
                $(this).find('img:nth-child(2)').fadeOut(1500);
            }

            else {
                $(this).find('img:nth-child(1)').fadeOut(1500);
                $(this).find('img:nth-child(2)').fadeIn(1500);
            }
        });
    }

    let autoSlide = setInterval(function () {
        s++;

        if (s == 3) s = 0;

        updateSlide();
    }, 5000);

    $('.box3-3 ul li').click(function () {
        clearInterval(autoSlide);

        s = $(this).index();

        updateSlide();
        autoSlide = setInterval(function () {
            s++;

            if (s == 3) s = 0;

            updateSlide();
        }, 5000);
    });



    // 예매 설정
    // 달력

    let dateSelected = false;
    let timeSelected = false;

    $('#date1').datepicker({
        onSelect: function (dateText, inst) {
            let year = inst.selectedYear;
            let mon = inst.selectedMonth + 1;
            let day = inst.selectedDay;

            $('.date').text(`${year}년 ${mon}월 ${day}일`);

            dateSelected = true;
        }
    });

    $('.reservation_time ul li').click(function (e) {
        e.preventDefault();

        $('.reservation_time i').removeClass('fa-square-check').addClass('fa-square');

        // 클릭한 항목만 fa-square-check로 변경
        $(this).find('i').removeClass('fa-square').addClass('fa-square-check');

        // 클릭된 항목의 텍스트를 .time에 넣기
        let timeText = $(this).text().match(/\d{2}:\d{2}~\d{2}:\d{2}/)[0];
        $('.time').text(timeText);

        timeSelected = true;
    });

    $('.reservation_btn').click(function (e) {
        e.preventDefault();

        if (dateSelected && timeSelected) {
            $('.reservation_popup').css('display', 'block');
            $('.box4-4').css('display', 'block');

            $('body').css({
                'overflow': 'hidden',
                'top': `-${window.scrollY}px`,
                'width': '100%',
                'background-color': 'rgba(00,00,00.0.5)'
            });
        }

        else {
            alert('날짜와 시간을 모두 선택해주세요.');
        }
    });

    $('.reservation_popup>em').click(function () {
        $('.reservation_popup').css('display', 'none');
        $('.box4-4').css('display', 'none');

        const scrollY = $('body').css('top');

        $('body').css({
            'position': '',
            'top': '',
            'width': '',
            'z-index': '',
            'background-color': '',
            'overflow': ''
        });

        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });


    // 층별안내 설정
    let floor = 0;
    const floorNames = ['B2', 'B1', 'F1', 'F2', 'F3', 'F4'];

    $('.fa-chevron-right').click(function (e) {
        e.preventDefault();

        floor++;

        if (floor > 3) floor = -2;

        $('.floor_list>div').removeClass('on');
        $('.floor_list>div').eq(floor + 2).addClass('on');
        $('.box6-2 span').text(floorNames[floor + 2]);
    });

    $('.fa-chevron-left').click(function (e) {
        e.preventDefault();

        floor--;

        if (floor < -2) floor = 3;

        $('.floor_list>div').removeClass('on');
        $('.floor_list>div').eq(floor + 2).addClass('on');
        $('.box6-2 span').text(floorNames[floor + 2]);
    });

    // 이벤트 설정
    let event = 0;

    $('.event_btn2 .fa-chevron-right').click(function (e) {
        e.preventDefault();

        event++;

        if (event > 4) event = 0;

        $('.event_img ul li').removeClass('on');
        $('.event_img ul li').eq(event).addClass('on');
    });

    $('.event_btn2 .fa-chevron-left').click(function (e) {
        e.preventDefault();

        event--;

        if (event < 0) event = 4;

        $('.event_img ul li').removeClass('on');
        $('.event_img ul li').eq(event).addClass('on');
    });
})