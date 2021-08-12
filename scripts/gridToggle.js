function imageFocus(imgNum){
	let link = document.getElementsByClassName("right-column")[0];
	console.log("set");
	var imageClass = "image" + (imgNum);
	let image = link.getElementsByClassName(imageClass);
	image[0].style.gridColumnStart = '1';
	image[0].style.gridColumnEnd = "4";
}

