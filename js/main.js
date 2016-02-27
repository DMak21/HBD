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
    (function () {
        ani(document.getElementById("star2"), 160, 20, 164, 205);
        setTimeout(arguments.callee, 750);
    })();
    if (window.screen.width >= 610) {
        (function () {
            ani(document.getElementById("star3"), 160, 20, 164, 389);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.screen.width >= 780) {
        (function () {
            ani(document.getElementById("star4"), 160, 20, 164, 573);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.screen.width >= 992) {
        (function () {
            ani(document.getElementById("star5"), 160, 20, 164, 757);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.screen.width >= 1200) {
        (function () {
            ani(document.getElementById("star6"), 160, 20, 164, 941);
            setTimeout(arguments.callee, 750);
        })();
    }


    (function () {
        ani(document.getElementById("star8"), 160, 200, 164, 21);
        setTimeout(arguments.callee, 750);
    })();
    (function () {
        ani(document.getElementById("star9"), 160, 200, 164, 205);
        setTimeout(arguments.callee, 750);
    })();
    if (window.screen.width >= 610) {
        (function () {
            ani(document.getElementById("star10"), 160, 200, 164, 389);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.screen.width >= 780) {
        (function () {
            ani(document.getElementById("star11"), 160, 200, 164, 573);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.screen.width >= 992) {
        (function () {
            ani(document.getElementById("star12"), 160, 200, 164, 757);
            setTimeout(arguments.callee, 750);
        })();
    }

    if (window.screen.width >= 1200) {
        (function () {
            ani(document.getElementById("star13"), 160, 200, 164, 941);
            setTimeout(arguments.callee, 750);
        })();
    }

    (function () {
        ani(document.getElementById("star15"), 160, 380, 164, 21);
        setTimeout(arguments.callee, 750);
    })();
    (function () {
        ani(document.getElementById("star16"), 160, 380, 164, 205);
        setTimeout(arguments.callee, 750);
    })();
    if (window.screen.width >= 610) {
        (function () {
            ani(document.getElementById("star17"), 160, 380, 164, 389);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.screen.width >= 780) {
        (function () {
            ani(document.getElementById("star18"), 160, 380, 164, 573);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.screen.width >= 992) {
        (function () {
            ani(document.getElementById("star19"), 160, 380, 164, 757);
            setTimeout(arguments.callee, 750);
        })();
    }
    if (window.screen.width >= 1200) {
        (function () {
            ani(document.getElementById("star20"), 160, 380, 164, 941);
            setTimeout(arguments.callee, 750);
        })();
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

});