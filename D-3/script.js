$(function() {
    
    // hm
    
    $('.closeBtn').click(function(){
        $('#hm').toggleClass('open');
        $('.bg-nav').removeClass('open');
    });

    $('.bg-nav').click(function(){
        $('#hm').toggleClass('open');
    });


    $('.gBtn').click(function(){
        $('#hm').toggleClass('open');
        $('.bg-nav').toggleClass('open');
    });

    $('.closeBtn').hover(function() {
        $('.red').css('background-color','#ff0000')
    },
    function() {
        $('.red').css('background-color','rgb(250, 91, 91)')
    });

    // detail
    $('.detail').hover(function() {
        $('a',this).css('color','var(--green-color)');
    },
    function() {
        $('a',this).delay(1000).css('color','#fff')
    });
    
    // section about logo
    $('.item').hover(function() {
        $('.logo',this).css('transform','translateY(-5px)');
    },
    function() {
        $('.logo',this).css('transform','translateY(0px)')
    });
})