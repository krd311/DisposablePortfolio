function imageFocus(imgNum){
	let link = document.getElementsByClassName("right-column")[0];
	console.log("set");
	var imageClass = "image" + (imgNum);
	let image = link.getElementsByClassName(imageClass);
	console.log(image);
}

