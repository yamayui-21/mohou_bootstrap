

const toggleBtn = document.querySelector('#toggle-animation');
const slideOut = document.querySelector('.slide-out');

let scroll_bool = true;

const toggleSlide = function() {
   slideOut.classList.toggle('slide-out');
   slideOut.classList.toggle('slide-in');
   scroll_bool = !scroll_bool;
   if(scroll_bool){
      document.body.style.overflow = "hidden";
      setTimeout(()=>{
         document.body.style.overflow = "scroll";
      },1000);
     
   }else{
      document.body.style.overflow = "hidden";
   }
   console.log(scroll_bool);
   
};

toggleBtn.addEventListener('click', toggleSlide);

