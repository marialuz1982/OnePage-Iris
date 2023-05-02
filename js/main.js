var check = document.querySelector(".check")
check.addEventListener('click',idioma)

function idioma (){
   let id=check.ariaChecked
   if(id==true){
    location.href="../html/index_esp.html"
   }else{
    location.href="../html/index_port.html"
   }
}