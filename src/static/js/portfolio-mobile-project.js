var projectId = 0;
var projectPhotoId = 0;

var project0Size = 9;
var project1Size = 1;
var project2Size = 3;
var project3Size = 1;

var projectPhoto = $(".portfolio-project-show")[0];
var mc = new Hammer(projectPhoto);

$(".portfolio-project").on("click",function(){
	projectId = $(this).data("id");

	$(".portfolio-title").addClass("portfolio-fade");
	
	//Coisas que somem
	escondePortfolio();
	
	//Coisas que aparecem
	mostraProjetos();
	
});

mc.on("swipeleft", function(ev) {
	console.log("mexeuesquerda");
	switch(projectId){
		case 0: 
			projectPhotoId = projectPhotoId - 1  < 0 ? project0Size - 1 : projectPhotoId - 1;
			break;
		case 1: 
			projectPhotoId =  projectPhotoId - 1  < 0 ? project1Size - 1: projectPhotoId - 1;
			break;
		case 2: 
			projectPhotoId =  projectPhotoId - 1  < 0 ? project2Size - 1: projectPhotoId - 1;
			break;
		case 3: 
			projectPhotoId =  projectPhotoId - 1  < 0 ? project3Size - 1: projectPhotoId - 1;
			break;
	}
	$(".portfolio-project-show").attr("src",'/static/images/projects/'+projectId+'/'+projectPhotoId+'.jpg');
});

mc.on("swiperight", function(ev) {
	
	console.log("mexeu direita");
	switch(projectId){
		case 0: 
			projectPhotoId = (projectPhotoId + 1) % project0Size;
			break;
		case 1: 
			projectPhotoId = (projectPhotoId + 1) % proje1t2Size;
			break;
		case 2: 
			projectPhotoId = (projectPhotoId + 1) % project2Size;
			break;
		case 3: 
			projectPhotoId = (projectPhotoId + 1) % project3Size;
			break;
	}
 	$(".portfolio-project-show").attr("src",'/static/images/projects/'+projectId+'/'+projectPhotoId+'.jpg');

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

		$(".portfolio-project-show").attr("src",'/static/images/projects/'+projectId+'/0.jpg').css(
			{
				"display" : "block"
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