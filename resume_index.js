
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
