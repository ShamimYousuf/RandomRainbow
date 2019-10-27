// IIFE
(function d(){

let addRandomColor = function(){

		let hexletters = new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');

		let hex = '#';
		for(i=0;i<6;i++){
			hex = hex + hexletters[Math.floor(Math.random() * 16)];
		}

		document.querySelector(".color-swatch").style.backgroundColor = hex;
		document.querySelector(".hex-value").value = hex;

		let rgb = hexToRgb(hex).g;

		document.querySelector(".RGB-value").innerHTML = `RGB value : ${rgb}`;
		
}


let hexToRgb = function(hex) {
  
  	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  
  	return result ? {
    	r: parseInt(result[1], 16),
    	g: parseInt(result[2], 16),
    	b: parseInt(result[3], 16)
  	} : null;
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