/* CANVAS ANIMATION
var ctx = document.getElementById("canvas").getContext("2d");
function drawStar(cx, cy) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / 5;
    ctx.strokeSyle = "#000";
    ctx.beginPath();
    ctx.moveTo(cx, cy - 12)
    for (i = 0; i < 5; i++) {
        x = cx + Math.cos(rot) * 12;
        y = cy + Math.sin(rot) * 12;
        ctx.lineTo(x, y)
        rot += step
        x = cx + Math.cos(rot) * 5;
        y = cy + Math.sin(rot) * 5;
        ctx.lineTo(x, y)
        rot += step
    }
    ctx.lineTo(cx, cy - 12)
    ctx.closePath();
    ctx.lineWidth=6;
    ctx.strokeStyle='#c0c0c0';
    ctx.stroke();
    ctx.fill();
    
    
}
function random(min, max) {
  return (min + Math.random() * (max - min) + 0.5) | 0;
}
function tweenToRandomColor() {
  TweenMax.to(ctx, 2, {colorProps:{fillStyle:"rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) + ")"}, onUpdate:drawStar(20, 80), onComplete:tweenToRandomColor});
}
tweenToRandomColor();
function loop() {
    drawStar(80, 40);
} 
TweenMax.to(ctx, 2, {xpos:50, ypos:40, repeat:-1, yoyo:true});
loop();
TweenMax.to(".balloon-blue", 8, {
    opacity:0,
    scale:0,
    y:600,
    delay:2,
    ease:Back.easeOut,
    scale:0.5
});
TweenMax.to(".balloon-red", 8, {
    top:400,
    backgroundColor:"#f00",
    padding:20,
    delay:2.5,
    ease:Elastic.easeOut,
    borderColor:"white",
    borderRadius:26
});
TweenMax.from(".star1", 2, {
    opacity:0
});
TweenMax.to(".star1", 2, {
    y:700, 
    repeat:10, 
    rotation:720, 
    repeatDelay:0.5, 
    ease: Power0.easeNone
});
TweenMax.to(".star2", 2, {y:700, repeat:10, rotation:720, repeatDelay:0.5, ease: Power0.easeNone});
TweenMax.to(".star3", 2, {y:700, repeat:10, rotation:720, repeatDelay:0.5, ease: Power0.easeNone});
TweenMax.to(".star4", 2, {y:700, repeat:10, rotation:720, repeatDelay:0.5, ease: Power0.easeNone});
TweenMax.to(".star5", 2, {y:700, repeat:10, rotation:720, repeatDelay:0.5, ease: Power0.easeNone});
TweenMax.to(".star6", 2, {y:700, repeat:10, rotation:720, repeatDelay:0.5, ease: Power0.easeNone});
TweenMax.to(".star7", 2, {y:700, repeat:10, rotation:720, repeatDelay:Math.random(), ease: Power0.easeNone});
TweenMax.to(".star8", 2, {y:700, repeat:10, rotation:720, repeatDelay:0.5, ease: Power0.easeNone});
TweenMax.to(".star9", 2, {y:700, repeat:10, rotation:Math.random() * 720, repeatDelay:0.5, ease: Power0.easeNone});
TweenMax.to(".star10", 2, {y:700, repeat:10, rotation:720, repeatDelay:0.5, ease: Power0.easeNone});
TweenMax.to(".star11", 2, {y:700, yoyo:true, repeat:10, rotation:720, ease: Power0.easeNone});
TweenMax.to(".star12", 2, {y:700, yoyo:true, repeat:10, rotation:720, ease: Power0.easeNone});
*/

