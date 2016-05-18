var projectId = 0;
var projectPhoto = 0;

var project1Size = 4;
var project2Size = 6;
var project3Size = 3;
var project4Size = 4;

$(".portfolio-project").on("click",function(){
	projectId = $(this).data("id");

	$(".portfolio-images").addClass("portfolio-fade");
	$(".portfolio-title").addClass("portfolio-fade");
	
	//Coisas que somem
	setTimeout(escondePortfolio(),1000);
	
	//Coisas que aparecem
	setTimeout(mostraProjetos(), 400);
	
});


$(".arrow-back").on("click",function(){
	escondeProjetos();
	mostraPortfolio()
});


$(".arrow-left").on("click",function(){
	switch(projectId){
		case 0: 
			projectPhoto = projectPhoto - 1  < 0 ? project1Size - 1 : projectPhoto - 1;
			break;
		case 1: 
			projectPhoto =  projectPhoto - 1  < 0 ? project2Size - 1: projectPhoto - 1;
			break;
		case 2: 
			projectPhoto =  projectPhoto - 1  < 0 ? project3Size - 1: projectPhoto - 1;
			break;
		case 3: 
			projectPhoto =  projectPhoto - 1  < 0 ? project4Size - 1: projectPhoto - 1;
			break;
	}
	 $("html").css(
	  	{	
	  		"background-image" :"url('/static/images/projects/"+ projectId +"/"+ projectPhoto +".png')",
	  	});
});

$(".arrow-right").on("click",function(){

	switch(projectId){
		case 0: 
			projectPhoto = (projectPhoto + 1) % project1Size;
			break;
		case 1: 
			projectPhoto = (projectPhoto + 1) % project2Size;
			break;
		case 2: 
			projectPhoto = (projectPhoto + 1) % project3Size;
			break;
		case 3: 
			projectPhoto = (projectPhoto + 1) % project4Size;
			break;
	}
	 $("html").css(
	  	{	
	  		"background-image" :"url('/static/images/projects/"+ projectId +"/"+ projectPhoto +".png')",
	  	});
});

function mostraProjetos(){
	$("html").css(
		{	
			"background-image" :"url('/static/images/projects/"+ projectId +"/"+ projectPhoto +".png')",
			"box-shadow" : "inset 6px 31px 61px 49px rgba(0,0,0,0.57)"
		});

	$(".arrow-back").css({
			"display" :"block",
			"opacity" : "1"
		});

	$(".arrow-left").css({
			"display" :"block",
			"opacity" : "1"
		});

	$(".arrow-right").css({
			"display" :"block",
			"opacity" : "1"
		});

}

function escondeProjetos(){
	$("html").css(
		{	
			"background-image" :"url('/static/images/background-picture.png')",
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
	$(".portfolio-images").css("display","none");
	$(".portfolio-title").css("display","none");
  	$(".top-pattern").css("display","none");
  	$(".footer-pattern").css("display","none");
  	$(".menu").css("display","none");
}

function mostraPortfolio(){
	$(".portfolio-images").removeClass("portfolio-fade");
	$(".portfolio-title").removeClass("portfolio-fade");

	$(".portfolio-images").css("display","block");
	$(".portfolio-title").css("display","block");
  	$(".top-pattern").css("display","block");
  	$(".footer-pattern").css("display","block");
  	$(".menu").css("display","block");
}