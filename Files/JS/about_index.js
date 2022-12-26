window.onload = (event) => {
    let imageHeight = document.getElementsByClassName('about-image')[0].clientHeight;
    const vh = window.innerHeight;
    const margin = (vh-imageHeight)/2;
    // console.log(margin)
    $('.rectangle').css("margin-top",{margin})
    $('.rectangle').css("margin-bottom",{margin})
    let width = window.innerWidth
    const vw = window.innerWidth;
    
    const bigs = document.getElementsByClassName('big-size');
      for(let i =0;i<bigs.length;i++){
          bigs[i].style.zIndex = '0';
      }
    $('a[class="hide-links1"]').attr("href", "#"); 
    $('a[class="hide-links2"]').attr("href", "#"); 
    $('a[class="hide-links3"]').attr("href", "#");
    $('a[class="hide-links4"]').attr("href", "#");
     
  };
window.onresize = function(event) {
    let imageHeight = document.getElementsByClassName('about-image')[0].clientHeight;
    const vh = window.innerHeight;
    const margin = (vh-imageHeight)/2;
    // console.log('margin=',margin)
    $('.rectangle').css("margin-top",{margin})
    // console.log("margin-top",$('.rectangle').css("margin-top"))
    $('.rectangle').css("margin-bottom",{margin})
    let width = window.innerWidth;
    const vw = window.innerWidth;
    // console.log(width);
};
   
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
          $('a[class="hide-links3"]').attr("href", "resume.html");
          $('a[class="hide-links4"]').attr("href", "contacts.html");
          const bigs = document.getElementsByClassName('big-size');
          bigs[0].style.zIndex = '105'
          bigs[1].style.zIndex = '104'  
          bigs[2].style.zIndex = '103'  
          bigs[3].style.zIndex = '102'  
      }
    }  
  
