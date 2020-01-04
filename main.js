$(document).ready(function(){
  $('.js-slider').slick({  
    slidesToShow: 2,  
    centerMode: true,
    responsive: [
   
      {
        breakpoint: 1040,
        settings: {
          // centerMode: false,
        }        
      },
        {
          breakpoint: 401,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            
          }
        }  
    ]
  });
});
	