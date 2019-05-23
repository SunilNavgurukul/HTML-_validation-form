function loop(){
    var email = document.getElementById("E-Mail").value;               
    var phone = document.getElementById("phonenumber").value;  
    var name = document.getElementById("name1").value;  
    var password = document.getElementById("pass").value;  
    var first = document.getElementById("fname").value; 
    var last = document.getElementById("lname").value;
     function special_chr(password,chr){
        for(var i of chr){
            if(password.includes(i)){
                return true
            }
        }return false;
      }

    if(special_chr(name,'#$')){
        document.getElementById("nerror").innerHTML="username must not contain ($ .#)";
    return false;
    }
    if(!special_chr(password,'#$@&%*')){
        document.getElementById("perror").innerHTML="password must contain ($@%*&#)";
    return false;
    }
        
    if (password.includes(" ")){
            document.getElementById('perror').innerHTML = "Password must not contain any space ";
    return false
    
    }


    if(password.toLowerCase()!=password){
        return true
    }else {
    document.getElementById('perror').innerHTML = "Password must contain atleat one Capital Alphabet";
    return false
    }


    var number=[1,2,3,4,5,6,7,8,9,0]
    for(var i of number){
        for (var b of password){
            if (i==b){
                return true
            }
        }
        document.getElementById('perror').innerHTML = "Password must at least one number";
    return false
    }
return true
}                                    

