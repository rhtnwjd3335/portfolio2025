$(document).ready(function () {

    // 실행문


    // ####################################################################################################################################
    // 브랜드 실행문
    $(window).scroll(function () {

        let sc = $(this).scrollTop();
        console.log(sc);

        let b_top1 = $(window).height();

        // 선택구간보다 클 때, brandStory li의 순번에 맞춰 등장하라

        if (sc >= b_top1 - 300) {
            $('.brandStory li').eq(0).addClass('on');
            $('.product').css('margin-top', '800px');
        }

        if (sc >= b_top1 * 2 - 300) {
            $('.brandStory li').eq(1).addClass('on');
        }

        if (sc >= b_top1 * 3 - 300) {
            $('.brandStory li').eq(2).addClass('on');
        }

        if (sc >= b_top1 * 4 - 400) {
            $('.brandStory li').eq(3).addClass('on');
        }

        if (sc >= b_top1 * 5 - 600) {
            $('.brandStory li').eq(4).addClass('on');
        }

        if (sc >= b_top1 * 6 - 700) {
            $('.brandStory li').eq(5).addClass('on');
            $('.product').css('margin-top', '200px');
        }

        // 선택구간 외에 사라지게 만들기
        if (sc < b_top1 - 300) {
            $('.brandStory li').removeClass('on');
            $('.product').css('margin-top', '200px');
        }
    });


    // ####################################################################################################################################
    // 프로모션 실행문

    let pro = 0;

    // 오른쪽 버튼 클릭했을 때,
    $('.promotion_btn>ul>li:nth-child(1)>p').click(function () {

        if (pro == 0) pro = 3;

        pro--;

        console.log(pro);

        $('.promotion_img>ul>li').css({ 'opacity': '0', 'z-index': '-1' });
        $('.promotion_img>ul>li').eq(pro).css({ 'opacity': '1', 'z-index': '10' });

        // .slider_btn ul li에 클래스를 on해라

        $('.slider_btn ul li').removeClass('on');
        $('.slider_btn ul li').eq(pro).addClass('on');

    });

    // 왼쪽 버튼 클릭했을 때,
    $('.promotion_btn>ul>li:nth-child(2)>p').click(function () {

        pro++;

        if (pro == 3) pro = 0;

        console.log(pro);

        $('.promotion_img>ul>li').css({ 'opacity': '0', 'z-index': '-1' });
        $('.promotion_img>ul>li').eq(pro).css({ 'opacity': '1', 'z-index': '10' });

        // .slider_btn ul li에 클래스를 on해라

        $('.slider_btn ul li').removeClass('on');
        $('.slider_btn ul li').eq(pro).addClass('on');

    });



    // ####################################################################################################################################
    // 비디오 실행문

    $(window).scroll(function () {

        let sc = $(this).scrollTop();
        console.log(sc);

        let v_top1 = $(window).height();

        // 선택구간보다 클 때

        if (sc >= v_top1 * 5) {
            $('.video_txt p').addClass('on');
        }

        // 선택구간 외에 사라지게 만들기
        if (sc < v_top1 * 9) {
            $('.video_txt p').removeClass('on');
        }
    });



    // ####################################################################################################################################
    // 리뷰 실행문

    // review_img ul li를 클릭했을 때,
    $('.review_img ul li').click(function (e) {

        e.preventDefault();

        // 클릭한 나 자신을 찾아라.
        let rev = $(this).index();
        console.log(rev);

        // 변수 rev 값에 따라 review_img ul li에 on값을 생성하라.

        $('.review_img ul li').removeClass('on');
        $('.review_img ul li').eq(rev).addClass('on');

    });


    let rev = 0;

    // 왼쪽 버튼 클릭했을 때,
    $('.review_btn p:nth-child(1)').click(function () {

        if (rev == -2) rev = 3;

        rev--;

        console.log(rev);

        // .slider_btn ul li에 클래스를 on해라

        $('.review_img ul li').removeClass('on');
        $('.review_img ul li').eq(rev + 2).addClass('on');

    });

    // 오른쪽 버튼 클릭했을 때,
    $('.review_btn p:nth-child(2)').click(function () {

        rev++;

        if (rev == 3) rev = -2;

        console.log(rev);

        // .slider_btn ul li에 클래스를 on해라

        $('.review_img ul li').removeClass('on');
        $('.review_img ul li').eq(rev + 2).addClass('on');

    });



    // 로고 클릭했을 때, wrap 나타나기
    $('.logo').click(function () {

        $('#wrap').fadeIn();

    });


    // 장바구니 아이콘 클릭했을 때, 나왔다 들어가기

    let shopIcon = 0;

    $('.util>ul>li:nth-child(2)').click(function () {

        shopIcon++;

        if (shopIcon == 2) shopIcon = 0;

        if (shopIcon == 1) {
            $('.shop').addClass('on');
        }

        else {
            $('.shop').removeClass('on');
        }

    });


    // product shop_btn 클릭했을 때, 장바구니의 숫자 올라가기

    let shopNum = 0;

    $(document).on('click', '.cart_sub i', function () {
        $(this).closest('.cart_sub').remove();

        shopNum--;
        
        $('.util>ul>li:nth-child(2) span').text(shopNum);

        if ($('.cart_sub').length == 0) {
            $('.empty_cart').css('display', 'block');
            $('.shop .cart_product').css('display', 'none');

            $('#product_total').text(0);
            $('#delivery_fee').text(0);
            $('#order_total').text(0);
        }

        else {
            // shopNum 개수에 따라, 총 상품금액이 달라져라
            let product_total = 0;

            $('.cart_sub em').each(function () {
                product_total += parseInt($(this).text());
            });

            $('#product_total').text(product_total);

            // 배송비: 5만원 이상이면 배송비 무료, 5만원 미만이면 배송비 3000원
            let delivery_fee;

            if (product_total >= 50000) {
                delivery_fee = 0;
            }

            else {
                delivery_fee = 3000;
            }

            $('#delivery_fee').text(delivery_fee);

            // 총 상품금액 + 배송비의 값을 결제금액에 넣어라
            let order_total = product_total + delivery_fee;
            $('#order_total').text(order_total);
        }
    });

    $('.empty_btn').click(function () {
        // 모든 cart_sub 제거
        $('.cart_sub').remove();

        // 카운터 초기화
        shopNum = 0;
        $('.util>ul>li:nth-child(2) span').text(shopNum);

        // 빈 장바구니 상태로 변경
        $('.empty_cart').css('display', 'block');
        $('.shop .cart_product').css('display', 'none');

        // 모든 금액 초기화
        $('#product_total').text(0);
        $('#delivery_fee').text(0);
        $('#order_total').text(0);
    });

    $('.order_btn').click(function (e) {
        e.preventDefault();

        $('#wrap').css('display', 'none');
        $('.header').css('display', 'none');
        $('footer').css('display', 'none');
        $('#login').css('display', 'flex');
        $('#sub_product_01').css('display', 'none');
        $('#sub_product_02').css('display', 'none');
        $('#sub_product_03').css('display', 'none');
        $('#sub_product_04').css('display', 'none');
        $('#sub_product_05').css('display', 'none');
        $('#sub_product_06').css('display', 'none');
        $('#sub_product_07').css('display', 'none');
        $('#sub_product_08').css('display', 'none');
        $('.shop').removeClass('on');

        shopIcon++;

        if (shopIcon == 2) shopIcon = 0;

        if (shopIcon == 1) {
            $('.shop').addClass('on');
        }

        else {
            $('.shop').removeClass('on');
        }
    });

    let cNum = 0;

    $(document).on('click', '.cart_num>p:nth-child(1)', function () {
        let cNum = parseInt($(this).siblings('p:nth-child(2)').text());

        if (cNum > 1) {
            cNum--;

            $(this).siblings('p:nth-child(2)').text(cNum);

            let itemPrice = cNum * 2000;
            $(this).closest('.cart_sub').find('em').text(itemPrice);

            // 전체 총액 재계산
            let product_total = 0;

            $('.cart_sub em').each(function () {
                product_total += parseInt($(this).text());
            });

            $('#product_total').text(product_total);

            // 배송비: 5만원 이상이면 배송비 무료, 5만원 미만이면 배송비 3000원
            let delivery_fee;

            if (product_total >= 50000) {
                delivery_fee = 0;
            }
            
            else {
                delivery_fee = 3000;
            }
            
            $('#delivery_fee').text(delivery_fee);

            // 총 상품금액 + 배송비의 값을 결제금액에 넣어라
            let order_total = product_total + delivery_fee;

            $('#order_total').text(order_total);
        }
    });

    $(document).on('click', '.cart_num>p:nth-child(3)', function () {
        let cNum = parseInt($(this).siblings('p:nth-child(2)').text());

        cNum++;

        $(this).siblings('p:nth-child(2)').text(cNum);

        let itemPrice = cNum * 2000;
        $(this).closest('.cart_sub').find('em').text(itemPrice);

        // 전체 총액 재계산
        let product_total = 0;
        $('.cart_sub em').each(function () {
            product_total += parseInt($(this).text());
        });
        $('#product_total').text(product_total);

        // 배송비: 5만원 이상이면 배송비 무료, 5만원 미만이면 배송비 3000원
        let delivery_fee;
        if (product_total >= 50000) {
            delivery_fee = 0;
        } else {
            delivery_fee = 3000;
        }
        $('#delivery_fee').text(delivery_fee);

        // 총 상품금액 + 배송비의 값을 결제금액에 넣어라
        let order_total = product_total + delivery_fee;
        $('#order_total').text(order_total);
    });


    $('.shop_btn').click(function (e) {

        e.preventDefault();

        shopNum++;

        $('.util>ul>li:nth-child(2) span').text(shopNum);

        $('.empty_cart').hide();

        // img 가져오기
        let proImg = $(this).closest('li').find('img:nth-child(1)').attr('src');
        console.log(proImg);

        // product_img의 em text 가져오기
        let proTxt = $(this).closest('li').find('em').text();
        console.log(proTxt);


        // shop에 들어갈 cart_product 설정
        let cart_plus = `<div class="cart_sub">
                            <img src="${proImg}" alt="">
                            <div class="cart_menu">
                                <h3>${proTxt}</h3>
                                <p>￦<em>2000</em></p>
                            </div>
                            <div class="cart_num">
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                            <i class="fa-solid fa-trash-can"></i>
                        </div>`;

        // cart_product에 cart_plus가 들어오면, cart_product의 display를 block해라.


        // shop에 cart_plus 넣기
        $('.shop .cart_product').append(cart_plus);
        $('.empty_cart').css('display', 'none');
        $('.shop .cart_product').css('display', 'block');


        // shopNum 개수에 따라, 총 상품금액이 달라져라
        let product_total = 0;
        $('.cart_sub em').each(function () {
            product_total += parseInt($(this).text());
        });
        $('#product_total').text(product_total);

        // 배송비: 5만원 이상이면 배송비 무료, 5만원 미만이면 배송비 3000원
        let delivery_fee;
        if (product_total >= 50000) {
            delivery_fee = 0;
        }

        else {
            delivery_fee = 3000;
        }

        $('#delivery_fee').text(delivery_fee);

        // 총 상품금액 + 배송비의 값을 결제금액에 넣어라
        let order_total = product_total + delivery_fee;
        $('#order_total').text(order_total);
    });

    // sub_product 설정

    let pbtn = 0;

    $('.recommend>ul>li:nth-child(1)').click(function () {

        pbtn++;

        if (pbtn == 2) pbtn = 0;

        if (pbtn == 1) {
            $('.recommend>ul>li:nth-child(2)>div').css({ 'left': (-418 * pbtn) + 'px' });
        }

        else {
            $('.recommend>ul>li:nth-child(2)>div').css({ 'left': (418 * pbtn) + 'px' });
        }

    });

    $('.recommend>ul>li:nth-child(3)').click(function () {

        pbtn++;

        if (pbtn == 2) pbtn = 0;

        if (pbtn == 1) {
            $('.recommend>ul>li:nth-child(2)>div').css({ 'left': (-418 * pbtn) + 'px' });
        }

        else {
            $('.recommend>ul>li:nth-child(2)>div').css({ 'left': (418 * pbtn) + 'px' });
        }

    });


    // more_btn클릭했을 때, 서브페이지(프로덕트)로 이동
    $('.product_img ul li:nth-child(1) .more_btn').click(function (e) {

        e.preventDefault();

        $('#wrap').css('display', 'none');
        $('#sub_product_01').css('display', 'block');
        $(window).scrollTop(0);

    });

    $('.product_img ul li:nth-child(2) .more_btn').click(function (e) {

        e.preventDefault();

        $('#wrap').css('display', 'none');
        $('#sub_product_02').css('display', 'block');
        $(window).scrollTop(0);

    });

    $('.product_img ul li:nth-child(3) .more_btn').click(function (e) {

        e.preventDefault();

        $('#wrap').css('display', 'none');
        $('#sub_product_03').css('display', 'block');
        $(window).scrollTop(0);

    });

    $('.product_img ul li:nth-child(4) .more_btn').click(function (e) {

        e.preventDefault();

        $('#wrap').css('display', 'none');
        $('#sub_product_04').css('display', 'block');
        $(window).scrollTop(0);

    });

    $('.product_img ul li:nth-child(5) .more_btn').click(function (e) {

        e.preventDefault();

        $('#wrap').css('display', 'none');
        $('#sub_product_05').css('display', 'block');
        $(window).scrollTop(0);

    });

    $('.product_img ul li:nth-child(6) .more_btn').click(function (e) {

        e.preventDefault();

        $('#wrap').css('display', 'none');
        $('#sub_product_06').css('display', 'block');
        $(window).scrollTop(0);

    });

    $('.product_img ul li:nth-child(7) .more_btn').click(function (e) {

        e.preventDefault();

        $('#wrap').css('display', 'none');
        $('#sub_product_07').css('display', 'block');
        $(window).scrollTop(0);

    });

    $('.product_img ul li:nth-child(8) .more_btn').click(function (e) {

        e.preventDefault();

        $('#wrap').css('display', 'none');
        $('#sub_product_08').css('display', 'block');
        $(window).scrollTop(0);

    });


    let jNum = 0;
    // .jelly .price>div>p:nth-child(1)
    // 클릭했을 때, 숫자 1씩 감소
    $('.jelly .price>div>p:nth-child(1)').click(function () {

        if (jNum <= 1) jNum = 1;

        jNum--;

        $('.jelly .price>div>p:nth-child(2)').text(jNum + 1);
    });

    // .jelly .price>div>p:nth-child(3)
    // 클릭했을 때, 숫자 1씩 증가
    $('.jelly .price>div>p:nth-child(3)').click(function () {

        jNum++;

        $('.jelly .price>div>p:nth-child(2)').text(jNum + 1);
    });


    // product shop_btn 클릭했을 때, 장바구니의 숫자 올라가기

    let jshopNum = 0;

    $('.jelly>ul>li:nth-child(3)>ul>li:nth-child(1)>p').click(function (e) {
        e.preventDefault();

        jshopNum++;

        $('.util>ul>li:nth-child(2) span').text(jshopNum);
    });


    // util>ul>li:nth-child(1)클릭했을 때, 서브페이지(로그인)으로 이동
    $('.util>ul>li:nth-child(1)').click(function (e) {

        e.preventDefault();

        $('#wrap').css('display', 'none');
        $('.header').css('display', 'none');
        $('footer').css('display', 'none');
        $('#login').css('display', 'flex');
        $('#sub_product_01').css('display', 'none');
        $('#sub_product_02').css('display', 'none');
        $('#sub_product_03').css('display', 'none');
        $('#sub_product_04').css('display', 'none');
        $('#sub_product_05').css('display', 'none');
        $('#sub_product_06').css('display', 'none');
        $('#sub_product_07').css('display', 'none');
        $('#sub_product_08').css('display', 'none');

    });


    // login_img img를 클릭했을 때, wrap으로 이동
    $('.login_img img').click(function () {

        $('#login').css('display', 'none');
        $('#wrap').css('display', 'block');
        $('.header').css('display', 'flex');
        $('footer').css('display', 'flex');

    });


    const content = [
        "<em>함께</em>해요 모두 다,",
        "<em>행복</em>해요 하리보!"
    ];

    let lineNum = 0;
    let charNum = 0;

    function typing() {
        let lineId = "#line" + (lineNum + 1);
        let txt = content[lineNum];

        if (txt.charAt(charNum) === "<") {
            let closeIdx = txt.indexOf(">", charNum);
            $(lineId).html(txt.substring(0, closeIdx + 1));
            charNum = closeIdx + 1;
        }

        else {
            $(lineId).html(txt.substring(0, charNum + 1));
            charNum++;
        }

        if (charNum >= txt.length) {
            clearInterval(time);
            lineNum++;
            charNum = 0;

            if (lineNum < content.length) {
                setTimeout(() => {
                    time = setInterval(typing, 200);
                }, 200);
            }
        }
    };

    let time = setInterval(typing, 200);
})