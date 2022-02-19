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

$( ".dot" ).click(function() {

    //when slide change, change dots activated
    $('.dot').removeClass('dot-ativada');
    if ( $( this ).hasClass( "dot-ativada" ) ) {
        $(this).removeClass("dot-ativada");
    }
    else{
        $(this).addClass("dot-ativada");
    }

});