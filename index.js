window.onload = (event) => {
  let width = window.innerWidth;
  document.getElementsByClassName('personal_image')[0].style.left = 0.4* width + 'px';
};
window.onresize = function(event) {
  let width = window.innerWidth;
  document.getElementsByClassName('personal_image')[0].style.left = 0.4* width + 'px';
};


function translate_on_scroll(){
    let scroll_top = 2*window.scrollY;
    // console.log('scroll top = ',scroll_top)
    let shriyash_height = document.getElementsByClassName('Shriyash')[0].clientHeight;
    
    document.getElementsByClassName("Shriyash")[0].style.transform = `translateX(${scroll_top}px)`;
    document.getElementsByClassName("Mandavekar")[0].style.transform = `translateX(-${scroll_top}px)`;
    if(scroll_top > 200 ){
      document.getElementsByClassName("info")[0].style.opacity= 0.003 * (window.scrollY-200);
    }
    else{
      document.getElementsByClassName("info")[0].style.opacity= 0;
    }
}
translate_on_scroll();

window.onscroll = translate_on_scroll;
$(window).on('resize', function() {
    if($(window).width() < 990) {
      $('.circle1').removeClass('circle2');
      $('.Web_devloper').removeClass('Web_devloper2');
  
    }else{
        $('.circle1').addClass('circle2');
        $('.Web_devloper').addClass('Web_devloper2');
  
    }
  })
// document.getElementsByClassName("Shriyash")[0].style.transform.translateX = window.scrollY*2+'px';
     // document.getElementsByClassName("Shriyash")[0].css("transform","translate(window.scrollY*2+'px',0)");
    // document.getElementsByClassName("Shriyash")[0].style.paddingLeft= window.scrollY*2+'px';
    // document.getElementsByClassName("Mandavekar")[0].style.paddingLeft = 200 - window.scrollY*2+ 'px';
    // document.querySelector('p').style.transform='translateY(${scroll_top*2}px) rotate(-90deg)';
    // elm.style.transform = `translateX(${scrollDelta}px) rotate(${scrollDelta}deg)`;
    // document.getElementsByClassName("sidename")[0].style.transform = `translateX(${scroll_top}px) rotate(-90deg)`;