var projectId = 0;
var projectPhotoId = 0;

var project0Size = 9;
var project1Size = 6;
var project2Size = 3;
var project3Size = 4;


$(document).ready(function () {
//initialize swiper when document ready  
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    pagination: '.swiper-pagination',
    
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })        
});

$(".portfolio-project").on("click",function(){
	projectId = $(this).data("id");

	$(".portfolio-title").addClass("portfolio-fade");
	
	//Coisas que somem
	escondePortfolio();
	
	//Coisas que aparecem
	mostraProjetos();
	
});


function mostraProjetos(){
	setTimeout(function(){
		$("header").css(
			{	
				"background-color" :"transparent"
			});
		$("html").css(
			{
				"height" : "100%",
				"box-shadow" : "inset 0px 0px 20px 500px rgba(0, 0, 0, 0.60)"
			});

		/*
		$(".portfolio-project-show").attr("src",'/static/images/projects/'+projectId+'/0.jpg').css(
			{
				"display" : "block"
			});
		*/
		$(".swiper-container").css(
			{
				"left" : "0px"
			});
	},1000);

}

function escondeProjetos(){
	$("html").css(
		{	
			"background-image" :"url('/static/images/background-picture.jpg')",
			"box-shadow" : "none"
		});

	$(".arrow-back").css({
			"display" :"none",
			"opacity" : "0"
		});

	$(".arrow-left").css({
			"display" :"none",
			"opacity" : "0"
		});

	$(".arrow-right").css({
			"display" :"none",
			"opacity" : "0"
		});
}


function escondePortfolio(){
	setTimeout(function(){
		$(".portfolio-images").css("display","none");
		$(".portfolio-title").css("display","none");
	  	$(".top-pattern").css("display","none");
	  	$(".footer-pattern").css("display","none");
	  	$(".menu").css("display","none");
	  	$(".contact").css("display","none");

	},1000);
	
}

function mostraPortfolio(){
	$(".portfolio-images").removeClass("portfolio-fade");
	$(".portfolio-title").removeClass("portfolio-fade");

	$(".portfolio-images").css("display","block");
	$(".portfolio-title").css("display","block");
  	$(".top-pattern").css("display","block");
  	$(".footer-pattern").css("display","block");
  	$(".menu").css("display","block");
	$(".contact").css("display","block");

}