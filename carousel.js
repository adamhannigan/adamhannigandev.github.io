function CarouselWidget(){

}

CarouselWidget.prototype.open = function(project, imageCount){

	//show modal & overlay

	this.project = project;
	this.current = 1;
	this.total = imageCount;

	this.renderCarousel();

	document.getElementById("carousel-overlay").style.display = 'block';
	document.getElementById("carousel-container").style.display = 'block';
}

CarouselWidget.prototype.close = function(){

	//hide modal & overlay
	document.getElementById("carousel-overlay").style.display = 'none';
	document.getElementById("carousel-container").style.display = 'none';
}

CarouselWidget.prototype.right = function(){
	this.current = this.current + 1;

	if(this.current > this.total){
		this.current = 1;
	}

	this.renderCarousel();
}

CarouselWidget.prototype.left = function(){
	this.current = this.current - 1;

	if(this.current <= 0){
		this.current = this.total;
	}

	this.renderCarousel();
}

CarouselWidget.prototype.renderCarousel = function(){
	//hide all images
	var projectImages = document.getElementsByClassName("project-carousel-image");

	for(var i = 0; i < projectImages.length; i++){
		projectImages[i].style.display = 'none';
	}

	//show the one on display
	console.log("Look for: " + ("project-" + this.project + "-image-" + this.current));
	var visibleImage = document.getElementById("project-image-" + this.project + "-" + this.current);
	visibleImage.style.display = 'block';
}
