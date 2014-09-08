var imageSet=[];
var imageSource=["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
var size = 5;
var increase = 0;

//preload images to imageSet

	for(var i = 0; i < 5; i++){
		imageSet[i] = new Image();
		imageSet[i].src = imageSource[i];
		
	}


//rotate image every 5 seconds
function rotate(){
	document.getElementById("imageBox").style.backgroundImage='url(' + imageSet[(increase++)%5].src + ')';
	setTimeout(function(){
		rotate();
	}, 3000)
}
rotate();