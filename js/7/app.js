function lockedProfile() {
    let a = document.getElementsByName('user1Locked')[1].checked
    if(a==true){
        if(document.getElementsByTagName('button')[0].innerHTML=='Show more'){
        document.getElementById('user1HiddenFields').style.display= 'inline';
        let bat = document.getElementsByTagName('button')[0]
        bat.innerHTML= "Hide it";
        }
        else if (document.getElementsByTagName('button')[0].innerHTML=='Hide it'){
            document.getElementById('user1HiddenFields').style.display= 'none';
            let bat = document.getElementsByTagName('button')[0]
            bat.innerHTML= "Show more";
        }
    }
   
}




function lockedProfile2() {
    let a = document.getElementsByName('user2Locked')[1].checked
    if(a==true){
        if(document.getElementsByTagName('button')[1].innerHTML=='Show more'){
        document.getElementById('user2HiddenFields').style.display= 'inline';
        let bat = document.getElementsByTagName('button')[1]
        bat.innerHTML= "Hide it";
        }
        else if (document.getElementsByTagName('button')[1].innerHTML=='Hide it'){
            document.getElementById('user2HiddenFields').style.display= 'none';
            let bat = document.getElementsByTagName('button')[1]
            bat.innerHTML= "Show more";
        }
    }
   
}


function lockedProfile3() {
    let a = document.getElementsByName('user3Locked')[1].checked
    if(a==true){
        if(document.getElementsByTagName('button')[2].innerHTML=='Show more'){
        document.getElementById('user3HiddenFields').style.display= 'inline';
        let bat = document.getElementsByTagName('button')[2]
        bat.innerHTML= "Hide it";
        }
        else if (document.getElementsByTagName('button')[2].innerHTML=='Hide it'){
            document.getElementById('user3HiddenFields').style.display= 'none';
            let bat = document.getElementsByTagName('button')[2]
            bat.innerHTML= "Show more";
        }
    }
   
}