
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
        $('a[class="hide-links1"]').attr("href", "#"); 
        $('a[class="hide-links2"]').attr("href", "#"); 
        $('a[class="hide-links3"]').attr("href", "#");
        $('a[class="hide-links4"]').attr("href", "#");  
        document.getElementsByClassName('menubar')[0].style.opacity = '0';
        document.getElementsByClassName('vl')[0].style.opacity = '0';
        document.getElementsByClassName('btn')[0].style.zIndex = '110';
        const indicators= document.getElementsByClassName('carousel-indicators');
        for(let t =0;t<indicators.length;t++){
            indicators[t].zIndex='0';
        }
        const bigs = document.getElementsByClassName('big-size');
        bigs[0].style.zIndex = '105'
        bigs[1].style.zIndex = '104'  
        bigs[2].style.zIndex = '103'  
        bigs[3].style.zIndex = '102' 
    }
    else{
        document.getElementsByClassName('menubar')[0].style.opacity = '1';
        document.getElementsByClassName('vl')[0].style.opacity = '1';
        $('a[class="hide-links1"]').attr("href", "index.html"); 
        $('a[class="hide-links2"]').attr("href", "about.html"); 
        $('a[class="hide-links3"]').attr("href", "resume3.html");
        $('a[class="hide-links4"]').attr("href", "contacts.html");  
        console.log($('a[class="hide-links"]').attr("href"))
        const indicators= document.getElementsByClassName('carousel-indicators');
        for(let t =0;t<indicators.length;t++){
            indicators[t].zIndex='110';
        }
      }
    }

  