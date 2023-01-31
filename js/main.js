
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight,
    menufont = y / 17;

$(function () {

    var emratMbiemrat = ["Drita Llolla", "Latif Haxhibrahimi", "Learta Hollaj", "Silvija Marnikovic", "Luljeta Sefa", "Flutura Mustafa", "Ilir Harasani"];
    var emrat = ["drita", "latif", "learta", "silvija", "luljeta", "flutura", "ilir"];

    var pershkrimet = ["spiritus movens of iACT group, derailed from her career in pharmacy, to pursue her civil engagement passion. A jazz fan, Drita meticulously cares about details that make a difference the way great jazz performance subtly influences our senses. One of Drita’s favourite quotes is ‘No matter what anybody tells you, words and ideas can change the world.’",
        "is a member of the International cooperation office at the Municipality of Ulqin/Ulcinj. Besides his career oriented goals towards hospitality industry, Latif is known for extensive experience with civil society organizations and international projects. He is a dedicated volunteer and a fierce fighter for saving the environment, especially the protection of marine fauna. Latif is also known as the organizational guru of iACT.",
        "dedicated to studying and analyzing development policies, is for years now an active member of civil society organizations. Besides her work in Kosovo, Learta wants to give back to her community through iAct group. Energetic and diverse in her talents, Learta is an inspiring young leader committed to setting an example . ",
        "teacher of English Language in elementary school, apart from her love for inspiring young people through education, is one of the pillars of iAct team. She is strong advocate of permanent education and serves as a guide to her students and peers. Silvija genuinely believes in people! ",
        "has dedicated herself to obtaining M.A. in political sciences and to engage in social change with iACT team. Luljeta believes women should have more voice in the society and wants to stand for what is right.",
        "currently pursuing a Law Degree, known as Dulcinea from a local play, owes much to her passion for poetry and acting. Her goal as civil activist is to reinvent herself and find new ways to grow as a person thus contributing to her surroundings. She has been a part of many civil sector activities before joining the iACT team.",
        "joined the Municipality of Ulqin/Ulcinj after attending Law School as a public defender. He also is an active member of iAct team, willing to challenge the status quo. Ilir attributes more to doing than saying."];

    $("#main, #program, #team, #poster, #volunteers, #sponsors, #contact").height(y);
    $(".slide_viewer, .directional_nav").height(0.9 * y);

    //cache the DOM
    var h = $("html, body"),
        svg = $(".menuIcon"),
        lines = $("svg>line"),
        line1 = $("svg>line:nth-child(1)"),
        line2 = $("svg>line:nth-child(2)"),
        line3 = $("svg>line:nth-child(3)"),
        sidemenu = $(".sidemenu"),
        topmenu = $(".topmenu"),
        sidemenua = $(".sidemenu>nav>span"),
        meny = $(".meny"),
        imazh = $(".imazh"),
        main = $("#main"),
        program = $("#program"),
        team = $("#team"),
        poster = $("#poster"),
        volunteers = $("#volunteers"),
        sponsors = $("#sponsors"),
        contact = $("#contact"),
        titulli = $('h1.tit'),
        theteam = $('.boldTeam h2'),
        teamname = $('.blockteam .name'),
        teamrole = $('.blockteam .role'),
        vl = $('.vl'),
        logored = $('.loading-page img'),
        cntr = $('.loading-page p, .loading-page h1, .loading-page hr'),
        blackload = $(".loading-page"),
        nightlink = $('.navzone nav a'),
        movies = $('.movies');

    loadImage();

    function loadImage() {
        var preload = new createjs.LoadQueue();
        preload.addEventListener("fileload", handleFileComplete);
        preload.loadFile("imazhe/cover/cover.png");
        var inter = setInterval(percent, 1000);
        function percent() {
            var c = Math.round(preload.progress * 100);
            $(".loading-page .counter h1").html(c + "%");
            $(".loading-page .counter hr").css("width", c + "%");
            if (c == 100) {
                clearInterval(inter);
                blackload.animate({ opacity: 0 }, 300, 'easeOutExpo', blackload.css({ display: 'none', height: '0' }));
            }
        }
    }
    function handleFileComplete(event) { }


    // menutë

    vendosLartesine();

    $(".sidemenu>nav>span>a").unbind("click").on("click", function () {
        var i = $(this).parent().index();
        h.scrollTop(i * y);
        mbyllmenu();
    });
    $(".topmenu>nav>a").unbind("click").on("click", function () {
        var i = $(this).index();
        clickMenu(i);
    });
    $(".logo").on("click", function () {
        h.scrollTop(0);
        mbyllmenu();
    });

    var check = -1;

    function hapMbyll() {
        if (check === -1) {
            hapmenu();
        } else {
            mbyllmenu();
        }
    }

    var clrs = ['white', 'white', 'black', 'white', 'black', 'white', '#eb0029'];
    function clickMenu(index) {
        cntr.css({ display: 'none' });
        logored.css({ display: 'inline-block', width: '70px' });
        blackload.css({ top: 0, bottom: '' });
        blackload.css({ display: 'flex', opacity: 1 });
        blackload.animate({ height: y, 'background-color': clrs[index] }, 300, 'easeOutExpo', shko);
        function shko() {
            h.scrollTop(index * y);
            mbyllmenu();
            blackload.css({ bottom: 0, top: '' });
        }
        blackload.delay(300).animate({ height: 0 }, 800, 'easeOutExpo', hiqimazh);
        function hiqimazh() {
            logored.css({ display: 'none' });
        }
    }

    function hapmenu() {
        TweenLite.to(sidemenu, 0.5, { opacity: 1 });
        TweenLite.to(sidemenua, 1, { opacity: 1 });
        sidemenu.css({ display: 'block' });
        sidemenua.css({ display: 'block' });
        line2.hide(300);
        TweenLite.to(line1, 0.3, { y: -2 });
        TweenLite.to(line1, 0.3, { rotation: 45, transformOrigin: "left 50%" });
        TweenLite.to(line3, 0.3, { y: 2 });
        TweenLite.to(line3, 0.3, { rotation: -45, transformOrigin: "left 50%" });
        check = 1;
    }

    function mbyllmenu() {
        TweenLite.to(sidemenu, 0.3, { opacity: 0, onComplete: onComplete });
        function onComplete() {
            sidemenu.delay(800).css({ display: 'none' });
            sidemenua.delay(800).css({ display: 'none' });
        }
        line2.show(300);
        TweenLite.to(line1, 0.5, { y: -1 });
        TweenLite.to(line1, 0.5, { rotation: 0, transformOrigin: "left 50%" });
        TweenLite.to(line3, 0.5, { y: 1 });
        TweenLite.to(line3, 0.5, { rotation: -0, transformOrigin: "left 50%" });

        check = -1;
    }

    function moveTheTeam() {
        teamname.delay(600).animate({ opacity: '1', left: '0px' }, 2000, 'easeOutExpo');
        teamrole.delay(900).animate({ opacity: '1', left: '0px' }, 2000, 'easeOutExpo');
        theteam.delay(400).animate({ top: '38%' }, 5000, 'easeOutExpo');
        vl.delay(600).animate({ top: '15%', height: '350px', opacity: 1 }, 10000, 'easeOutExpo');
    }

    meny.on("click", function () {
        hapMbyll();
    });

    $(window).scroll(function () {
        var s = $(window).scrollTop();
        var d = (y * 2 - 300);
        if (s > d) {
            moveTheTeam();
        }
    });

    // programme
    $('.slider').each(function () {
        var $this = $(this);
        var $group = $this.find('.slide_group');
        var $slides = $this.find('.slide');
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;

        function move(newIndex) {
            var animateLeft, slideLeft;

            // advance();

            if ($group.is(':animated') || currentIndex === newIndex) {
                return;
            }

            bulletArray[currentIndex].removeClass('active');
            bulletArray[newIndex].addClass('active');

            if (newIndex > currentIndex) {
                slideLeft = '100%';
                animateLeft = '-100%';
            } else {
                slideLeft = '-100%';
                animateLeft = '100%';
            }

            $slides.eq(newIndex).css({
                display: 'block',
                left: slideLeft
            });
            $group.animate({
                left: animateLeft
            }, function () {
                $slides.eq(currentIndex).css({
                    display: 'none'
                });
                $slides.eq(newIndex).css({
                    left: 0
                });
                $group.css({
                    left: 0
                });
                currentIndex = newIndex;
            });
        }

        // function advance() {
        //     clearTimeout(timeout);
        //     timeout = setTimeout(function () {
        //         if (currentIndex < ($slides.length - 1)) {
        //             move(currentIndex + 1);
        //         } else {
        //             move(0);
        //         }
        //     }, 50000);
        // }


        $('.next').on('click', function () {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
        });

        $('.prev').on('click', function () {
            if (currentIndex !== 0) {
                move(currentIndex - 1);
            } else {
                move(1);
            }
        });

        $.each($slides, function (index) {
            var $button = $('<a class="slide_btn">&bull;</a>');

            if (index === currentIndex) {
                $button.addClass('active');
            }
            $button.on('click', function () {
                move(index);
            }).appendTo('.slide_buttons');
            bulletArray.push($button);
        });

        // advance();
    });
    // contact 

    function adjust_textarea(h) {
        h.style.height = "50px";
        h.style.height = (h.scrollHeight) + "px";
    }
    var txta = $("textarea");
    function auto_grow(txta) {
        txta.style.height = "5px";
        txta.style.height = (txta.scrollHeight) + "px";
    }

});

function vendosLartesine() {

    $("#main, #program, #team, #poster, #volunteers, #sponsors, #contact").height(y);
    $(".slide_viewer, .directional_nav").height(0.9 * y);
    if (x < 1000) { menufont = y / 20; } else { menufont = y / 17; }
    $('.side a').css({ 'font-size': menufont + 'px' });
}

var resizeTimer;
$(window).resize(function () {
    w = window;
    d = document;
    e = d.documentElement;
    g = d.getElementsByTagName('body')[0];
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    y = w.innerHeight || e.clientHeight || g.clientHeight;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(vendosLartesine, 100);
});
