


jQuery(document).ready(function(){
	
	
	
	jQuery(".owl-carousel").owlCarousel({
		
		'items':1,
		'loop':true,
		'nav':true,
		'autoplay':false,
		'autoplayTimeout':2500,
		'autoplayHoverPause':true,
		'responsiveClass':true,
		responsive:{
        0:{
            'items':1,
            'nav':true
        },
        600:{
            'items':1,
            'nav':false
        },
        1000:{
            'items':1,
            'nav':false
            
        }
    }
		
	});
	
	
	
	jQuery('.responsive').slick({
	  'dots': true,
	  
	  'infinite': true,
	  'autoplay':false,
	  'slidesToShow':4,
	  'slidesToScroll': 4,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			'slidesToShow': 3,
			'slidesToScroll':3,
			'infinite': true,
			'dots': true
		  }
		},
		{
		  'breakpoint': 600,
		  settings: {
			'slidesToShow': 2,
			'slidesToScroll': 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			'slidesToShow': 1,
			'slidesToScroll': 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
	
	jQuery(".scroll-up").click(function(){
		
		
		jQuery("html").animate({'scrollTop':'0'},1000);
		
		return false;
	});
	
	jQuery(window).scroll(function(){
		
		var utd = jQuery(window).scrollTop();
		
		if(utd>80){
			
			jQuery(".header-area").addClass("fixed");
		}
		else{
			
			jQuery(".header-area").removeClass("fixed");
		}
	
	});
	
	jQuery(".navbar").click(function(){
		
		jQuery(".header-menu ul").slideToggle();
		
	});
	
	jQuery(".scroll-up a").hide();
	
	jQuery(window).scroll(function(){
		
		var utd = jQuery(window).scrollTop();
		
		if(utd>150){
			
			jQuery(".scroll-up a").show();
		}
		
		else{
			jQuery(".scroll-up a").hide();
		
		}
		
	});
	
	jQuery(window).resize(function(){
		
		var resizescreen = jQuery(window).width();
		
		if(resizescreen>768){
			
			jQuery(".header-menu ul").removeAttr("style");
		}
		
	});
	

	
	
});