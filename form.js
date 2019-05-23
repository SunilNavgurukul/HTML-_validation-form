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

var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.json())

var all_detail = []
app.get('/process',(req, res) => {
    var sunil = req.query;
    if (fs.existsSync('all_detail.json')) {
        let contents = fs.readFileSync("all_detail.json");
        let data = JSON.parse(contents);
        data.push(sunil);
        let json = JSON.stringify(data, null, 2);    
        fs.writeFileSync('all_detail.json', json);
        return res.send(sunil)
    }
    let json = JSON.stringify(all_detail, null, 2);    
    fs.writeFileSync('all_detail.json', json);
    return res.send(sunil)
    // res.send(sunil);
});

app.listen(1234);
