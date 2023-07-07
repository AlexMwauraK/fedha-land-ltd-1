//preloader
var loader = document.getElementById("preloader");

window.addEventListener("load" , function(){
	loader.style.display = "none";
})

document.addEventListener('DOMContentLoaded', function(){
	var nav = document.getElementById("nav");
	var current_pos = nav.offsetTop;
	window.onscroll = function(){
		var window_pos = document.documentElement.scrollTop;
		if(window_pos>=current_pos){
			nav.classList.add("sticky");
		}
		else{
			nav.classList.remove("sticky");
		}
	}
} )




// Testimonial slide 
$('.testimonials-container').owlCarousel({
	loop:true,
	autoplay:true,
	autoplayTimeout:6000,
	margin:10,
	nav:true,
	navText:["<i class='fa-solid fa-arrow-left'></i>",
			 "<i class='fa-solid fa-arrow-right'></i>"],
	responsive:{
		0:{
			items:1,
			nav:false
		},
		600:{
			items:1,
			nav:true
		},
		768:{
			items:2
		},
	}
  })
  