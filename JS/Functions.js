const FlexText = document.getElementById("FlexTextMiddle");
const Loader = document.getElementById("WhiteLoader");

function scrollFunction() {
    
    const navbar = document.getElementById("nav").style;
    const Left = document.getElementById("Left").style;
    navbar.backgroundColor ="rgba(0,0,0,0)";
    navbar.zIndex="98";

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    navbar.height = "80px";
    navbar.boxShadow = "0 2px 10px -2px rgba(0,0,0,.3)"  ;
    navbar.backgroundColor ="#fff";
    navbar.position = "fixed";
    navbar.zIndex="98";
    Left.left="15%";
    }else {
    navbar.height = "70px";
    navbar.boxShadow = "0 0 0 0 rgba(0,0,0,0.1)" ;
    navbar.backgroundColor ="rgba(0,0,0,0)";
    navbar.position = "absolute";
    navbar.zIndex="98";
    Left.left="5%";
    }
}
function LoadingScreen(){
    console.log("sss");
    setTimeout(function(){Loader.parentElement.removeChild(Loader)},3000);
}
window.addEventListener('load',LoadingScreen());
window.onscroll = function() {scrollFunction()};
