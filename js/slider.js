/*-------SLIDER------*/
//Joao Perigo 

// INIT jquery - LocalScroll (and scrollTo?) plugin 
jQuery(function( $ ){
    /**
	 * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
	 * @see http://demos.flesler.com/jquery/scrollTo/
	 * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.localScroll.
	 */

    // The default axis is 'y', but in this demo, I want to scroll both
    // You can modify any default like this
    $.localScroll.defaults.axis = 'xy';

    /**
	 * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
	 * also affect the >> and << links. I want every link in the page to scroll.
	 */
    $.localScroll({
        target: '.slider-wrapper', // could be a selector or a jQuery object too.
        queue:true,
        duration:1000,
        hash:true,
        onBefore:function( e, anchor, $target ){
            // The 'this' is the settings object, can be modified
        },
        onAfter:function( anchor, settings ){
            // The 'this' contains the scrolled element (#content)
        }
    });
});



//loop slider restart
var checaIntervalo;

//change ball´s color: $( ".link-bola" ).find( ".bola" ).css( "background-color", "trasnparent" );

$( ".bola" ).click(function() {

    //reset interval autoloop
    clearTimeout(checaIntervalo);
    checaIntervalo = window.setTimeout(slideEm, 3000);



    $('.bola').removeClass('bola-ativada');
    if ( $( this ).hasClass( "bola-ativada" ) ) {
        $(this).removeClass("bola-ativada");
    }
    else{
        $(this).addClass("bola-ativada");
    }
});

//automatic slider
function slideEm() {

    //check balls 
    if( $( '.link-bola' ).hasClass( "link-bola6" ) ) {

        if($( '.link-bola2 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola3')[0].click();
            $('.link-bola3 .bola').addClass("bola-ativada");
            $('.link-bola2 .bola').removeClass("bola-ativada");
        }

        else if($( '.link-bola3 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola4')[0].click();
            $('.link-bola4 .bola').addClass("bola-ativada");
            $('.link-bola3 .bola').removeClass("bola-ativada");
        } 

        else if($( '.link-bola4 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola5')[0].click();
            $('.link-bola5 .bola').addClass("bola-ativada");
            $('.link-bola4 .bola').removeClass("bola-ativada");
        } 

        else if($( '.link-bola5 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola6')[0].click();
            $('.link-bola6 .bola').addClass("bola-ativada");
            $('.link-bola5 .bola').removeClass("bola-ativada");
        } 

        else if($( '.link-bola6 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola2')[0].click();
            $('.link-bola2 .bola').addClass("bola-ativada");
            $('.link-bola6 .bola').removeClass("bola-ativada");
        } 
    }

    //checa qtd bolas 
    else if( $( '.link-bola' ).hasClass( "link-bola5" ) ) {

        if($( '.link-bola2 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola3')[0].click();
            $('.link-bola3 .bola').addClass("bola-ativada");
            $('.link-bola2 .bola').removeClass("bola-ativada");
        }

        else if($( '.link-bola3 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola4')[0].click();
            $('.link-bola4 .bola').addClass("bola-ativada");
            $('.link-bola3 .bola').removeClass("bola-ativada");
        } 

        else if($( '.link-bola4 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola5')[0].click();
            $('.link-bola5 .bola').addClass("bola-ativada");
            $('.link-bola4 .bola').removeClass("bola-ativada");
        } 

        else if($( '.link-bola5 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola2')[0].click();
            $('.link-bola2 .bola').addClass("bola-ativada");
            $('.link-bola5 .bola').removeClass("bola-ativada");
        } 

    }

    //checa qtd bolas 
    else if( $( '.link-bola' ).hasClass( "link-bola4" ) ) {

        if($( '.link-bola2 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola3')[0].click();
            $('.link-bola3 .bola').addClass("bola-ativada");
            $('.link-bola2 .bola').removeClass("bola-ativada");
        }

        else if($( '.link-bola3 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola4')[0].click();
            $('.link-bola4 .bola').addClass("bola-ativada");
            $('.link-bola3 .bola').removeClass("bola-ativada");
        } 

        else if($( '.link-bola4 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola2')[0].click();
            $('.link-bola2 .bola').addClass("bola-ativada");
            $('.link-bola4 .bola').removeClass("bola-ativada");
        } 

    }

    //checa qtd bolas 
    else if( $( '.link-bola' ).hasClass( "link-bola3" ) ) {

        if($( '.link-bola2 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola3')[0].click();
            $('.link-bola3 .bola').addClass("bola-ativada");
            $('.link-bola2 .bola').removeClass("bola-ativada");
        }

        else if($( '.link-bola3 .bola' ).hasClass( "bola-ativada" )) {
            $('.link-bola2')[0].click();
            $('.link-bola2 .bola').addClass("bola-ativada");
            $('.link-bola3 .bola').removeClass("bola-ativada");
        } 


    }



    checaIntervalo = window.setTimeout(slideEm, 3000);
    checaIntervalo;

}   


window.setTimeout(slideEm, 1000);



/*scroll slider parallax*/
$('.parallax50').each(function(){
    var $obj = $(this);

    $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / $obj.data('speed')); 

        var bgpos = 50 + yPos + '%';

        $obj.css('top', bgpos );

    }); 
});

//ajusta play 
$('.parallax42').each(function(){
    var $obj = $(this);

    $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / $obj.data('speed')); 

        var bgpos = 42 + yPos + '%';

        $obj.css('top', bgpos );

    }); 
});

//slider mask adjust
$('.parallax55').each(function(){
    var $obj = $(this);

    $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / $obj.data('speed')); 

        var bgpos = 55 + yPos + '%';

        $obj.css('top', bgpos );

    }); 
});


$('.parallax').each(function(){//div.parallax
    var $obj = $(this);

    $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / $obj.data('speed')); 

        var bgpos = yPos + 'px';

        $obj.css('top', bgpos );

    }); 
});
