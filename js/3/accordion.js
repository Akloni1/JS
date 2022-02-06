function toggle() {
    if(document.getElementsByTagName('span')[0].innerHTML=="More"){
   document.getElementById('extra').style.display= 'inline';
   let bat = document.getElementsByTagName('span')[0]
   bat.innerHTML= "Less";
}
else if(document.getElementsByTagName('span')[0].innerHTML=="Less"){
    document.getElementById('extra').style.display= 'none';
    let bat = document.getElementsByTagName('span')[0]
    bat.innerHTML= "More";
}
  
 
}