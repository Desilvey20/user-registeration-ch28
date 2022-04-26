// selecting the txtemail

//bad practice
//document.getElementById("txtemail");
//document.getElementById("txtemail").value="";

//best practice
//let email=document.getElementById("txtemail");

//selectors type:
// #id, .class,tag
//jQuery = $

//selecting by id
email=$("#txtemail").val();
console.log(email);

//selecting by claassname
//let formcontrol = document.getElementsByClassName("form-control")
//console.log(formcontrol);
//for(let i=0;i<formcontrol.length;i++){
 //   formcontrol[i].style.display="none";
// }
let formcontrol = $(".form-control");
console.log(formcontrol);
    


//selecting by tagname
//let labels = document.getElementsByTagName("label");
//console.log(labels)
let labels = $("labels");
console.log(labels);