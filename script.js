var istatus = document.querySelector("h5")
var addfriend = document.querySelector("#add")
var remove = document.querySelector("#remove")


addfriend.addEventListener("click",function(){
    istatus.innerHTML="Friends";
    istatus.style.color="green";
   // alert("you both are now friends");
})


remove.addEventListener("click",function(){
    istatus.innerHTML="Strangers";
    istatus.style.color="Red";
    //alert("you both are not friends anymore");
})
