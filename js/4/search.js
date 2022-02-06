function search() {
    let colvo = document.getElementsByTagName('li').length
    let inp = document.getElementById('searchText').value
    let colvoSearch = 0;
    for(let i = 0; i<colvo;i++ ){
        if(document.getElementsByTagName('li')[i].innerHTML==inp){
            
            document.getElementsByTagName('li')[i].style.fontWeight= '1000';
            document.getElementsByTagName('li')[i].style.textDecoration = 'underline';
            colvoSearch++;
        }
    }
    let res= document.getElementById('result')
    res.innerHTML=''
    res.innerHTML+="Совпадений - "+colvoSearch
  
 }
 