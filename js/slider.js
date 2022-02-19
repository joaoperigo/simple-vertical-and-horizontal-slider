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

/*-------SLIDER------*/
//AUTHOR: Joao Perigo 

//loop slider restart
var checaIntervalo;

//change ball´s color: $( ".link-dot" ).find( ".dot" ).css( "background-color", "trasnparent" );

$( ".dot" ).click(function() {

    //the slide can be auto played, but is a little buggy
    //reset interval autoloop 
    //clearTimeout(checaIntervalo);
    //checaIntervalo = window.setTimeout(slideEm, 3000);

    //when slide change, change dots activated
    $('.dot').removeClass('dot-ativada');
    if ( $( this ).hasClass( "dot-ativada" ) ) {
        $(this).removeClass("dot-ativada");
    }
    else{
        $(this).addClass("dot-ativada");
    }

});

//At the time I did this slider I did not know about each method in js, so I had to declare each dot
//automatic slider
function slideEm() {

    //check balls 
    if( $( '.link-dot' ).hasClass( "link-dot6" ) ) {

        if($( '.link-dot2 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot3')[0].click();
            $('.link-dot3 .dot').addClass("dot-ativada");
            $('.link-dot2 .dot').removeClass("dot-ativada");
        }

        else if($( '.link-dot3 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot4')[0].click();
            $('.link-dot4 .dot').addClass("dot-ativada");
            $('.link-dot3 .dot').removeClass("dot-ativada");
        } 

        else if($( '.link-dot4 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot5')[0].click();
            $('.link-dot5 .dot').addClass("dot-ativada");
            $('.link-dot4 .dot').removeClass("dot-ativada");
        } 

        else if($( '.link-dot5 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot6')[0].click();
            $('.link-dot6 .dot').addClass("dot-ativada");
            $('.link-dot5 .dot').removeClass("dot-ativada");
        } 

        else if($( '.link-dot6 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot2')[0].click();
            $('.link-dot2 .dot').addClass("dot-ativada");
            $('.link-dot6 .dot').removeClass("dot-ativada");
        } 
    }

    //get dots quantity
    else if( $( '.link-dot' ).hasClass( "link-dot5" ) ) {

        if($( '.link-dot2 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot3')[0].click();
            $('.link-dot3 .dot').addClass("dot-ativada");
            $('.link-dot2 .dot').removeClass("dot-ativada");
        }

        else if($( '.link-dot3 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot4')[0].click();
            $('.link-dot4 .dot').addClass("dot-ativada");
            $('.link-dot3 .dot').removeClass("dot-ativada");
        } 

        else if($( '.link-dot4 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot5')[0].click();
            $('.link-dot5 .dot').addClass("dot-ativada");
            $('.link-dot4 .dot').removeClass("dot-ativada");
        } 

        else if($( '.link-dot5 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot2')[0].click();
            $('.link-dot2 .dot').addClass("dot-ativada");
            $('.link-dot5 .dot').removeClass("dot-ativada");
        } 

    }

    //get dots quantity
    else if( $( '.link-dot' ).hasClass( "link-dot4" ) ) {

        if($( '.link-dot2 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot3')[0].click();
            $('.link-dot3 .dot').addClass("dot-ativada");
            $('.link-dot2 .dot').removeClass("dot-ativada");
        }

        else if($( '.link-dot3 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot4')[0].click();
            $('.link-dot4 .dot').addClass("dot-ativada");
            $('.link-dot3 .dot').removeClass("dot-ativada");
        } 

        else if($( '.link-dot4 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot2')[0].click();
            $('.link-dot2 .dot').addClass("dot-ativada");
            $('.link-dot4 .dot').removeClass("dot-ativada");
        } 

    }

    //get dots quantity
    else if( $( '.link-dot' ).hasClass( "link-dot3" ) ) {

        if($( '.link-dot2 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot3')[0].click();
            $('.link-dot3 .dot').addClass("dot-ativada");
            $('.link-dot2 .dot').removeClass("dot-ativada");
        }

        else if($( '.link-dot3 .dot' ).hasClass( "dot-ativada" )) {
            $('.link-dot2')[0].click();
            $('.link-dot2 .dot').addClass("dot-ativada");
            $('.link-dot3 .dot').removeClass("dot-ativada");
        } 


    }

}   


window.setTimeout(slideEm, 1000);


//And to make my client happy, in the site I make up a parralax effect, may be it's still work.
$('.parallax').each(function(){//div.parallax
    var $obj = $(this);

    $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / $obj.data('speed')); 

        var bgpos = yPos + 'px';

        $obj.css('top', bgpos );

    }); 
});
