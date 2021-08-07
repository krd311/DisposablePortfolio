function image1Focus(){
	let link = document.getElementsByClassName("right-column")[0];
	console.log(link);
	let image = link.getElementsByClassName("image1");
	image[0].style.gridColumnStart = '1';
	image[0].style.gridColumnEnd = "3";

	//image[0].setAttribute("onClick", "resetImage1Size()");
}

function resetImage1Size(){
	let link = document.getElementsByClassName("right-column")[0];
	console.log("oh");
	let image = link.getElementsByClassName("image1");
	image[0].style.gridColumnStart = '1';
	image[0].style.gridColumnEnd = "2";
}
