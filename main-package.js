let navbar=document.getElementById('navbar')
window.onscroll=()=>{
    if(this.scrollY > 400){
        navbar.classList.add('onscroll')
    }else{
        navbar.classList.remove('onscroll')

    }

}



let menu=document.getElementById("menu")
let NavUl=document.getElementById("nav-ul")

menu.onclick=()=>{
    NavUl.classList.add('active-nav')
    document.body.classList.add('no-scroll')
    
}

let menuClose=document.getElementById("menu-close")

menuClose.onclick=()=>{
    NavUl.classList.remove('active-nav')
    document.body.classList.remove('no-scroll')
    
}




  



  // احصل على اسم الصفحة الحالية
  var currentPage = window.location.href.split("/").pop();
 

  // حدد الرابط النشط باستناد إلى اسم الصفحة الحالية
  var links = document.querySelectorAll(".nav-ul li a");
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-href");
    }else{
      link.classList.remove("active-href");
    }
  }


