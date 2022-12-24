window.onload = (event) => {
    const bigs = document.getElementsByClassName('big-size');
    for(let i =0;i<bigs.length;i++){
        console.log(0)
        bigs[i].style.zIndex = '0';
    }
    // $('a[class="hide-links"]').attr("href",'#'); 
}
function toggles(){
    if(document.getElementsByClassName('menubar')[0].style.opacity == '1'){
        $('a[class="hide-links"]').attr("href", "http://www.google.com/"); 
        document.getElementsByClassName('menubar')[0].style.opacity = '0';
        document.getElementsByClassName('vl')[0].style.opacity = '0';
        document.getElementsByClassName('btn')[0].style.zIndex = '110';
        const logos = document.getElementsByClassName('fa-brands')
        for(let j= 0;j<logos.length;j++){
            logos[j].style.zIndex = '110'
        }
        const bigs = document.getElementsByClassName('big-size');
        const forms = document.getElementsByClassName('form-control');
        for(let i =0;i<forms.length;i++){
                forms[i].style.zIndex = '110'
        }
        bigs[0].style.zIndex = '105'
        bigs[1].style.zIndex = '104'  
        bigs[2].style.zIndex = '103'  
        bigs[3].style.zIndex = '102' 
    }
    else{
        document.getElementsByClassName('menubar')[0].style.opacity = '1';
        document.getElementsByClassName('vl')[0].style.opacity = '1';
        document.getElementsByClassName('btn')[0].style.zIndex = '0';
        const logos = document.getElementsByClassName('fa-brands')
        for(let j= 0;j<logos.length;j++){
            logos[j].style.zIndex = '0'
        }
        const forms = document.getElementsByClassName('form-control');
        for(let k =0;k<forms.length;k++){
            forms[k].style.zIndex = '0'}   
    }    
}
