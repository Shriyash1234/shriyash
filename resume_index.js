
  window.onload = (event) => {
    const element1 = document.getElementById("btechno");
    let pos1 = element1.offsetTop;
    const element2 = document.getElementById("btechno2");
    let pos2 = element2.offsetTop;
    const element3 = document.getElementById("btechno3");
    let pos3 = element3.offsetTop;
    document.getElementsByClassName('vl2')[0].style.top = pos1 +5+ 'px';
    document.getElementsByClassName('vl2')[0].style.height = pos3-pos1 +5+ 'px';
    document.getElementsByClassName('sidecircle2')[0].style.top = pos1 +5+ 'px';
    document.getElementsByClassName('sidecircle3')[0].style.top = pos2 +5+ 'px';
    document.getElementsByClassName('sidecircle4')[0].style.top = pos3 +5+ 'px';
    const bigs = document.getElementsByClassName('big-size');
    for(let i =0;i<bigs.length;i++){
        bigs[i].style.zIndex = '0';
    }
    $('a[class="hide-links1"]').attr("href", "#"); 
    $('a[class="hide-links2"]').attr("href", "#"); 
    $('a[class="hide-links3"]').attr("href", "#");
    $('a[class="hide-links4"]').attr("href", "#"); 
   

  }
  window.onresize = (event) => {
    const element1 = document.getElementById("btechno");
    let pos1 = element1.offsetTop;
    const element2 = document.getElementById("btechno2");
    let pos2 = element2.offsetTop;
    const element3 = document.getElementById("btechno3");
    let pos3 = element3.offsetTop
    document.getElementsByClassName('vl2')[0].style.top = pos1 +5+ 'px';
    document.getElementsByClassName('vl2')[0].style.height = pos3-pos1 +5+ 'px';
    document.getElementsByClassName('sidecircle2')[0].style.top = pos1 +5+ 'px';
    document.getElementsByClassName('sidecircle3')[0].style.top = pos2 +5+ 'px';
    document.getElementsByClassName('sidecircle4')[0].style.top = pos3 +5+ 'px';
  }
  function toggles(){
    if(document.getElementsByClassName('menubar')[0].style.opacity == '1'){
        $('.carousel-indicators,.carousel-control-prev,.carousel-control-next').addClass('caroz');
        document.getElementsByClassName('menubar')[0].style.opacity = '0';
        document.getElementsByClassName('vl')[0].style.opacity = '0';
        document.getElementsByClassName('visible')[0].style.opacity = '1';
        document.getElementsByClassName('visible')[1].style.opacity = '1';
        document.getElementsByClassName('education')[0].style.zIndex = '110'
        document.getElementsByClassName('skills')[0].style.zIndex = '110'
        document.getElementsByClassName('websites')[0].style.zIndex = '110'
        $('a[class="hide-links1"]').attr("href", "#"); 
        $('a[class="hide-links2"]').attr("href", "#"); 
        $('a[class="hide-links3"]').attr("href", "#");
        $('a[class="hide-links4"]').attr("href", "#");  
        const indicators= document.getElementsByClassName('carousel-indicators');
        for(let t =0;t<indicators.length;t++){
            indicators[t].zIndex='0';
        }
        const bigs = document.getElementsByClassName('big-size');
        bigs[0].style.zIndex = '0'
        bigs[1].style.zIndex = '0'  
        bigs[2].style.zIndex = '0'  
        bigs[3].style.zIndex = '0'
    }
    else{
      $('.carousel-indicators,.carousel-control-prev,.carousel-control-next').removeClass('caroz');
        document.getElementsByClassName('menubar')[0].style.opacity = '1';
        document.getElementsByClassName('vl')[0].style.opacity = '1';
        document.getElementsByClassName('visible')[0].style.opacity = '0';
        document.getElementsByClassName('visible')[1].style.opacity = '0';
        document.getElementsByClassName('education')[0].style.zIndex = '0'
        document.getElementsByClassName('skills')[0].style.zIndex = '0'
        document.getElementsByClassName('websites')[0].style.zIndex = '0'
        $('a[class="hide-links1"]').attr("href", "index.html"); 
        $('a[class="hide-links2"]').attr("href", "about.html"); 
        $('a[class="hide-links3"]').attr("href", "resume3.html");
        $('a[class="hide-links4"]').attr("href", "contacts.html");  
        console.log($('a[class="hide-links"]').attr("href"))
        const indicators= document.getElementsByClassName('carousel-indicators');
        for(let t =0;t<indicators.length;t++){
            indicators[t].zIndex='110';
        }
        const bigs = document.getElementsByClassName('big-size');
        bigs[0].style.zIndex = '105'
        bigs[1].style.zIndex = '104'  
        bigs[2].style.zIndex = '103'  
        bigs[3].style.zIndex = '102'
    }
}
// var height = document.getElementById('last').clientHeight;
// console.log(height)
// // Get the target element
// const target = document.getElementById('last');
// const body = document.body;
// // Get the bounding client rect of the target element
// const targetRect = target.getBoundingClientRect();

// // Calculate the scroll threshold based on the top position of the target element
// const scrollThreshold = targetRect.top + window.pageYOffset;
// console.log('st=',scrollThreshold)
// let scrollingEnabled = true;
// // Add an event listener for the "scroll" event
// window.addEventListener('scroll', function() {
//   // Get the current scroll position
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   // If the current scroll position is greater than the threshold and scrolling is currently enabled, disable scrolling
//   if (scrollTop> (scrollThreshold -4*height) && scrollingEnabled) {
//     console.log('yes')
//     console.log('stop=',scrollTop)
//     console.log('st=',scrollThreshold)
    
//     scrollingEnabled = false;
//     body.classList.add('scroll-lock');
//   }
//   // If the current scroll position is less than the threshold and scrolling is currently disabled, enable scrolling
//   else if (scrollTop <= (scrollThreshold-5*height) && !scrollingEnabled) {
//     scrollingEnabled = true;
//     body.classList.remove('scroll-lock');
//   }
// });

  