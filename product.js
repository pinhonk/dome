function change(type,element){
    let tabs= document.getElementsByClassName('tab-item');
    for(i=0;i<tabs.length;i++){
        tabs[i].style.background= 'rgb(181, 127, 127)';
    }
    element.style.background= 'rgb(181, 50, 50)';
    document.getElementById(type).style.display='block';
    switch (type) {
        case 'trend':
            document.getElementById('new').style.display='none';
            document.getElementById('best-sell').style.display='none';
            break;
        case 'new':
            document.getElementById('trend').style.display= 'none';
            document.getElementById('best-sell').style.display= 'none';
            break;
        case 'best-sell':
            document.getElementById('trend').style.display='none';
            document.getElementById('new').style.display='none';
            break;
    }
}