let usernameNode,passdNode;
let errNode;

$(document).ready(function(){
    $('#signupform').hide(0)
    usernameNode=$('#usrname');
    passdNode=$('passd');
    errNode=$('#e1');
    let btnNode=$('#login');
    btnNode.click(function(){

        if(btnNode.val()==='To Sign Up Click Here'){
                $('#loginform').hide(0, function(){
                    btnNode.val('To Login Click Here');     // btnNode.value='SHOW'
                    $('#signupform').show(0);
                });
        }    
        else{
            $('#loginform').show(0, function(){
                btnNode.val('To Sign Up Click Here');
                $('#signupform').hide(0)    
            });
        }         
    });
    usernameNode.blur(()=>v1());
    passdNode.blur(()=>v2());
    $("#lform").submit(()=>vform());
});


function v1(){
    errNode.html(" ");
    if(usernameNode.val()!='Demo'){
        errNode.html("<small>Enter Correct UserName or Password</small>");
        usernameNode.css({border:"2px solid red"});
        return false;
    }
    else{
        usernameNode.css({border:"2px solid green"});
        return true;
    }
}
function v2(){
    errNode.html(" ");
    if(passdNode.val()!='Demo@123'){
        errNode.html("<small>Enter Correct UserName or Password</small>");
        passdNode.css({border:"2px solid red"});
        return false;
    }
    else{
        passdNode.css({border:"2px solid green"});
        return true;
    }
}
function vform(){
    let v=v1();
    let vl=v2();
    return (v && vl); 
}