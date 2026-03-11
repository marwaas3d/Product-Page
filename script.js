let allLi = document.querySelectorAll("ul li a");

allLi.forEach(function(ele){
    ele.addEventListener("click",function(e){

       allLi.forEach(function(ele){
         ele.classList.remove("active")
       })

       this.classList.add("active");
    })
});