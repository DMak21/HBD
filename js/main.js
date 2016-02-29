var iden;
var mul1;
var add1;
var mul2;
var add2;

function ani(iden, mul1, add1, mul2, add2) {
    iden.style.top = Math.random() * mul1 + add1 + 'px';
    iden.style.left = Math.random() * mul2 + add2 + 'px';
    TweenMax.from(iden, 0.75, {
        opacity: 0,
        scale: 0,
        ease: Back.easeOut.config(1.7)
    });
}

function animate() {
document.getElementById("birthday-song").play();
    (function () {
        ani(document.getElementById("star1"), 160, 20, 164, 21);
        setTimeout(arguments.callee, 750);
    })();
    if (window.innerWidth >= 369) {
        (function () {
            ani(document.getElementById("star2"), 160, 20, 164, 205);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 553) {
        (function () {
            ani(document.getElementById("star3"), 160, 20, 164, 389);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 737) {
        (function () {
            ani(document.getElementById("star4"), 160, 20, 164, 573);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 921) {
        (function () {
            ani(document.getElementById("star5"), 160, 20, 164, 757);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 1105) {
        (function () {
            ani(document.getElementById("star6"), 160, 20, 164, 941);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 1289) {
        (function () {
            ani(document.getElementById("star7"), 160, 20, 164, 1125);
            setTimeout(arguments.callee, 750);
        })();
    }

    if (window.innerWidth >= 1473) {
        (function () {
            ani(document.getElementById("star8"), 160, 20, 164, 1309);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 1657) {
        (function () {
            ani(document.getElementById("star9"), 160, 20, 164, 1493);
            setTimeout(arguments.callee, 750);
        })();
    }

    if (window.innerWidth >= 1841) {
        (function () {
            ani(document.getElementById("star10"), 160, 20, 164, 1677);
            setTimeout(arguments.callee, 750);
        })();
    }
    (function () {
        ani(document.getElementById("star11"), 160, 200, 164, 21);
        setTimeout(arguments.callee, 750);
    })();
    if (window.innerWidth >= 369) {
        (function () {
            ani(document.getElementById("star12"), 160, 200, 164, 205);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 553) {
        (function () {
            ani(document.getElementById("star13"), 160, 200, 164, 389);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 737) {
        (function () {
            ani(document.getElementById("star14"), 160, 200, 164, 573);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 921) {
        (function () {
            ani(document.getElementById("star15"), 160, 200, 164, 757);
            setTimeout(arguments.callee, 750);
        })();
    }

    if (window.innerWidth >= 1105) {
        (function () {
            ani(document.getElementById("star16"), 160, 200, 164, 941);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 1289) {
        (function () {
            ani(document.getElementById("star17"), 160, 200, 164, 1125);
            setTimeout(arguments.callee, 750);
        })();
    }

    if (window.innerWidth >= 1473) {
        (function () {
            ani(document.getElementById("star18"), 160, 200, 164, 1309);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 1657) {
        (function () {
            ani(document.getElementById("star19"), 160, 200, 164, 1493);
            setTimeout(arguments.callee, 750);
        })();
    }

    if (window.innerWidth >= 1841) {
        (function () {
            ani(document.getElementById("star20"), 160, 200, 164, 1677);
            setTimeout(arguments.callee, 750);
        })();
    }
    (function () {
        ani(document.getElementById("star21"), 160, 380, 164, 21);
        setTimeout(arguments.callee, 750);
    })();
    if (window.innerWidth >= 369) {
        (function () {
            ani(document.getElementById("star22"), 160, 380, 164, 205);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 553) {
        (function () {
            ani(document.getElementById("star23"), 160, 380, 164, 389);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 737) {
        (function () {
            ani(document.getElementById("star24"), 160, 380, 164, 573);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 921) {
        (function () {
            ani(document.getElementById("star25"), 160, 380, 164, 757);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 1105) {
        (function () {
            ani(document.getElementById("star26"), 160, 380, 164, 941);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 1289) {
        (function () {
            ani(document.getElementById("star27"), 160, 380, 164, 1125);
            setTimeout(arguments.callee, 750);
        })();
    }

    if (window.innerWidth >= 1473) {
        (function () {
            ani(document.getElementById("star28"), 160, 380, 164, 1309);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerWidth >= 1657) {
        (function () {
            ani(document.getElementById("star29"), 160, 380, 164, 1493);
            setTimeout(arguments.callee, 750);
        })();
    }

    if (window.innerWidth >= 1841) {
        (function () {
            ani(document.getElementById("star30"), 160, 380, 164, 1677);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.innerHeight >= 720) {
        (function () {
            ani(document.getElementById("star31"), 160, 560, 164, 21);
            setTimeout(arguments.callee, 750);
        })();
        if (window.innerWidth >= 369) {
            (function () {
                ani(document.getElementById("star32"), 160, 560, 164, 205);
                setTimeout(arguments.callee, 750);
            })();
        }
        if (window.innerWidth >= 553) {
            (function () {
                ani(document.getElementById("star33"), 160, 560, 164, 389);
                setTimeout(arguments.callee, 750);
            })();
        }
        if (window.innerWidth >= 737) {
            (function () {
                ani(document.getElementById("star34"), 160, 560, 164, 573);
                setTimeout(arguments.callee, 750);
            })();
        }
        if (window.innerWidth >= 921) {
            (function () {
                ani(document.getElementById("star35"), 160, 560, 164, 757);
                setTimeout(arguments.callee, 750);
            })();
        }
        if (window.innerWidth >= 1105) {
            (function () {
                ani(document.getElementById("star36"), 160, 560, 164, 941);
                setTimeout(arguments.callee, 750);
            })();
        }
        if (window.innerWidth >= 1289) {
            (function () {
                ani(document.getElementById("star37"), 160, 560, 164, 1125);
                setTimeout(arguments.callee, 750);
            })();
        }

        if (window.innerWidth >= 1473) {
            (function () {
                ani(document.getElementById("star38"), 160, 560, 164, 1309);
                setTimeout(arguments.callee, 750);
            })();
        }
        if (window.innerWidth >= 1657) {
            (function () {
                ani(document.getElementById("star39"), 160, 560, 164, 1493);
                setTimeout(arguments.callee, 750);
            })();
        }

        if (window.innerWidth >= 1841) {
            (function () {
                ani(document.getElementById("star40"), 160, 560, 164, 1677);
                setTimeout(arguments.callee, 750);
            })();
        }
    }
    if (window.innerHeight >= 900) {
        (function () {
            ani(document.getElementById("star41"), 160, 740, 164, 21);
            setTimeout(arguments.callee, 750);
        })();
        if (window.innerWidth >= 369) {
            (function () {
                ani(document.getElementById("star42"), 160, 740, 164, 205);
                setTimeout(arguments.callee, 750);
            })();
        }
        if (window.innerWidth >= 553) {
            (function () {
                ani(document.getElementById("star43"), 160, 740, 164, 389);
                setTimeout(arguments.callee, 750);
            })();
        }
        if (window.innerWidth >= 737) {
            (function () {
                ani(document.getElementById("star44"), 160, 740, 164, 573);
                setTimeout(arguments.callee, 750);
            })();
        }
        if (window.innerWidth >= 921) {
            (function () {
                ani(document.getElementById("star45"), 160, 740, 164, 757);
                setTimeout(arguments.callee, 750);
            })();
        }
        if (window.innerWidth >= 1105) {
            (function () {
                ani(document.getElementById("star46"), 160, 740, 164, 941);
                setTimeout(arguments.callee, 750);
            })();
        }
        if (window.innerWidth >= 1289) {
            (function () {
                ani(document.getElementById("star47"), 160, 740, 164, 1125);
                setTimeout(arguments.callee, 750);
            })();
        }

        if (window.innerWidth >= 1473) {
            (function () {
                ani(document.getElementById("star48"), 160, 740, 164, 1309);
                setTimeout(arguments.callee, 750);
            })();
        }
        if (window.innerWidth >= 1657) {
            (function () {
                ani(document.getElementById("star49"), 160, 740, 164, 1493);
                setTimeout(arguments.callee, 750);
            })();
        }

        if (window.innerWidth >= 1841) {
            (function () {
                ani(document.getElementById("star50"), 160, 740, 164, 1677);
                setTimeout(arguments.callee, 750);
            })();
        }
    }
    TweenMax.to(document.getElementById("balloon1"), Math.random() * 0.5 + 3, {
        y: -800,
        repeat: 25,
        ease: Power0.easeNone
    });
    TweenMax.to(document.getElementById("balloon2"), Math.random() + 2.5, {
        y: -800,
        repeat: 25,
        ease: Power0.easeNone
    });
    TweenMax.to(document.getElementById("balloon3"), Math.random() * 0.5 + 3, {
        y: -800,
        repeat: 25,
        ease: Power0.easeNone
    });
    setTimeout(doSomething, 1800);

    function doSomething() {
        TweenMax.to(document.getElementById("balloon4"), Math.random() * 0.5 + 3, {
            y: -800,
            repeat: 25,
            ease: Power0.easeNone
        });
        TweenMax.to(document.getElementById("balloon5"), Math.random() + 2.5, {
            y: -800,
            repeat: 25,
            ease: Power0.easeNone
        });
        TweenMax.to(document.getElementById("balloon6"), Math.random() * 0.5 + 3, {
            y: -800,
            repeat: 25,
            ease: Power0.easeNone
        });
    }
}
$(document).ready(function () {
    setTimeout(
        function () {
            //do something special
        }, 500);
    $(".first").fadeIn(1000, function () {

        $(".first").fadeOut(0);
        setTimeout(
            function () {
                //do something special
            }, 200);
        $(".second").fadeIn(1000, function () {
            $(".second").fadeOut(0);
            setTimeout(
                function () {
                    //do something special
                }, 200);
            $(".third").fadeIn(1000);
        });
    });

    setTimeout(function () {
        $('body').addClass('loaded');
        animate();
    }, 4000);
    /*
var ident1,ident2;
function play-pause(ident1, ident2){
  $(ident1).hover(function() {
  $(ident1).addClass('animated pulse');
}, function() {
      $(ident1).removeClass('animated pulse')
  });
  $(ident2).hover(function() {
  $(ident2).addClass('animated pulse');
}, function() {
      $(ident2).removeClass('animated pulse')
  });
$(ident1).click(function(){
      $(ident2).css('z-index',3);
      $(ident1).css('z-index',0);
  });
$(ident2).click(function(){
  $(ident2).css('z-index',0);
      $(ident1).css('z-index',3);

});
}
play-pause('#play1','#pause1');
play-pause('#play2','#pause2');
play-pause('#play3','#pause3');
play-pause('#play4','#pause4');
play-pause('#play5','#pause5');
play-pause('#play6','#pause6');
play-pause('#play7','#pause7');
play-pause('#play8','#pause8');
play-pause('#play9','#pause9');
*/

    $(window).scroll(function() {
    if ($(document).scrollTop() < $(window).height()){
      $('nav.navbar-default').css('background-color','transparent');
    }  else {
      $('nav.navbar-default').css('background-color','white')   }
  });
});

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
