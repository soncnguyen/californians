//Loading//
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body-container').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="opacity:0;z-index:-2;";
          document.getElementById('body-container').style.opacity="1";
      },500);
  }
}

$(document).ready(function (){
    //Album Script//
    $("div.album-target").mouseover(function (event){
        $(event.target).closest("div.album-wrapper").addClass("album-hovered-on");
    });
    $("div.album-target").mouseout(function (event){
        $(event.target).closest("div.album-wrapper").removeClass("album-hovered-on");
    });
    //Smooth Scrolling//
    $("html").easeScroll({
        frameRate: 120,
        animationTime: 1500,
        stepSize: 60,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 1,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });
});