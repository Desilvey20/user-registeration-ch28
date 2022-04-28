//click on the button and increase the counter

//function
    //variable counter
    //display the var into the ii=counter
let c=0;
let div=$("#counter");

function counter(){
    c++;
    div.text(c);

}

function init(){
    $("#div-info2").hide();

    $("#btn-counter").on('click',counter);
    $("#btn-counter").on('mouseover',function(){
    console.log("the user attemps a click");
    });


    $("#link-info1").on('mouseover',function(){
    $("#div-info2").hide();
    $("#div-info1").show();
    $(this).css('color','#222');
    });
    $("#link-info2").on('mouseover',function(){
        $("#div-info1").hide();
        $("#div-info2").show();
        $(this).css('color','#222');
        });
}

window.onload=init;

