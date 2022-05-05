function login(){
    //get values from the form
    let inputemail=$("#txtemail").val();
    let inputpassword=$("#txtpassword").val();
    //use a flag
    let flag=false;
    //get the users from LS
    let userlist=readusers();
    //travel the userlist
    for(let i=0;i<userlist.length;i++){
        //recommened way
        let user=userlist[i];
        if(user.email===inputemail && user.password===inputpassword){
            flag=true;
            window.location="users.HTML";
        }
        if(!flag){
            $("#alertError").removeClass("hide");
            setTimeout(function(){
                $("#alertError").addClass("hide");
            },3000);       
         }

    }

}

function init(){
    $("#loginbtn").click(login);

}

window.onload=init