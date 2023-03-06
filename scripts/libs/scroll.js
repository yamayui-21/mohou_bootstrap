class IntersectionObserverClass {
    constructor(elements, addedClass) {
        this.trimarry = elements.map(item => item.substring(1));
        this.elements = elements.map(element => document.querySelectorAll(element));
        this.addedClass = addedClass;
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const threshold = entry.intersectionRatio;
                if (threshold > 0.15) {
                    const classes = Array.from(entry.target.classList);
                    
                    classes.map(class_name => {
                      const  index = this.trimarry.indexOf(class_name);
                      if(index != -1){
                        entry.target.classList.add(this.addedClass[index]);
                      }
                    });
                }
            });
        }, {
            threshold: 0.15
        });
    }
    startObserver() {
        this.elements.forEach((element,index) => {
            element.forEach(el => {
                this.observer.observe(el);
            });
        });
    }
}
const observerClass = new IntersectionObserverClass(
    [
    '.animation-under'
    ,'.animation-left'
    ,'.animation-right'
    ,'.animation-gage-html'
    ,'.animation-gage-css'
    ,'.animation-gage-js'
    ,'.animation-gage-php'
    ,'.animation-gage-cms'
    ,'.animation-gage-photoshop'
    ]
    , 
    [
    'active-under'
    ,'active-left'
    ,'active-right'
    ,'active-gage-html'
    ,'active-gage-css'
    ,'active-gage-js'
    ,'active-gage-php'
    ,'active-gage-cms'
    ,'active-gage-photoshop'
    ]);
observerClass.startObserver();


$(document).ready(function(){
    $('.nav-link').on('click', function(e){
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 200);
    });
  });
