var controller = new ScrollMagic.Controller();
var images = [
    "img/boy.png",
    "img/boy-2.png",
    "img/boy-3.png",
    "img/boy-4.png",
];

var obj = {curImg: 0};

var boy = '#boy';
var path = '#path-1';

var boyY = -200;
var boyX = -100;
var boyDuration = "3000%";

if ((window.matchMedia('(max-width: 1199px)').matches)) {
    boy = '#boy-mobile';
    path = '#path-mobile';
    boyY = -100;
    boyX = -50;
    boyDuration = "3000%";
}
if ((window.matchMedia('(max-width: 767px)').matches)) {
    boyY = -150;
    boyX = -75;
    boyDuration = "2000%";
}
if ((window.matchMedia('(max-width: 575px)').matches)) {
    boyY = -200;
    boyX = -100;
    boyDuration = "1000%";
}


//Главная страница
if ($('#pinContainer').length) {


    var path1 = MorphSVGPlugin.pathDataToBezier(path, {offsetY: boyY, offsetX: boyX});


    var wipeAnimation = new TimelineMax({paused: true})

        .add('start')

        .add('section-1')
        .to("a.dots-2", 0.01, {css: {className: '-=active'}})
        .to("a.dots-1", 0.01, {css: {className: '+=active'}})
        .to("#slideContainer", 5.55, {left: '-100%', delay: 11.11, ease: Linear.easeNone}, 'start')
        .to(".svg", 5.55, {x: "-14.2857%", delay: 11.11, ease: Linear.easeNone}, 'start')


        .add('section-2')
        .to(".dots", 0.1, {css: {className: '+=gray'}, delay: 13}, 'start')
        .to("a.dots-1", 0.001, {css: {className: '-=active'}})
        .to("a.dots-2", 0.1, {css: {className: '+=active'}})
        .to("#slideContainer", 5.55, {left: '-200%', delay: 11.11, ease: Linear.easeNone}, 'section-2')
        .to(".svg", 5.55, {x: "-28.5714%", delay: 11.11, ease: Linear.easeNone}, 'section-2')
        .to("#woman", 5.55, {opacity: "0", ease: Linear.easeNone, delay: 11.11}, 'section-2')

        .add('section-3')
        .to("a.dots-2", 0.001, {css: {className: '-=active'}})
        .to("a.dots-3", 0.1, {css: {className: '+=active'}})
        .to("#slideContainer", 5.55, {left: '-300%', delay: 11.11, ease: Linear.easeNone}, 'section-3')
        .to(".svg", 5.55, {x: "-42.8571%", delay: 11.11, ease: Linear.easeNone}, 'section-3')


        .add('section-4')
        .to("a.dots-3", 0.001, {css: {className: '-=active'}})
        .to("a.dots-4", 0.1, {css: {className: '+=active'}})
        .to("#slideContainer", 5.55, {left: '-400%', delay: 11.11, ease: Linear.easeNone}, 'section-4')
        .to(".svg", 5.55, {x: "-57.1428%", delay: 11.11, ease: Linear.easeNone}, 'section-4')
        .to("#panel-4", 5.55, {x: "-=25%", ease: Linear.easeNone, delay: 11.11}, 'section-4')
        .to("#panel4-dec1", 5.55, {x: "-=25%", ease: Linear.easeNone, delay: 11.11}, 'section-4')


        .add('section-5')
        .to("a.dots-4", 0.001, {css: {className: '-=active'}})
        .to("a.dots-5", 0.1, {css: {className: '+=active'}})
        .to("#slideContainer", 5.55, {left: '-500%', delay: 11.11, ease: Linear.easeNone}, 'section-5')
        .to(".svg", 5.55, {x: "-71.4285%", delay: 11.11, ease: Linear.easeNone}, 'section-5')
        .to("#panel5-dec1", 5.55, {x: "-=25%", ease: Linear.easeNone, delay: 11.11}, 'section-5')
        .to("#panel5-dec2", 5.55, {x: "-=25%", ease: Linear.easeNone, delay: 11.11}, 'section-5')


        .add('section-6')
        .to("a.dots-5", 0.001, {css: {className: '-=active'}})
        .to("a.dots-6", 0.1, {css: {className: '+=active'}})
        .to("#slideContainer", 11.11, {left: '-600%', delay: 5.55, ease: Linear.easeNone}, 'section-6')

        .to(".svg", 11.11, {x: "-85.7142%", delay: 5.55, ease: Linear.easeNone}, 'section-6')
        .to("#panel6-dec1", 5.55, {x: "-=15%", ease: Linear.easeNone, delay: 11.11}, 'section-6')

        .add('section-7')
        .to("a.dots-6", 0.001, {css: {className: '-=active'}, delay: -5.55}, 'section-7')
        .to("a.dots-7", 0.1, {css: {className: '+=active'}, delay: -5.55}, 'section-7')




        // panel-1
        .to("#listik", 16.66, {rotation: "+=25", x: "-200%", y: "90%", ease: Linear.easeNone}, 'start')
        .to("#listik-3", 16.66, {rotation: "+=25", x: "-250%", y: "70%", ease: Linear.easeNone}, 'start')
        .to("#listik-4", 16.66, {rotation: "+=50", x: "-150%", y: "70%", ease: Linear.easeNone}, 'start')
        .to("#listik-2", 16.66, {rotation: "-=25", x: "-350%", y: "-35%", ease: Linear.easeNone}, 'start')
        .to("#panel1-dec1", 16.66, {x: "-15%", ease: Linear.easeNone}, 'start')
        .to("#panel1-dec2", 16.66, {x: "15%", ease: Linear.easeNone}, 'start')
        .to("#panel1-bg", 16.66, {scale: 1.08}, 'start')


        // panel-2
        .to(".panel-2__info", 16.66, {x: "-=8%", ease: Linear.easeNone}, 'section-2')
        .to(".nav--pink", 16.66, {x: "-=3%", ease: Linear.easeNone}, 'section-2')
        .to("#klubnika-provansa", 16.66, {
            rotation: "-=5",
            top: "-=5%",
            x: "-25%",
            scale: "1.1",
            ease: Linear.easeNone
        }, 'section-2')
        .to("#panel2-dec1", 16.66, {y: "-=0%", x: "-=15%", ease: Linear.easeNone}, 'section-2')
        .to("#hat", 16.66, {rotation: "+=10", y: "-=15%", x: "-=30%", ease: Linear.easeNone}, 'section-2')
        .to("#bag", 16.66, {rotation: "-=10", y: "+=5%", x: "-=35%", ease: Linear.easeNone}, 'section-2')
        .to("#strawberry", 16.66, {rotation: "-=25", y: "+=5%", x: "-=45%", ease: Linear.easeNone}, 'section-2')
        .to("#soap-modile", 16.66, {rotation: "-=65", y: "+=15%", x: "-=65%", ease: Linear.easeNone}, 'section-2')
        .to("#listik2-1", 16.66 + 5.55, {
            rotation: "+=45",
            x: "-500%",
            y: "20%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-2')
        .to("#listik2-2", 16.66 + 5.55, {
            rotation: "+=15",
            x: "-350%",
            y: "20%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-2')
        .to("#listik2-3", 16.66 + 5.55, {
            rotation: "-=65",
            x: "-220%",
            y: "20%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-2')
        .to("#listik2-4", 16.66 + 5.55, {
            rotation: "+=68",
            x: "-250%",
            y: "150%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-2')
        .to("#listik2-5", 16.66 + 5.55, {
            rotation: "+=45",
            x: "-150%",
            y: "65%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-2')
        .to(".panel__title-pink", 16.66 + 5.55, {
            rotation: "+=4",
            y: "5%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-2')
        .to(".panel__title-orange", 16.66 + 5.55, {
            rotation: "-=4",
            y: "5%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-2')
        .to(".nav--pink-l", 16.66, {x: "-=5%", y: "-=5%", ease: Linear.easeNone}, 'section-2')

        // panel-3
        .to("#car", 16.66 + 5.55, {x: "30%", scale: ".8", ease: Linear.easeNone, delay: -5.55}, 'section-3')
        .to("#wave", 16.66 + 5.55, {backgroundPosition: "-275px 0", ease: Linear.easeNone, delay: -5.55}, 'section-3')
        .to("#boat", 16.66 + 5.55, {x: "-25%", ease: Linear.easeNone, delay: -5.55}, 'section-3')
        .to("#panel3-dec1", 16.66 + 5.55, {scale: "1.05", ease: Linear.easeNone, delay: -5.55}, 'section-3')
        .to("#man", 16.66, {scale: "1.1", ease: Linear.easeNone}, 'section-3')
        .to("#panel3-dec-mobile", 16.66, {scale: "1.1", ease: Linear.easeNone}, 'section-3')
        .to("#metal-ball", 16.66, {rotation: "+=65", y: "35%", x: "15%", ease: Linear.easeNone}, 'section-3')
        .to("#kedr-i-mineraly", 16.66, {
            rotation: "+=5",
            top: "-=5%",
            x: "-10%",
            scale: "1.1",
            ease: Linear.easeNone
        }, 'section-3')
        .to(".panel__title-blue", 16.66 + 5.55, {
            rotation: "-=1.5",
            y: "+=15%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-3')
        .to(".panel-3__info", 16.66, {x: "-=8%", ease: Linear.easeNone}, 'section-3')
        .to(".nav--blue", 16.66, {x: "-=5%", y: "-=5%", ease: Linear.easeNone}, 'section-3')
        // panel-4
        .to(".panel__title-decor--pink", 16.66 + 5.55, {
            x: "-=5%",
            y: "+=15%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-4')
        .to(".panel-4__info", 16.66, {x: "-=8%", ease: Linear.easeNone}, 'section-4')
        .to(".nav--pink", 16.66, {x: "-=5%", y: "-=5%", ease: Linear.easeNone}, 'section-4')
        .to("#panel-4", 16.66, {scale: "1.1", ease: Linear.easeNone}, 'section-4')
        .to("#panel4-dec1", 16.66, {scale: "0.95", ease: Linear.easeNone}, 'section-4')
        .to("#cake", 16.66 + 5.55, {
            scale: "1",
            rotation: "-=45",
            x: "-=45%",
            y: "-=95%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-4')
        .to("#cakes", 16.66 + 5.55, {
            scale: "0.9",
            rotation: "+=5",
            x: "-=15%",
            y: "-=15%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-4')
        .to("#flower-1", 16.66, {rotation: "+=15", x: "-=35%", y: "+=25%", ease: Linear.easeNone}, 'section-4')
        .to("#flower-2", 16.66, {rotation: "+=5", x: "-=15%", y: "-=15%", ease: Linear.easeNone}, 'section-4')
        .to("#flamboise", 16.66, {
            rotation: "-=5",
            top: "-=5%",
            x: "-10%",
            scale: "1.1",
            ease: Linear.easeNone
        }, 'section-4')
        .to("#croissant", 16.66 + 5.55, {
            rotation: "-=45",
            top: "-=15%",
            x: "-75%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-4')
        .to("#croissant-ico", 16.66 + 5.55, {
            rotation: "+=25",
            y: "-=50%",
            x: "-200%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-4')

        // panel-5
        .to(".panel__title-decor--orange", 16.66 + 5.55, {
            x: "-=5%",
            y: "+=15%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-5')
        .to(".panel-5__info", 16.66, {x: "-=8%", ease: Linear.easeNone}, 'section-5')
        .to(".nav--orange", 16.66, {x: "-=5%", y: "-=5%", ease: Linear.easeNone}, 'section-5')
        .to("#apelsin", 16.66, {
            rotation: "+=5",
            top: "-=5%",
            x: "-=10%",
            scale: "1.1",
            ease: Linear.easeNone
        }, 'section-5')
        .to("#cheese", 16.66, {
            rotation: "+=15",
            y: "+=10%",
            x: "-=10%",
            scale: "1.1",
            ease: Linear.easeNone
        }, 'section-5')
        .to("#truffle", 16.66, {
            rotation: "-=20",
            y: "+=14%",
            x: "-=30%",
            scale: "1.1",
            ease: Linear.easeNone
        }, 'section-5')
        .to("#baget", 16.66 + 5.55, {
            rotation: "+=15",
            y: "+=40%",
            x: "-=10%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-5')
        .to("#nut", 16.66 + 5.55, {
            rotation: "-=25",
            y: "+=300%",
            x: "-=10%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-5')
        .to("#cinnamon", 16.66 + 5.55, {
            rotation: "-=15",
            y: "+=300%",
            x: "-=10%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-5')
        .to("#garnet", 16.66 + 5.55, {
            rotation: "-=45",
            y: "+=250%",
            x: "-=20%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-5')
        .to("#garnet-2", 16.66 + 5.55, {
            rotation: "+=15",
            y: "+=200%",
            x: "-=60%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-5')
        .to("#cinnamon-2", 16.66 + 5.55, {
            rotation: "+=35",
            y: "+=200%",
            x: "-=60%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-5')
        .to("#cinnamon-3", 16.66 + 5.55, {
            rotation: "+=65",
            y: "+=400%",
            x: "+=50%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-5')
        .to("#corn", 16.66 + 5.55, {
            rotation: "+=125",
            y: "+=250%",
            x: "-=210%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-5')
        .to("#panel5-dec2", 16.66, {scale: "1.1", ease: Linear.easeNone}, 'section-5')
        .to("#panel5-dec1", 16.66, {scale: "0.95", ease: Linear.easeNone}, 'section-5')
        .to("#frog-ico", 16.66, {rotation: "-=25", y: "-=10%", x: "-30%", ease: Linear.easeNone}, 'section-5')
        // panel-6
        .to(".panel__title-decor--green", 16.66 + 5.55, {
            x: "+=35%",
            y: "-=15%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-6')
        .to(".panel-6__info", 16.66, {x: "-=8%", ease: Linear.easeNone}, 'section-6')
        .to(".nav--white", 16.66, {x: "-=3%", ease: Linear.easeNone}, 'section-6')
        .to("#parole", 16.66 + 5.55, {y: "-=10%", x: "-=10%", ease: Linear.easeNone, delay: -5.55}, 'section-6')
        .to("#parole-b", 16.66 + 5.55, {
            rotation: "-=5",
            y: "+=10%",
            x: "-=30%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-6')
        .to("#baiser", 16.66 + 5.55, {
            rotation: "+=5",
            y: "-=10%",
            x: "+=5%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-6')
        .to("#baiser-b", 16.66 + 5.55, {
            rotation: "-=5",
            y: "+=20%",
            x: "-=30%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-6')
        .to("#degavu-1", 16.66 + 5.55, {
            rotation: "-=10",
            y: "+=4%",
            x: "-=34%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-6')
        .to("#degavu-2", 16.66 + 5.55, {
            rotation: "+=10",
            y: "-=3%",
            x: "-=34%",
            ease: Linear.easeNone,
            delay: -5.55
        }, 'section-6')
        .to("#force", 16.66 + 5.55, {y: "-=5%", x: "-=24%", ease: Linear.easeNone, delay: -5.55}, 'section-6')
        .to("#force-b", 16.66 + 5.55, {y: "+=5%", x: "-=30%", ease: Linear.easeNone, delay: -5.55}, 'section-6')

        // panel-7
        .to("#panel7-baget", 11.11, {
            rotation: "+=10",
            y: "+=5%",
            x: "+=14%",
            ease: Linear.easeNone,
            delay: 5.55
        }, 'section-6')
        .to("#panel7-dec1", 11.11, {scale: "1.1", ease: Linear.easeNone, delay: 5.55}, 'section-6')
        .to("#panel7-dec2", 11.11, {scale: "1.1", ease: Linear.easeNone, delay: 5.55}, 'section-6')
        .to("#panel7-listik", 11.11, {
            rotation: "+=30",
            y: "+=180%",
            x: "-=50%",
            ease: Linear.easeNone,
            delay: 5.55
        }, 'section-6')
        .to("#panel7-listik-2", 11.11, {
            rotation: "+=30",
            y: "+=120%",
            x: "-=80%",
            ease: Linear.easeNone,
            delay: 5.55
        }, 'section-6')
        .to("#panel7-listik-3", 11.11, {
            rotation: "+=30",
            y: "+=120%",
            x: "+=50%",
            ease: Linear.easeNone,
            delay: 5.55
        }, 'section-6')
        .to("#panel7-listik-4", 11.11, {
            rotation: "-=10",
            y: "+=60%",
            x: "+=30%",
            ease: Linear.easeNone,
            delay: 5.55
        }, 'section-6')
        .to("#panel7-listik-5", 11.11, {
            rotation: "-=20",
            y: "+=250%",
            x: "-=130%",
            ease: Linear.easeNone,
            delay: 5.55
        }, 'section-6')
        .to("#panel7-cake", 11.11, {
            rotation: "+=30",
            y: "+=150%",
            x: "-=30%",
            ease: Linear.easeNone,
            delay: 5.55
        }, 'section-6')
        .to("#panel7-strawberry", 11.11, {
            rotation: "+=80",
            y: "+=100%",
            x: "-=30%",
            ease: Linear.easeNone,
            delay: 5.55
        }, 'section-6')
        .to("#panel7-truffle", 11.11, {
            rotation: "-=40",
            y: "+=160%",
            x: "+=45%",
            ease: Linear.easeNone,
            delay: 5.55
        }, 'section-6')
        .to("#panel7-flower", 11.11, {
            rotation: "+=20",
            y: "+=30%",
            x: "+=15%",
            ease: Linear.easeNone,
            delay: 5.55
        }, 'section-6')
        .to(boy, 100, {
            bezier: {
                values: path1,
                type: "cubic",
                autoRotate: true
            },
            ease: Power0.easeNone,
            transformOrigin: "50% 100%",
        }, 'start')

        // .to(".footer-modal-overlay", 0.1, {css: {className: '+=vis'}}, 'section-7')
        .add('end');
    ;


    var scene = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: boyDuration
    })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addTo(controller);


    var tween = TweenMax.to(obj, 0.5,
        {
            curImg: images.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            repeat: 50,									// repeat 3 times
            immediateRender: true,			// load first image automatically
            // ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
                $(boy).attr("href", images[obj.curImg]); // set the image source
            }
        }
    );


    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        duration: "3000%",
        triggerHook: "onLeave"
    })
        .setTween(tween)
        .addTo(controller);


    //Навигация по слайдам
    $(document).on("click", ".dots a[href^='#']", function (e) {
        e.preventDefault();

        var distance = 0;
        var duration = 0;
        var id = $(this).attr("href");
        var clickedDot = $(this).index();
        var activeDot = $(".dots a.active").index();
        var indentsDots = Math.abs(activeDot - clickedDot);

        if (indentsDots == 1) {
            duration = 3;
        } else if (indentsDots == 2) {
            duration = 5;
        } else if (indentsDots == 3) {
            duration = 7;
        } else if (indentsDots == 4) {
            duration = 9;
        } else if (indentsDots == 5) {
            duration = 10;
        } else if (indentsDots == 6) {
            duration = 12;
        }


        if (id == '#section-1') {
            distance = 300;
        } else if (id == '#section-2') {
            distance = ($(document).height() - $(window).height()) / 6;
        } else if (id == '#section-3') {
            distance = ($(document).height() - $(window).height()) / 2.9;
        } else if (id == '#section-4') {
            distance = ($(document).height() - $(window).height()) / 2;
        } else if (id == '#section-5') {
            distance = ($(document).height() - $(window).height()) / 1.5;
        } else if (id == '#section-6') {
            distance = ($(document).height() - $(window).height()) / 1.19;
        } else if (id == '#section-7') {
            distance = ($(document).height() - $(window).height() - 0);
        }

        controller.scrollTo(function (target) {
            TweenMax.to(window, duration, {
                scrollTo: {
                    y: target,
                    autoKill: true
                },
                ease: Power0.easeNone
            });
        });

        if ($(id).length > 0) {
            controller.scrollTo(distance);
            // if (window.history && window.history.pushState) {
            //     history.pushState("", document.title, id);
            // }
        }
    });

    $(".nav__r").on("click", function (e) {
        $('.dots a.active').next().click();
    });
    $(".nav__l").on("click", function (e) {
        $('.dots a.active').prev().click();
    });

    $(".burger").on("click", function (e) {
        e.preventDefault();
        $('.dots a:last-of-type').click();
    });


    $(window).on('load', function () {
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: 300
            }, 0);
        }, 0);
    });


    var smoothScroll = wipeAnimation;

}


//Внутренняя страница
if ($('.inner-page').length) {


    var heightWin = $(document).outerHeight(true);
    $(window).on('resize', function () {
        heightWin = $(document).outerHeight(true);
    });


    if ($('.inner-page--zhenski').length) {

        var innerPageTween = new TimelineMax({paused: true})
            .add('start')


            .to("h1 .panel__title-pink", heightWin * 0.25, {
                rotation: "+=3",
                x: "-=0%",
                y: "+=15%",
                ease: Linear.easeNone
            }, 'start')
            .to("h1 .panel__title-orange", heightWin * 0.25, {
                rotation: "-=3",
                x: "+=5%",
                y: "-=10%",
                ease: Linear.easeNone
            }, 'start')


            .to("#zhenski-decor", heightWin * 0.5, {scale: "1.05", ease: Linear.easeNone}, 'start')
            .to("#listik-1", heightWin * 1.5, {
                rotation: "-=125%",
                y: "+=115%",
                x: "+=115%",
                ease: Linear.easeNone
            }, 'start')
            .to("#listik-2", heightWin * 1.5, {
                rotation: "-=150%",
                y: "+=120%",
                x: "+=415%",
                ease: Linear.easeNone
            }, 'start')
            .to("#listik-3", heightWin * 1.5, {
                rotation: "+=75%",
                y: "-=120%",
                x: "+=215%",
                ease: Linear.easeNone,
            }, 'start')
            .to("#listik-4", heightWin * 1.5, {
                rotation: "-=150%",
                y: "-=120%",
                x: "+=150%",
                ease: Linear.easeNone,
            }, 'start')
            .to("#listik-5", heightWin * 1.5, {
                rotation: "+=175%",
                y: "-=220%",
                x: "+=315%",
                ease: Linear.easeNone,
            }, 'start')
            .to("#listik-6", heightWin * 1.5, {
                rotation: "+=90%",
                y: "-=120%",
                x: "+=200%",
                ease: Linear.easeNone,
            }, 'start')
            .to("#listik-7", heightWin * 1.5, {
                rotation: "-=175%",
                y: "-=120%",
                x: "+=150%",
                ease: Linear.easeNone,
            }, 'start')
            .to("#listik-8", heightWin * 1.5, {
                rotation: "+=125%",
                y: "-=100%",
                x: "+=250%",
                ease: Linear.easeNone,
            }, 'start')
            .to("#zhenski-4", heightWin, {
                x: "+=5%",
                y: "+=4%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#zhenski-text-4", heightWin, {
                x: "-=4%",
                y: "-=4%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#zhenski-decor-5", heightWin, {
                x: "+=8%",
                y: "-=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#soap", heightWin, {
                rotation: "-=15%",
                x: "-=10%",
                y: "-=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#zhenski-decor-4", heightWin, {
                scale: "1.05",
                y: "-=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')


            .to("#zhenski-1", heightWin * 0.5, {x: "+=2%", y: "+=3%", ease: Linear.easeNone}, 'start')
            .to("#zhenski-text-1", heightWin * 0.5, {x: "-=2%", y: "-=4%", ease: Linear.easeNone}, 'start')
            .to("#apple", heightWin * 0.5, {rotation: "-=25%", x: "-=50%", y: "-=100%", ease: Linear.easeNone}, 'start')
            .to("#pomade", heightWin * 0.5, {rotation: "+=15%", x: "+=50%", y: "=100%", ease: Linear.easeNone}, 'start')

            .to("#zhenski-2", heightWin * 0.5, {
                x: "-=2%",
                y: "+=4%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            .to("#zhenski-text-2", heightWin * 0.5, {
                x: "+=3%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            // .to("#perfume-bg", heightWin*0.5, {x: "-=13%", y: "+=10%", ease: Linear.easeNone, delay: heightWin*0.05}, 'start')
            .to("#bouquet", heightWin * 0.8, {
                rotation: "-=15%",
                x: "-=23%",
                y: "-=25%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            .to("#perfume", heightWin * 0.8, {
                rotation: "-=20%",
                x: "-=25%",
                y: "+=30%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')

            .to("#zhenski-3", heightWin * 0.9, {
                x: "-=5%",
                y: "+=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.23
            }, 'start')
            .to("#zhenski-text-3", heightWin * 0.9, {
                x: "+=5%",
                y: "+=8%",
                ease: Linear.easeNone,
                delay: heightWin * 0.23
            }, 'start')
            .to("#chernoye-platye-bg", heightWin * 0.9, {
                x: "+=5%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.23
            }, 'start')

            .to("#like-a-man", heightWin, {
                x: "-=5%",
                y: "-=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#road-for-woman", heightWin, {
                x: "+=7%",
                y: "+=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#road-france-woman", heightWin, {
                x: "+=7%",
                y: "+=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#frantsuzskaya-kukhnya-man", heightWin, {
                x: "-=5%",
                y: "+=12%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#yazyk-eto", heightWin, {
                x: "+=5%",
                y: "-=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')

            .to(".inner-page ", heightWin * 1.5, {}, 'start')
        ;
    } else if ($('.inner-page--muzhski').length) {

        var innerPageTween = new TimelineMax({paused: true})
            .add('start')
            .to("h1 .panel__title-blue", heightWin * 0.5, {rotation: "-=2", y: "-=25%", ease: Linear.easeNone}, 'start')

            .to("#po-muzhski-decor", heightWin * 0.5, {x: "+=1%", scale: "1.03", ease: Linear.easeNone}, 'start')

            .to("#po-muzhski-1", heightWin * 0.5, {x: "+=2%", y: "+=3%", ease: Linear.easeNone}, 'start')
            .to("#po-muzhski-text-1", heightWin * 0.5, {x: "-=2%", y: "-=4%", ease: Linear.easeNone}, 'start')
            .to("#nomernyye", heightWin * 0.5, {
                rotation: "-=10",
                x: "-=15%",
                y: "-=25%",
                ease: Linear.easeNone
            }, 'start')
            .to("#po-muzhski-car", heightWin * 0.5, {x: "+=15%", ease: Linear.easeNone}, 'start')

            .to("#po-muzhski-2", heightWin * 0.5, {
                x: "-=2%",
                y: "+=4%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            .to("#po-muzhski-text-2", heightWin * 0.5, {
                x: "+=3%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            .to("#circle", heightWin * 0.5, {
                x: "+=15%",
                y: "-=45%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            .to("#pentax", heightWin * 0.5, {
                rotation: "+=50",
                x: "-=30%",
                y: "-=45%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')

            .to("#po-muzhski-3", heightWin * 0.8, {
                x: "+=5%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.2
            }, 'start')
            .to("#po-muzhski-text-3", heightWin * 0.8, {
                x: "-=5%",
                y: "-=2%",
                ease: Linear.easeNone,
                delay: heightWin * 0.2
            }, 'start')
            .to("#cup", heightWin, {
                rotation: "-=20",
                x: "-=15%",
                y: "-=35%",
                ease: Linear.easeNone,
                delay: heightWin * 0.2
            }, 'start')
            .to("#crystal", heightWin * 0.8, {
                rotation: "-=120",
                x: "+=65%",
                y: "-=60%",
                ease: Linear.easeNone,
                delay: heightWin * 0.2
            }, 'start')
            .to("#po-muzhski-decor-5", heightWin, {
                rotation: "+=5",
                x: "-=5%",
                y: "-=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.2
            }, 'start')

            .to("#blurry", heightWin * 0.6, {
                rotation: "+=120",
                x: "-=30%",
                y: "-=50%",
                ease: Linear.easeNone,
                delay: heightWin * 0.2
            }, 'start')
            .to("#listik-1", heightWin, {
                rotation: "+=175%",
                y: "-=320%",
                x: "-=315%",
                ease: Linear.easeNone,
                delay: heightWin * 0.2
            }, 'start')

            .to("#listik-2", heightWin, {
                rotation: "+=120%",
                y: "-=250%",
                x: "-=400%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#crystal-blurry", heightWin, {
                rotation: "-=120%",
                y: "-=100%",
                x: "+=50%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')

            .to("#po-muzhski-4", heightWin, {
                x: "+=3%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#po-muzhski-text-4", heightWin, {
                x: "-=3%",
                y: "-=2%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')


            .to("#like-a-man", heightWin, {
                x: "-=5%",
                y: "-=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#road-for-woman", heightWin, {
                x: "+=7%",
                y: "+=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#road-france-woman", heightWin, {
                x: "+=7%",
                y: "+=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#frantsuzskaya-kukhnya-man", heightWin, {
                x: "-=5%",
                y: "+=12%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#yazyk-eto", heightWin, {
                x: "+=5%",
                y: "-=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')

            .to(".inner-page ", heightWin * 1.5, {}, 'start')
        ;

    } else if ($('.inner-page--dlya-zhenshchin').length) {

        var innerPageTween = new TimelineMax({paused: true})
            .add('start')
            .to("h1 .panel__title-decor--pink", heightWin * 0.5, {y: "-=55%", ease: Linear.easeNone}, 'start')

            .to("#dlya-zhenshchin-decor", heightWin * 0.5, {x: "+=5%", scale: "1.03", ease: Linear.easeNone}, 'start')
            .to("#dlya-zhenshchin-decor-2", heightWin * 0.5, {y: "-=5%", scale: "1.03", ease: Linear.easeNone}, 'start')
            .to("#petal", heightWin * 1.5, {
                rotation: "-=90%",
                y: "+=200%",
                x: "+=100%",
                ease: Linear.easeNone
            }, 'start')
            .to("#petal-2", heightWin * 1.5, {
                rotation: "+=125%",
                y: "+=150%",
                x: "+=150%",
                ease: Linear.easeNone
            }, 'start')
            .to("#petal-3", heightWin * 1.5, {
                rotation: "-=125%",
                y: "+=150%",
                x: "+=150%",
                ease: Linear.easeNone
            }, 'start')
            .to("#petal-vector", heightWin * 1.5, {
                rotation: "-=125%",
                y: "+=50%",
                x: "+=50%",
                ease: Linear.easeNone
            }, 'start')
            .to("#dlya-zhenshchin-figura", heightWin * 1.5, {
                rotation: "+=15%",
                y: "+=50%",
                x: "+=90%",
                ease: Linear.easeNone
            }, 'start')
            .to("#dlya-zhenshchin-figura-3", heightWin * 1.5, {
                rotation: "+=20%",
                y: "-=50%",
                x: "+=20%",
                ease: Linear.easeNone
            }, 'start')


            .to("#dlya-zhenshchin-1", heightWin * 0.5, {x: "+=2%", y: "+=3%", ease: Linear.easeNone}, 'start')
            .to("#dlya-zhenshchin-text-1", heightWin * 0.5, {x: "-=2%", y: "-=4%", ease: Linear.easeNone}, 'start')
            .to("#croissant", heightWin * 0.5, {
                rotation: "+=10",
                x: "+=5%",
                y: "-=15%",
                ease: Linear.easeNone
            }, 'start')
            .to("#dlya-zhenshchin-decor-3", heightWin * 0.5, {
                rotation: "+=5",
                x: "+=3%",
                y: "-=10%",
                ease: Linear.easeNone
            }, 'start')


            .to("#dlya-zhenshchin-2", heightWin * 0.9, {
                x: "-=3%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            .to("#dlya-zhenshchin-text-2", heightWin * 0.9, {
                x: "+=5%",
                y: "+=6%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            .to("#flower", heightWin * 0.9, {
                rotation: "+=15",
                x: "-=10%",
                y: "-=16%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')

            .to("#dlya-zhenshchin-3", heightWin, {
                x: "+=5%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#dlya-zhenshchin-text-3", heightWin, {
                x: "-=5%",
                y: "-=2%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#burger", heightWin, {
                rotation: "-=20",
                x: "+=15%",
                y: "-=25%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#dlya-zhenshchin-decor-6", heightWin, {
                rotation: "-=15",
                x: "+=5%",
                y: "-=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#cakes", heightWin, {
                rotation: "-=15",
                x: "+=5%",
                y: "-=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#dlya-zhenshchin-figura-2", heightWin, {
                rotation: "+=10",
                x: "-=3%",
                y: "-=8%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#dlya-zhenshchin-4", heightWin, {
                x: "+=5%",
                y: "+=4%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#dlya-zhenshchin-text-4", heightWin, {
                x: "-=4%",
                y: "-=4%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#oyster", heightWin, {
                rotation: "-=5",
                x: "-=5%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#lemon", heightWin, {
                rotation: "-=10",
                x: "-=10%",
                y: "-=25%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')

            .to("#like-a-man", heightWin, {
                x: "-=5%",
                y: "-=20%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#road-for-woman", heightWin, {
                x: "+=7%",
                y: "+=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#road-france-woman", heightWin, {
                x: "+=7%",
                y: "+=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#frantsuzskaya-kukhnya-man", heightWin, {
                x: "-=5%",
                y: "+=12%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#yazyk-eto", heightWin, {
                x: "+=5%",
                y: "-=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')


            .to(".inner-page ", heightWin * 1.5, {}, 'start')
        ;

    } else if ($('.inner-page--yazyk-eto').length) {

        var innerPageTween = new TimelineMax({paused: true})
            .add('start')
            .to("h1 .panel__title-decor--green", heightWin * 0.5, {y: "-=55%", ease: Linear.easeNone}, 'start')

            .to("#yazyk-eto-decor", heightWin * 0.5, {scale: "1.1", ease: Linear.easeNone}, 'start')

            .to("#petal", heightWin * 1.5, {rotation: "-=90%", y: "+=200%", x: "+=14%", ease: Linear.easeNone}, 'start')
            .to("#listik", heightWin * 1.5, {
                rotation: "+=125%",
                y: "+=150%",
                x: "-=15%",
                ease: Linear.easeNone
            }, 'start')
            .to("#listik-3", heightWin * 1.5, {
                rotation: "+=60%",
                y: "+=250%",
                x: "-=35%",
                ease: Linear.easeNone
            }, 'start')
            .to("#listik-2", heightWin * 1.5, {
                rotation: "-=125%",
                y: "+=150%",
                x: "+=15%",
                ease: Linear.easeNone
            }, 'start')


            .to("#yazyk-eto-1", heightWin * 0.5, {x: "+=2%", y: "+=3%", ease: Linear.easeNone}, 'start')
            .to("#yazyk-eto-text-1", heightWin * 0.5, {x: "-=2%", y: "-=4%", ease: Linear.easeNone}, 'start')
            .to("#parole-big", heightWin * 0.5, {
                rotation: "-=10",
                x: "-=15%",
                y: "-=25%",
                ease: Linear.easeNone
            }, 'start')
            .to("#yazyk-eto-figure-1", heightWin * 0.5, {
                rotation: "+=10",
                x: "+=15%",
                y: "-=35%",
                ease: Linear.easeNone
            }, 'start')
            .to("#yazyk-eto-figure-2", heightWin * 0.5, {
                rotation: "-=15",
                x: "-=15%",
                y: "-=40%",
                ease: Linear.easeNone
            }, 'start')
            .to("#yazyk-eto-figure-3", heightWin * 0.5, {
                rotation: "+=40",
                x: "-=15%",
                y: "-=40%",
                ease: Linear.easeNone
            }, 'start')
            .to("#yazyk-eto-figure-4", heightWin * 0.5, {
                rotation: "-=40",
                x: "+=15%",
                y: "-=40%",
                ease: Linear.easeNone
            }, 'start')
            .to("#numbers", heightWin * 0.5, {rotation: "+=5", x: "-=5%", y: "-=0%", ease: Linear.easeNone}, 'start')


            .to("#yazyk-eto-2", heightWin * 0.9, {
                x: "-=3%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            .to("#yazyk-eto-text-2", heightWin * 0.9, {
                x: "+=5%",
                y: "+=6%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            .to("#zefirka", heightWin * 0.9, {
                rotation: "+=25",
                x: "-=15%",
                y: "-=36%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            .to("#zefirka-2", heightWin * 0.9, {
                rotation: "+=20",
                x: "-=5%",
                y: "-=16%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            .to("#yazyk-eto-decor-3", heightWin * 0.9, {
                x: "-=3%",
                y: "-=3%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')

            .to("#yazyk-eto-3", heightWin, {
                x: "+=5%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.25
            }, 'start')
            .to("#yazyk-eto-text-3", heightWin, {
                x: "-=5%",
                y: "-=2%",
                ease: Linear.easeNone,
                delay: heightWin * 0.25
            }, 'start')
            .to("#cat-1", heightWin, {
                rotation: "-=20",
                x: "+=10%",
                y: "-=25%",
                ease: Linear.easeNone,
                delay: heightWin * 0.25
            }, 'start')
            .to("#cat-2", heightWin, {
                rotation: "+=15",
                x: "+=10%",
                y: "-=25%",
                ease: Linear.easeNone,
                delay: heightWin * 0.25
            }, 'start')


            .to("#yazyk-eto-4", heightWin, {
                x: "+=5%",
                y: "+=8%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#yazyk-eto-text-4", heightWin, {
                x: "-=4%",
                y: "-=4%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#dish", heightWin, {
                rotation: "+=20",
                x: "-=3%",
                y: "-=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.6
            }, 'start')
            .to("#clouds", heightWin, {x: "-=5%", y: "-=8%", ease: Linear.easeNone, delay: heightWin * 0.5}, 'start')

            .to("#yazyk-eto-5", heightWin * 0.7, {
                x: "+=5%",
                y: "+=8%",
                ease: Linear.easeNone,
                delay: heightWin * 0.6
            }, 'start')
            .to("#yazyk-eto-text-5", heightWin * 0.7, {
                x: "-=6%",
                y: "-=4%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#yazyk-eto-decor-4", heightWin * 0.7, {
                x: "+=1%",
                y: "-=1%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#yazyk-eto-6", heightWin * 0.7, {
                x: "-=7%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#yazyk-eto-text-6", heightWin * 0.7, {
                x: "+=8%",
                y: "-=15%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#like", heightWin * 0.7, {
                rotation: "+=20",
                x: "-=4%",
                y: "-=20%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#like-b", heightWin * 0.7, {
                rotation: "-=5",
                x: "+=3%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#yazyk-eto-decor-5", heightWin * 0.7, {
                rotation: "+=8",
                x: "+=5%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#yazyk-eto-7", heightWin * 0.7, {
                x: "-=5%",
                y: "-=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.8
            }, 'start')
            .to("#yazyk-eto-text-7", heightWin * 0.7, {
                x: "-=6%",
                y: "+=20%",
                ease: Linear.easeNone,
                delay: heightWin * 0.8
            }, 'start')
            .to("#shower", heightWin * 0.7, {
                x: "+=6%",
                y: "-=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.8
            }, 'start')
            .to("#yazyk-eto-8", heightWin * 0.8, {
                x: "+=5%",
                y: "-=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.85
            }, 'start')
            .to("#yazyk-eto-text-8", heightWin * 0.8, {
                x: "+=6%",
                y: "+=15%",
                ease: Linear.easeNone,
                delay: heightWin * 0.85
            }, 'start')
            .to("#force-shadow", heightWin * 0.8, {
                rotation: "+=10",
                x: "+=3%",
                y: "-=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.85
            }, 'start')

            .to("#like-a-man", heightWin, {
                x: "-=5%",
                y: "-=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#road-for-woman", heightWin, {
                x: "+=7%",
                y: "+=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#road-france-woman", heightWin, {
                x: "+=7%",
                y: "+=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#frantsuzskaya-kukhnya-man", heightWin, {
                x: "-=5%",
                y: "+=12%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#yazyk-eto", heightWin, {
                x: "+=5%",
                y: "-=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')


            .to(".inner-page ", heightWin * 1.5, {}, 'start')
        ;

    } else if ($('.inner-page--dlya-muzhchin').length) {

        var innerPageTween = new TimelineMax({paused: true})
            .add('start')
            .to("h1 .panel__title-decor--orange", heightWin * 0.5, {y: "-=55%", ease: Linear.easeNone}, 'start')

            .to("#dlya-muzhchin-decor", heightWin * 0.5, {scale: "1.05", ease: Linear.easeNone}, 'start')
            .to("#dlya-muzhchin-decor-2", heightWin * 0.5, {x: "-=3%", ease: Linear.easeNone}, 'start')

            .to("#garnet", heightWin * 1.5, {
                rotation: "-=280%",
                y: "+=500%",
                x: "-=50%",
                ease: Linear.easeNone
            }, 'start')
            .to("#garnet-2", heightWin * 1.5, {
                rotation: "+=250%",
                y: "+=400%",
                x: "+=154%",
                ease: Linear.easeNone
            }, 'start')
            .to("#cinnamon", heightWin * 1.5, {
                rotation: "+=300%",
                y: "+=700%",
                x: "+=45%",
                ease: Linear.easeNone
            }, 'start')
            .to("#cinnamon-2", heightWin * 1.5, {
                rotation: "+=250%",
                y: "+=450%",
                x: "-=90%",
                ease: Linear.easeNone
            }, 'start')
            .to("#nut", heightWin * 1.5, {rotation: "+=90%", y: "+=250%", x: "+=95%", ease: Linear.easeNone}, 'start')
            .to("#nut-blur", heightWin * 1.5, {
                rotation: "-=125%",
                y: "+=150%",
                x: "+=15%",
                ease: Linear.easeNone
            }, 'start')

            .to("#dlya-muzhchin-1", heightWin * 0.5, {x: "+=2%", y: "+=3%", ease: Linear.easeNone}, 'start')
            .to("#dlya-muzhchin-text-1", heightWin * 0.5, {x: "-=2%", y: "-=4%", ease: Linear.easeNone}, 'start')
            .to("#dish-2", heightWin * 0.5, {rotation: "-=10", x: "-=15%", y: "-=25%", ease: Linear.easeNone}, 'start')


            .to("#dlya-muzhchin-2", heightWin * 0.9, {
                x: "-=3%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            .to("#dlya-muzhchin-text-2", heightWin * 0.9, {
                x: "+=5%",
                y: "+=6%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')
            .to("#baget", heightWin * 0.9, {
                rotation: "-=20",
                x: "-=5%",
                y: "-=16%",
                ease: Linear.easeNone,
                delay: heightWin * 0.05
            }, 'start')


            .to("#dlya-muzhchin-3", heightWin, {
                x: "+=5%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#dlya-muzhchin-text-3", heightWin, {
                x: "-=5%",
                y: "-=2%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#truffle", heightWin, {
                rotation: "-=20",
                x: "+=10%",
                y: "-=45%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#truffle-2", heightWin, {
                rotation: "+=45",
                x: "-=25%",
                y: "-=35%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#truffle-bg", heightWin, {
                rotation: "+=35",
                x: "-=15%",
                y: "+=15%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#xry", heightWin, {
                rotation: "+=25",
                x: "-=8%",
                y: "-=35%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')


            .to("#dlya-muzhchin-4", heightWin, {
                x: "+=3%",
                y: "+=5%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#dlya-muzhchin-text-4", heightWin, {
                x: "-=3%",
                y: "-=2%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#dish-3", heightWin, {
                rotation: "-=20",
                x: "-=3%",
                y: "-=15%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')
            .to("#dlya-muzhchin-decor-6", heightWin, {
                rotation: "-=8",
                x: "-=3%",
                y: "-=3%",
                ease: Linear.easeNone,
                delay: heightWin * 0.7
            }, 'start')


            .to("#like-a-man", heightWin, {
                x: "-=5%",
                y: "-=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#road-for-woman", heightWin, {
                x: "+=7%",
                y: "+=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#road-france-woman", heightWin, {
                x: "+=7%",
                y: "+=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#frantsuzskaya-kukhnya-man", heightWin, {
                x: "-=5%",
                y: "+=12%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')
            .to("#yazyk-eto", heightWin, {
                x: "+=5%",
                y: "-=10%",
                ease: Linear.easeNone,
                delay: heightWin * 0.5
            }, 'start')


            .to(".inner-page ", heightWin * 1.5, {}, 'start')
        ;

    }


    var scene = new ScrollMagic.Scene({
        triggerElement: ".inner-page",
        duration: heightWin,
        triggerHook: "onLeave"
    })
        .setTween(innerPageTween)

        .addTo(controller);

    $(window).on('load', function () {
        // $('html, body').animate({
        //     scrollTop: 0
        // }, 1000);
    });


    var smoothScroll = innerPageTween;


}

//Плавная прокрутка
var $window = $(window);
var scrollTop = $window.scrollTop();
var timeline = new TimelineMax({paused: true})
    .to(".box", 2, {
        x: $window.width() - $(".box").width()
    });
var proxyTween = TweenLite.to({}, 1, {paused: true});

TweenLite.defaultEase = Linear.easeNone;

$window.on("scroll", function () {
    var documentHeight = $(document).height();
    var windowHeight = $window.height();
    scrollTop = $(window).scrollTop();
    var scrollPercent = Math.max(
        scrollTop / (documentHeight - windowHeight),
        0
    );
    proxyTween.progress(scrollPercent).pause();
});

TweenLite.ticker.addEventListener("tick", function () {
    var progress = smoothScroll.progress();
    // ease can be anything from 0.5 to 0.01
    progress += (proxyTween.progress() - progress) * 0.05;
    smoothScroll.progress(progress);
});


$(window).on('load', function () {
    $('body').addClass('vis');

    new SimpleBar($('.footer-modal')[0], {
        autoHide: false
    });
});

$('.footer-modal__close').on('click', function (e) {
    e.preventDefault();
    $('.footer-modal-overlay').removeClass('vis');
});
$('.button--footer').on('click', function (e) {
    e.preventDefault();
    $('.footer-modal-overlay').addClass('vis');
});

$(document).mouseup(function (e){
    var div = $(".footer-modal-overlay .footer-modal");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.parents('.footer-modal-overlay').removeClass('vis');
    }
});


//Старый код - футер
$(document).ready(function () {


    if ($.cookie('SESScookie-compliance-user-response') != 1) {
        $('.popup-cookie-notice-wrap').addClass('vis');
    }


    $('.popup-cookie--close').on('click', function (e) {
        e.preventDefault();
        $('.popup-cookie-notice-wrap').removeClass('vis');
        $.cookie('SESScookie-compliance-user-response', 1, {expires: 10, path: '/'});
    })


    if ($(window).width() <= 1024) {

        $('.footerMenuMin-processed').click(function () {
            $(this).parent().toggleClass('active');
        });
        $('.menuItemsAll-processed').click(function (e) {
            e.preventDefault();
            $(this).addClass('active')
        })
        $('.header .primary > ul > li .dropdown .prev.tablet-only').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).closest('.menuItemsAll-processed').removeClass('active');
        })

    }
    $('.primary-nav-toggle').click(function () {
        $('.primary').toggleClass('active');
    });
});

