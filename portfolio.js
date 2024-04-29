document.querySelector(".btn").addEventListener("click",function()
{
   
    if(document.querySelector(".text").style.display==="none"||document.querySelector(".text").style.display==="")
      {    document.querySelector(".text").style.display="block";
    document.querySelector(".btn").innerHTML="Show less"
}else
{
 document.querySelector(".text").style.display="none";
 document.querySelector(".btn").innerHTML="Show more";
}
});
