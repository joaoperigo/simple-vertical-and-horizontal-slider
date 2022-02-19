// INIT jquery - LocalScroll (and scrollTo?) plugin 
jQuery(function ($) {
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
        target: '.wrapper-slider-post', // could be a selector or a jQuery object too.
        queue: true,
        duration: 1000,
        hash: true,
        onBefore: function (e, anchor, $target) {
            // The 'this' is the settings object, can be modified
        },
        onAfter: function (anchor, settings) {
            // The 'this' contains the scrolled element (#content)
        }
    });
});

// coded by João Périgo
var checaTamanhoTela = window.innerWidth; /* screen.width checa a tela toda,nao so browser */

$(".bola").click(function () {
    $('.bola').removeClass('bola-ativada');
    if ($(this).hasClass("bola-ativada")) {
        $(this).removeClass("bola-ativada");
    }
    else {
        $(this).addClass("bola-ativada");
    }
});

var lightBoxBooleSLiderPost = 1;
$(".menos-zoom-slider-post").click(function () {
    ativaClickBolaSLiderPost();
});

$(".bola-slider-post").click(function () {
    $('.bola-slider-post').removeClass('bola-ativada-slider-post');
    if ($(this).hasClass("bola-ativada-slider-post")) {
        $(this).removeClass("bola-ativada-slider-post");
    }
    else {
        $(this).addClass("bola-ativada-slider-post");
    }

    if (lightBoxBooleSLiderPost == 0) {
        ativaClickBolaSLiderPost();
    }
});

//pega valor padrao, para multiplas telas
var pegaValorSeta = $(".seta-para-baixo").css("bottom");
var pegaTopMenu = $(".menu-container").css("top");
var pegaBolinhaPost = $(".slider-posts-bolinha").css("bottom");

function ativaClickBolaSLiderPost() {

    if (lightBoxBooleSLiderPost == 1) {
        $('.menos-zoom-slider-post, .slider-item-post img').css({ "transition": "width 3s ease", "height": "100%", "width": "auto", "cursor": "zoom-in" });

        $(".slider-posts-bolinha").css({ "transition": "all 0.8s ease", "bottom": "-15em", "pointer-events": "none" });
        $(".seta-para-baixo").css({ "transition": "all 0.8s ease", "bottom": "-15em", "pointer-events": "none" });
        $(".menu-container").css({ "transition": "all 0.8s ease", "top": "-15em" });
        $(".degrade-topo-fixo").css({ "transition": "all 0.8s ease", "opacity": "0" });
        lightBoxBooleSLiderPost = lightBoxBooleSLiderPost - 1;
    }

    else {
        $('.menos-zoom-slider-post').css({ "height": "auto", "width": "1920px", "cursor": "zoom-out" });

        $(".slider-posts-bolinha").css({ "bottom": pegaBolinhaPost, "pointer-events": "auto" });
        $(".seta-para-baixo").css({ "bottom": pegaValorSeta, "pointer-events": "auto" });
        $(".menu-container").css("top", pegaTopMenu);
        $(".degrade-topo-fixo").css("opacity", "1");
        lightBoxBooleSLiderPost = lightBoxBooleSLiderPost + 1;
    }

}

//pega largura do wrapper nescessario para habilitar o scroll horizontal, deixando o div filho maior q o pai.
var qtdBolinhasSliderPost = $('.slider-posts-bolinha a').children().length;

function ajustaTamanhoImagemSliderPost() {
    var pegaLarguraWrapper = window.innerWidth;
    var totalWrapperOverflow = pegaLarguraWrapper * qtdBolinhasSliderPost;
    $('.wrapper-overflow').css("width", totalWrapperOverflow + "px");
    $('.slider-item-post').css("width", pegaLarguraWrapper + "px");
}
ajustaTamanhoImagemSliderPost();


//landscape mobile
window.addEventListener("resize", function () {

    ajustaTamanhoImagemSliderPost();

}, false);
