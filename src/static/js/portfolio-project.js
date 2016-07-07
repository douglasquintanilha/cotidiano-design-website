var projectId;
var logoTop = $(".logo").css("top");
var logoWidth = parseInt($(".logo").css("width"),10);

// Inicializing multiple instaces of swiper
$(document).ready(function () {
	$(".swiper-container").each(function(index,element){
		var $this = $(this);

		var swiper = new Swiper(".swiper-"+index, {
			// Optional parameters
		    direction: 'horizontal',
		    loop: true,

		    // Controls
		    keyboardControl: true,
		   
		    // If we need pagination
		    pagination: '.swiper-pagination',
		    speed: 700,

		    // Preloading images
		    preloadImages: false,
		    lazyLoading: true,
		    lazyLoadingInPrevNext: true,
		    
		    // Navigation arrows
		    nextButton: $this.find(".arrow-right")[0],
		    prevButton: $this.find(".arrow-left")[0]

		});
	})
});	
      



$(".portfolio-project").on("click",function(){
	projectId = $(this).data("id");
	
	//Coisas que somem
	setTimeout(escondePortfolio(),1000);
	
	//Coisas que aparecem
	setTimeout(mostraProjetos(projectId), 400);

});


$(".arrow-back").on("click",function(){
	projectPhoto = 0;
	escondeProjetos();
	mostraPortfolio()
});

function mostraProjetos(swiperId){

	$(".arrow-back").css({
			"display" :"block",
		}).animate({
			"opacity" : "1"
		},1000);

	$(".arrow-left").css({
			"display" :"block",
		}).animate({
			"opacity" : "1"
		},1000);

	$(".arrow-right").css({
			"display" :"block",
		}).animate({
			"opacity" : "1"
		},1000);
	
	$(".swiper-"+swiperId).css(
		{
			"left" : "0px"
		});

	$(".logo").animate({
		"top": "50px",
		"width": logoWidth * 0.8

	},"ease-out");

	$(".box-shadow").animate({
		"opacity": '1'
	});

}

function escondeProjetos(){

	var opacityZeroCss = {
			"opacity" : "0"
		};
	var displayNoneCss ={
			"display" :"none",
		}; 	

	$(".swiper-container").css(
		{	
			"left" : "100%"
		});

	$(".arrow-back").animate(opacityZeroCss,300,function(){
		//$(this).css(displayNoneCss);
	});

	$(".arrow-left").animate(opacityZeroCss,1000,function(){
		//$(this).css(displayNoneCss);
	});

	$(".arrow-right").animate(opacityZeroCss,1000,function(){
		//$(this).css(displayNoneCss);
	});

	$(".logo").animate({
		"top": logoTop,
		"width": logoWidth
	});

	$(".box-shadow").animate({
		"opacity": '0'
	});
}


function escondePortfolio(){
	var displayNoneCss ={
			"display" :"none",
		}; 

	$(".portfolio-images").animate({
		"opacity": 0,
	},function(){
		$(this).css(displayNoneCss);
	});

	$(".portfolio-title").animate({
		"opacity": 0,
		"left": "-20px"
	},function(){
		$(this).css(displayNoneCss);
	});

  	$(".top-pattern").animate({
		"opacity": 0,
		"top": "-20px"
	},function(){
		$(this).css(displayNoneCss);
	});

  	$(".footer-pattern").animate({
		"opacity": 0,
		"bottom": "-20px"

	},function(){
		$(this).css(displayNoneCss);
	});

  	$(".contact").animate({
		"opacity": 0,
		"left": "-20px"
	},function(){
		$(this).css(displayNoneCss);
	});
}

function mostraPortfolio(){
	$(".portfolio-images").css({
		"display": "block"
	}).animate({
		"opacity": 1
	});

	$(".portfolio-title").css({
		"display": "block"
	}).animate({
		"opacity": 1,
		"left": "0"
	});

  	$(".top-pattern").css({
		"display": "block"
	}).animate({
		"opacity": 1,
		"top": "0"
	});

  	$(".footer-pattern").css({
		"display": "block"
	}).animate({
		"opacity": 1,
		"bottom": "0"
	});

	$(".contact").css({
		"display": "block"
	}).animate({
		"opacity": 1,
		"left": "0px"
	});
}