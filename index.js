window.onload = (event) => {
  let width = window.innerWidth;
  if(width >991){
  document.getElementsByClassName('personal_image')[0].style.left = 0.4* width + 'px';
  }
  else{
    document.getElementsByClassName('personal_image')[0].style.left = 0.22* width + 'px';
    }
};
window.onresize = function(event) {
  let width = window.innerWidth;
  if(width >991){
    document.getElementsByClassName('personal_image')[0].style.left = 0.4* width + 'px';
    }
    else{
      document.getElementsByClassName('personal_image')[0].style.left = 0.22* width + 'px';
      }
};


function translate_on_scroll(){
    
    let width = window.innerWidth;
    let scroll_top = window.scrollY;
    console.log('scroll top = ',scroll_top)
    // let shriyash_height = document.getElementsByClassName('Shriyash')[0].clientHeight;
    if(width<991){
      if(window.scrollY > 870 ){
        document.getElementsByClassName("info")[0].style.opacity= 0.015 * (window.scrollY-870);
      }
      else{
        document.getElementsByClassName("info")[0].style.opacity= 0;
      }
      let scroll_top = 0.75*window.scrollY;
      document.getElementsByClassName("Shriyash")[0].style.transform = `translateX(${scroll_top}px)`;
      document.getElementsByClassName("Mandavekar")[0].style.transform = `translateX(-${scroll_top}px)`;
    }
    else{
      if(window.scrollY > 200 ){
        document.getElementsByClassName("info")[0].style.opacity= 0.003 * (window.scrollY-200);
      }
      else{
        document.getElementsByClassName("info")[0].style.opacity= 0;
      }
      let scroll_top = 2*window.scrollY;
      document.getElementsByClassName("Shriyash")[0].style.transform = `translateX(${scroll_top}px)`;
      document.getElementsByClassName("Mandavekar")[0].style.transform = `translateX(-${scroll_top}px)`;
      
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
  $(window).on('load', function() {
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