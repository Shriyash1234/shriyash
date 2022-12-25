window.onload = (event) => {
  let width = window.innerWidth;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  // const element = document.getElementById("bg2");
  // element.remove();
  // console.log(width)
  const bigs = document.getElementsByClassName('big-size');
    for(let i =0;i<bigs.length;i++){
        bigs[i].style.zIndex = '0';
    }
  $('a[class="hide-links1"]').attr("href", "#"); 
  $('a[class="hide-links2"]').attr("href", "#"); 
  $('a[class="hide-links3"]').attr("href", "#");
  $('a[class="hide-links4"]').attr("href", "#");  
  if(width >=991){
    console.log('a')
  document.getElementsByClassName('personal_image')[0].style.left = 0.4* width + 'px';
  document.getElementsByClassName("Shriyash")[0].style.marginTop = 0.01*vh+'px';
  }
  else if(width>479){
    document.getElementsByClassName('personal_image')[0].style.left = 0.22* width + 'px';
    document.getElementsByClassName("Shriyash")[0].style.marginTop = 0.58*vw+0.25*vh+'px';
  }
  else{
    document.getElementsByClassName('personal_image')[0].style.left = 0.22* width + 'px';
    document.getElementsByClassName("Shriyash")[0].style.marginTop = 0.25*vh+0.62*vw+'px';
  }  
};
window.onresize = function(event) {
  let width = window.innerWidth;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  console.log(width);
  if(width >=991){  
    document.getElementsByClassName('personal_image')[0].style.left = 0.4* width + 'px';
    document.getElementsByClassName("Shriyash")[0].style.marginTop = 0.01*vh+'px';
    // const element = document.getElementById("bg");
    // element.remove();
    }
    else if(width>479){
      document.getElementsByClassName('personal_image')[0].style.left = 0.22* width + 'px';
      document.getElementsByClassName("Shriyash")[0].style.marginTop = 0.58*vw+0.25*vh+'px';
    }
    else{
      document.getElementsByClassName('personal_image')[0].style.left = 0.22* width + 'px';
      document.getElementsByClassName("Shriyash")[0].style.marginTop = 0.25*vh+0.62*vw+'px';
    }  
};


function translate_on_scroll(){
    
    let width = window.innerWidth;
    let scroll_top = window.scrollY;
    console.log('scroll top = ',scroll_top)
    // let shriyash_height = document.getElementsByClassName('Shriyash')[0].clientHeight;
    let shriyash_height = document.getElementsByClassName('personal_image')[0].clientHeight;
    // console.log(shriyash_height);
    if(width<991 && width>700){
      if(window.scrollY > 870 ){
        document.getElementsByClassName("info")[0].style.opacity= 0.015 * (window.scrollY-870);
      }
      else{
        document.getElementsByClassName("info")[0].style.opacity= 0;
      }
      let scroll_top = 0.75*window.scrollY;
      // let height = window.innerHeight;
      // console.log(height);
      const vw = Math.min(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const vh = Math.min(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      // console.log(vw);
      // console.log(vh);
      document.getElementsByClassName("Shriyash")[0].style.transform = `translateX(${scroll_top}px)`;
      document.getElementsByClassName("Mandavekar")[0].style.transform = `translateX(-${scroll_top}px)`;
    }
    else if(width>991){
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
    else{
      if(window.scrollY > 680 ){
        const vw = window.innerWidth;
        document.getElementsByClassName("info")[0].style.opacity= (2.8/vw) * (window.scrollY-680);
      }
      else{
        document.getElementsByClassName("info")[0].style.opacity= 0;
      }
      let scroll_top = 0.4*window.scrollY;
      const vh = window.innerHeight;
      document.getElementsByClassName("Shriyash")[0].style.transform = `translateX(${scroll_top}px)`;
      document.getElementsByClassName("Mandavekar")[0].style.transform = `translateX(-${scroll_top}px)`;
      
    }           
}

function redirect(){
  $.ajax({
    'type': 'get',
     'url': 'sidebar.html',
     'success': function(response) {
      $("html").html(response);
  }
  });


  // const element = document.getElementById("bg");
  // element.remove();
  // const element2 = document.getElementById("bg");
  // element2.appendChild(element2);
}
translate_on_scroll();

window.onscroll = translate_on_scroll;
$(window).on('resize', function() {
    if($(window).width() < 991) {
      $('.circle1').removeClass('circle2');
      $('.Web_devloper').removeClass('Web_devloper2');
  
    }else{
        $('.circle1').addClass('circle2');
        $('.Web_devloper').addClass('Web_devloper2');
  
    }
  })
  $(window).on('load', function() {
    if($(window).width() < 991) {
      $('.circle1').removeClass('circle2');
      $('.Web_devloper').removeClass('Web_devloper2');
  
    }else{
        $('.circle1').addClass('circle2');
        $('.Web_devloper').addClass('Web_devloper2');
  
    }
  })  
  function toggles(){
    if(document.getElementsByClassName('menubar')[0].style.opacity == '1'){
        $('a[class="hide-links1"]').attr("href", "#"); 
        $('a[class="hide-links2"]').attr("href", "#"); 
        $('a[class="hide-links3"]').attr("href", "#");
        $('a[class="hide-links4"]').attr("href", "#");  
        document.getElementsByClassName('menubar')[0].style.opacity = '0';
        document.getElementsByClassName('vl')[0].style.opacity = '0';
        const bigs = document.getElementsByClassName('big-size');
        bigs[0].style.zIndex = '0'
        bigs[1].style.zIndex = '0'  
        bigs[2].style.zIndex = '0'  
        bigs[3].style.zIndex = '0'
    }
    else{
        document.getElementsByClassName('menubar')[0].style.opacity = '1';
        document.getElementsByClassName('vl')[0].style.opacity = '1';
        $('a[class="hide-links1"]').attr("href", "index.html"); 
        $('a[class="hide-links2"]').attr("href", "about.html"); 
        $('a[class="hide-links3"]').attr("href", "resume3.html");
        $('a[class="hide-links4"]').attr("href", "contacts.html");
        const bigs = document.getElementsByClassName('big-size');
        bigs[0].style.zIndex = '105'
        bigs[1].style.zIndex = '104'  
        bigs[2].style.zIndex = '103'  
        bigs[3].style.zIndex = '102'  
    }
  }  

// document.getElementsByClassName("Shriyash")[0].style.transform.translateX = window.scrollY*2+'px';
     // document.getElementsByClassName("Shriyash")[0].css("transform","translate(window.scrollY*2+'px',0)");
    // document.getElementsByClassName("Shriyash")[0].style.paddingLeft= window.scrollY*2+'px';
    // document.getElementsByClassName("Mandavekar")[0].style.paddingLeft = 200 - window.scrollY*2+ 'px';
    // document.querySelector('p').style.transform='translateY(${scroll_top*2}px) rotate(-90deg)';
    // elm.style.transform = `translateX(${scrollDelta}px) rotate(${scrollDelta}deg)`;
    // document.getElementsByClassName("sidename")[0].style.transform = `translateX(${scroll_top}px) rotate(-90deg)`;


//resume
