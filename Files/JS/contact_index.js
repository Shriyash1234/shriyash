window.onload = (event) => {
    const bigs = document.getElementsByClassName('big-size');
    for(let i =0;i<bigs.length;i++){
        bigs[i].style.zIndex = '0';
    }
    $('a[class="hide-links1"]').attr("href", "#"); 
    $('a[class="hide-links2"]').attr("href", "#"); 
    $('a[class="hide-links3"]').attr("href", "#");
    $('a[class="hide-links4"]').attr("href", "#"); 
    let height = window.innerHeight;
    let width = window.innerWidth;
    if (height<780 && width<430){
        $('textarea').attr("rows",'5');
    }
    if (height<730 && width<430){
        $('textarea').attr("rows",'3');
    }
    if (height<670 && width<430){
        $('textarea').attr("rows",'2');
    }
    if (height<630 && width<430){
        $('textarea').attr("rows",'1');
    }
    if(width<680 && height>800){
        $('textarea').attr("rows",'5');
    }  
    // $('a[class="hide-links"]').attr("href",'#'); 
}

window.onresize = (event) =>{
    let height = window.innerHeight;
    if (height<780 && width<430){
        $('textarea').attr("rows",'5');
    }
    if (height<730 && width<430){
        $('textarea').attr("rows",'3');
    }
    if (height<670 && width<430){
        $('textarea').attr("rows",'2');
    }
    if (height<630 && width<430){
        $('textarea').attr("rows",'1');
    }   
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
        const logos = document.getElementsByClassName('fa-brands')
        for(let j= 0;j<logos.length;j++){
            logos[j].style.zIndex = '110'
        }
        const forms = document.getElementsByClassName('form-control');
        for(let i =0;i<forms.length;i++){
                forms[i].style.zIndex = '110'
        }
        const bigs = document.getElementsByClassName('big-size');
        bigs[0].style.zIndex = '0'
        bigs[1].style.zIndex = '0'  
        bigs[2].style.zIndex = '0'  
        bigs[3].style.zIndex = '0'
    }
    else{
        document.getElementsByClassName('menubar')[0].style.opacity = '1';
        document.getElementsByClassName('vl')[0].style.opacity = '1';
        document.getElementsByClassName('btn')[0].style.zIndex = '0';
        $('a[class="hide-links1"]').attr("href", "index.html"); 
        $('a[class="hide-links2"]').attr("href", "about.html"); 
        $('a[class="hide-links3"]').attr("href", "resume.html");
        $('a[class="hide-links4"]').attr("href", "contacts.html");  
        console.log($('a[class="hide-links"]').attr("href"))
        const indicators= document.getElementsByClassName('carousel-indicators');
        for(let t =0;t<indicators.length;t++){
            indicators[t].zIndex='110';
        }
        const logos = document.getElementsByClassName('fa-brands')
        for(let j= 0;j<logos.length;j++){
            logos[j].style.zIndex = '0'
        }
        const forms = document.getElementsByClassName('form-control');
        for(let k =0;k<forms.length;k++){
            forms[k].style.zIndex = '0'}
        const bigs = document.getElementsByClassName('big-size');
        bigs[0].style.zIndex = '105'
        bigs[1].style.zIndex = '104'  
        bigs[2].style.zIndex = '103'  
        bigs[3].style.zIndex = '102'       
    }    
}
