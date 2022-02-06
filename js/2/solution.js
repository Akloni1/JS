function solve() {
  String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  }
   let str = document.getElementById('text').value;
   let str1 = document.getElementById('naming-convention').value;
  
   if(str1=='Camel Case')
   {
      str = str.toLowerCase();
      for(let i=0; i< str.length;i++)
      {
          if(str[i]==' ')
          {
          str= str.replaceAt(i+1, str[i+1].toUpperCase())
          }
      }
   }
   else if(str1=='Pascal Case'){
    str = str.toLowerCase();
    for(let i=0; i< str.length;i++)
    {
        if(str[i]==' ')
        {
        str= str.replaceAt(i+1, str[i+1].toUpperCase())
        }
        else if(i==0){
          str= str.replaceAt(i, str[i].toUpperCase())
        }
    }
   }
   else{
     str = 'Error';
   }
   str = str.split(' ').join('');
  //let res = document.getElementsByClassName('result-container')
  let res = document.getElementsByTagName('div')[2];
  res.innerHTML = 'Result:'
  res.innerHTML += str
  
   console.log(str)
   console.log(str1)
  
  }