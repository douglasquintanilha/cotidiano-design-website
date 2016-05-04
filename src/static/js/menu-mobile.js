document.querySelector(".menu-open").onclick = function() {
	if(document.documentElement.classList.contains("menu-active")){
		document.documentElement.classList.remove("menu-active");	
	}else{
		document.documentElement.classList.add("menu-active");		
	}
	
}

document.documentElement.onclick = function(event){
	if(event.target === document.documentElement){
		document.documentElement.classList.remove("menu-active");	
	}
};