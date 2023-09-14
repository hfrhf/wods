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




  

  document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type   : 'loop',
        perPage: 3,
        focus  : 'center',
        direction:'rtl',
        arrows: false, // تعيين هذا الخيار إلى false لإزالة الأسهم "next" و "prev"
        fixedHeight: 400, // ارتفاع ثابت للشرائح بالبيكسل
      breakpoints: {
        992: {
          perPage: 2, // تحديد عدد الشرائح المرئية عند عرض الشاشة 992px أو أصغر
        },
      },
    }).mount();
  });

  const slider = document.querySelector('.slider-land');
  const slides = document.querySelectorAll('.slide');
  const pagination = document.querySelector('.pagination');
  let currentIndex = 0;
  let intervalId;
  const slideInterval = 5000; // تحديد فاصل زمني هنا بالمللي ثانية (5 ثوانٍ)
  
  function goToSlide(index) {
      if (index < 0) {
          index = slides.length - 1;
      } else if (index >= slides.length) {
          index = 0;
      }
  
      currentIndex = index;
      const translateX = currentIndex * slider.clientWidth;
      slider.style.transform = `translateX(-${translateX}px)`;
  
      updatePagination();
  }
  
  function createPaginationDots() {
      slides.forEach((_, index) => {
          const dot = document.createElement('button');
          dot.classList.add('dot');
          dot.addEventListener('click', () => {
              goToSlide(index);
          });
          pagination.appendChild(dot);
      });
  }
  
  function updatePagination() {
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
          if (index === currentIndex) {
              dot.classList.add('active');
          } else {
              dot.classList.remove('active');
          }
      });
  }
  
  function startAutoSlide() {
      intervalId = setInterval(() => {
          goToSlide(currentIndex + 1);
      }, slideInterval);
  }
  
  function stopAutoSlide() {
      clearInterval(intervalId);
  }
  
  createPaginationDots();
  updatePagination();
  startAutoSlide();
  


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


