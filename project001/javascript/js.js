$(document).ready(function(){
    $('.menu_btn').click(function(e){
        e.preventDefault()
        // html에 설정되어 있는 a의 성질때문에 아래의 기능이 순식간에 보여서 적용이 안되는 것처럼 보였던 것.
        // 그래서 e.preventDefault() 이 기능을 적용하여 a의 성질을 없앴음.
        $('.menu_sub').slideToggle()
    })
})