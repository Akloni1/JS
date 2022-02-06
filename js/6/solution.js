function attachEventsListeners() {

  
  if(document.getElementById('days').value!=''){
    let a = document.getElementById('days').value
    let hours = Number(a)*24;
    let minutes = Number(a)*1440;
    let seconds = Number(a)*86400;
    document.getElementById('hours').value =hours
    document.getElementById('minutes').value=minutes
    document.getElementById('seconds').value=seconds
  }
 
}


function attachEventsListeners2() 
{
 if(document.getElementById('hours').value!=''){
    let a = document.getElementById('hours').value
    let days = Number(a)/24;
    let minutes = Number(a)*60;
    let seconds = Number(a)*3600;
    document.getElementById('days').value =days
    document.getElementById('minutes').value=minutes
    document.getElementById('seconds').value=seconds
  }
}

function attachEventsListeners3() 
{
   if(document.getElementById('minutes').value!=''){
    let a = document.getElementById('minutes').value
    let days = Number(a)/1440;
    let hours = Number(a)/60;
    let seconds = Number(a)*60;
    document.getElementById('days').value =days
    document.getElementById('hours').value=hours
    document.getElementById('seconds').value=seconds
  }
}

function attachEventsListeners4() 
{
   if(document.getElementById('seconds').value!=''){
    let a = document.getElementById('seconds').value
    let days = Number(a)/86400;
    let hours = Number(a)/3600;
    let minutes = Number(a)/60;
    document.getElementById('days').value =days
    document.getElementById('hours').value=hours
    document.getElementById('minutes').value=minutes
  }
}