function animate() {
(function(){
    document.getElementById("star4p").style.top = Math.random() * 160 + 20 +'px';
    document.getElementById("star4p").style.left = Math.random() * 164 + 21 + 'px';
    TweenMax.from(document.getElementById("star4p"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star1").style.top = Math.random() * 160 + 20 +'px';
    document.getElementById("star1").style.left = Math.random() * 164 + 205 + 'px';
    TweenMax.from(document.getElementById("star1"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star2").style.top = Math.random() * 160 + 20 + 'px';
    document.getElementById("star2").style.left = Math.random() * 164 + 389 + 'px';
    TweenMax.from(document.getElementById("star2"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star3").style.top = Math.random() * 160 + 20 + 'px';
    document.getElementById("star3").style.left = Math.random() * 164 + 573 + 'px';
    TweenMax.from(document.getElementById("star3"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star4").style.top = Math.random() * 160 + 20 + 'px';
    document.getElementById("star4").style.left = Math.random() * 164 + 757 + 'px';
    TweenMax.from(document.getElementById("star4"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star5").style.top = Math.random() * 160 + 20 + 'px';
    document.getElementById("star5").style.left = Math.random() * 164 + 941 + 'px';
    TweenMax.from(document.getElementById("star5"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star7p").style.top = Math.random() * 160 + 20 + 'px';
    document.getElementById("star7p").style.left = Math.random() * 164 + 1125 + 'px';
    TweenMax.from(document.getElementById("star7p"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
    
(function(){
    document.getElementById("star5p").style.top = Math.random() * 160 + 200 +'px';
    document.getElementById("star5p").style.left = Math.random() * 164 + 21 + 'px';
    TweenMax.from(document.getElementById("star5p"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star6").style.top = Math.random() * 160 + 200 + 'px';
    document.getElementById("star6").style.left = Math.random() * 164 + 205 + 'px';
    TweenMax.from(document.getElementById("star6"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star7").style.top = Math.random() * 160 + 200 + 'px';
    document.getElementById("star7").style.left = Math.random() * 164 + 389 + 'px';
    TweenMax.from(document.getElementById("star7"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star8").style.top = Math.random() * 160 + 200 + 'px';
    document.getElementById("star8").style.left = Math.random() * 164 + 573 + 'px';
    TweenMax.from(document.getElementById("star8"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star9").style.top = Math.random() * 160 + 200 + 'px';
    document.getElementById("star9").style.left = Math.random() * 164 + 757 + 'px';
    TweenMax.from(document.getElementById("star9"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star10").style.top = Math.random() * 160 + 200 + 'px';
    document.getElementById("star10").style.left = Math.random() * 164 + 941 + 'px';
    TweenMax.from(document.getElementById("star10"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star8p").style.top = Math.random() * 160 + 200 + 'px';
    document.getElementById("star8p").style.left = Math.random() * 164 + 1125 + 'px';
    TweenMax.from(document.getElementById("star8p"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
    
(function(){
    document.getElementById("star6p").style.top = Math.random() * 160 + 380 +'px';
    document.getElementById("star6p").style.left = Math.random() * 164 + 21 + 'px';
    TweenMax.from(document.getElementById("star6p"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star11").style.top = Math.random() * 160 + 380 + 'px';
    document.getElementById("star11").style.left = Math.random() * 164 + 205 + 'px';
    TweenMax.from(document.getElementById("star11"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star12").style.top = Math.random() * 160 + 380 + 'px';
    document.getElementById("star12").style.left = Math.random() * 164 + 389 + 'px';
    TweenMax.from(document.getElementById("star12"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star1p").style.top = Math.random() * 160 + 380 + 'px';
    document.getElementById("star1p").style.left = Math.random() * 164 + 573 + 'px';
    TweenMax.from(document.getElementById("star1p"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star2p").style.top = Math.random() * 160 + 380 + 'px';
    document.getElementById("star2p").style.left = Math.random() * 164 + 757 + 'px';
    TweenMax.from(document.getElementById("star2p"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
(function(){
    document.getElementById("star3p").style.top = Math.random() * 160 + 380 + 'px';
    document.getElementById("star3p").style.left = Math.random() * 164 + 941 + 'px';
    TweenMax.from(document.getElementById("star3p"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
    (function(){
    document.getElementById("star9p").style.top = Math.random() * 160 + 380 + 'px';
    document.getElementById("star9p").style.left = Math.random() * 164 + 1125 + 'px';
    TweenMax.from(document.getElementById("star9p"), 0.75,
    {
        opacity:0,
        scale:0,
        ease: Back.easeOut.config(1.7)
    });
    setTimeout(arguments.callee, 750);
})();
}


/*
function flickerAnimate(object) {
    x = Math.random() * 2 + 1
    TweenMax.fromTo(object, x,
    {
        y:0
    },{
        y:640,
        rotation: Math.random() * 720,
        repeat:3,
        delay:3 - x
    });
    
}
function animate() {
    flickerAnimate(".star1");
flickerAnimate(".star2");
flickerAnimate(".star3");
flickerAnimate(".star4");
flickerAnimate(".star5");
flickerAnimate(".star6");
flickerAnimate(".star7");
flickerAnimate(".star8");
flickerAnimate(".star9");
flickerAnimate(".star10");
flickerAnimate(".star11");
flickerAnimate(".star12");
}
document.getElementById("box").onclick = function() {animate()}; */

document.getElementById("gift-box").onclick = function() {animate()};
