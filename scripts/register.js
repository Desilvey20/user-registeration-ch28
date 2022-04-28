//create a user constructor

//create a user display on user on console
class user{
   constructor(fname,lname,email,password,gender,age,address,phone,payment,color){
    this.fname=fname;
    this.lname=lname;
    this.email=email;
    this.password=password;
    this.gender=gender;
    this.age=age;
    this.address=address;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
   }
}

function isValid(user){
    //mandatory email and password
    let valid=true;
    $("input").removeClass("input-error")
    if(user.email.length==0){
       valid=false
       console.error("invalid email")
       $("#txtemail").addClass("input-error");
    }
    if(user.password.length==0){
       valid=false;
       console.error("Invalid password")
       $("#txtpassword").addClass("input-error");
    }

    return valid;



}


function register(){
   let inputfname= $("#txtfname").val();
   let inputlname= $("#txtlname").val();
   let inputemail=$("#txtemail").val();
   let inputpassword=$("#txtpassword").val();
   let inputgender= $("#txtgender").val();
   let inputage= $("#txtage").val();
   let inputaddress= $("#txtaddress").val();
   let inputphone= $("#txtphone").val();
   let inputpayment= $("#txtpayment").val();
   let inputcolor= $("#txtcolor").val();

//    console.log(inputfname,inputlname,inputemail,inputpassword);
   let newuser = new user(inputfname,inputlname,inputemail,inputpassword,inputgender,inputage,inputaddress,inputphone,inputpayment,inputcolor);
   if(isValid(newuser)){
      saveuser(newuser);
   }

  
}


function init(){
    console.log("init function");

    let user1 = new user("David","Desilvey","daviddesilvey@yahoo.com","thnyjm","male","29","isthmus way","760-555-5555","visa","red");
    let user2 = new user("Bella","Rodriguez","bellarod@gmail.com","edcrfvr","female","28,","isthmus way","555-555-5555","mastercard","blue");
    console.log(user1,user2);
}

window.onload=init;