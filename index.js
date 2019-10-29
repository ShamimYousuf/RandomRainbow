// IIFE
(function (){

let addRandomColor = function(){

		let RGB = generateRandomRGBvalues();
		let hex = convertRGBtoHex(RGB);

		document.querySelector(".color-swatch").style.backgroundColor = hex;
		document.querySelector(".hex-value").value = hex;

		document.querySelector(".RGB-value").innerHTML = `RGB value : ${RGB.red} ${RGB.green} ${RGB.blue}`;
		
}

let convertRGBtoHex = function(RGBobj){
	
	let hexRed = Number(RGBobj.red).toString(16);
	let hexGreen = Number(RGBobj.green).toString(16);
	let hexBlue = Number(RGBobj.blue).toString(16);

	return `#${hexRed}${hexGreen}${hexBlue}`
}

let generateRandomRGBvalues = function(){

	let randomColourCode = function(){
		return Math.floor((Math.random() * 256) + 1)
	}

	let red = randomColourCode();
	let green = randomColourCode();
	let blue = randomColourCode();

	let RGBobj = {
		red: red,
		green: green,
		blue: blue
	}

	return RGBobj;
}

let copyToClipboard = function() {
	
	let copyText = document.querySelector('.hex-value');
	copyText.select();
	document.execCommand("copy");

}


// Add color after document is loaded and ready
window.addEventListener('load', addRandomColor);

//button generate new color
document.querySelector('.new-color-button').addEventListener('click', addRandomColor);

//copy to clipboard listener
document.querySelector('.copy-hex-button').addEventListener('click', copyToClipboard);
	

}());