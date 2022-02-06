function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
 
    function onClick() {
    
        let colvoTd = document.getElementsByTagName('td').length
     
      
       for(let i = 1; i<colvoTd;i++){
            if(document.getElementsByTagName('td')[i].innerHTML==document.getElementById('searchField').value||(document.getElementsByTagName('td')[i].innerHTML).includes(document.getElementById('searchField').value)){
               if(i<=3){
                let colvoTr = document.getElementsByTagName('tr')[2].innerHTML
                let res = document.getElementById('result')
                res.innerHTML= ''
                res.innerHTML+= colvoTr
               }
               else if(i>3&&i<=6){
                let colvoTr = document.getElementsByTagName('tr')[3].innerHTML
                let res = document.getElementById('result')
                res.innerHTML= ''
                res.innerHTML+= colvoTr
               }
               else if(i>6&&i<=9){
                let colvoTr = document.getElementsByTagName('tr')[4].innerHTML
                let res = document.getElementById('result')
                res.innerHTML= ''
                res.innerHTML+= colvoTr
               }
               else if(i>9&&i<=12){
                let colvoTr = document.getElementsByTagName('tr')[5].innerHTML
                let res = document.getElementById('result')
                res.innerHTML= ''
                res.innerHTML+= colvoTr
               }
               else if(i>12&&i<=15){
                let colvoTr = document.getElementsByTagName('tr')[6].innerHTML
                let res = document.getElementById('result')
                res.innerHTML= ''
                res.innerHTML+= colvoTr
               }

            }
        }
      
 
    }
 }