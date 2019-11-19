var rainbowRiches = function () {

	const init = (selector) => {
		createHeader(selector);
	}


	const createHeader = (selector) => {
		let header = document.createElement('HEADER');
		document.querySelector(selector).appendChild(header);

		let heading = document.createElement('H1');
		let headingText = document.createTextNode('RANDOM RAINBOW');
		heading.appendChild(headingText);
		header.appendChild(heading);
	};

	const  createApp = () => {
		let app = document.createElement('DIV');
		app.setAttribute('class', 'random-rainbow-app');
		document.getElementById('main').appendChild(app);

		let colorSwatch = document.createElement('DIV');
		colorSwatch.setAttribute('class', 'color-swatch');
		app.appendChild(colorSwatch);

		let hexLabel = document.createElement('LABEL');
		let hexLabelText = document.createTextNode('Hex value');
		hexLabel.appendChild(hexLabelText);
		app.appendChild(hexLabel);

	};

const addRandomColor = () => {
	const RGB = generateRandomRGBvalues();
	const hex = convertRGBtoHex(RGB);
	document.querySelector(".color-swatch").style.backgroundColor = hex;
	document.querySelector(".hex-value").value = hex;
	const {red, green, blue} = RGB;
	document.querySelector(".RGB-value").innerHTML = `RGB value : ${red} ${green} ${blue}`;	
}

const convertRGBtoHex = (RGBobj) => {
	const hexRed = RGBobj.red.toString(16);
	const hexGreen = RGBobj.green.toString(16);
	const hexBlue = RGBobj.blue.toString(16);
	return `#${hexRed}${hexGreen}${hexBlue}`
}

const generateRandomRGBvalues = () => {
	const randomColourCode = () =>  Math.floor((Math.random() * 255));
	return {red: randomColourCode(), 
		    green: randomColourCode(), 
		    blue: randomColourCode()
		   };
}

const copyToClipboard = () => {
	const copyText = document.querySelector('.hex-value');
	copyText.select();
	document.execCommand("copy");
}

const changeColor = (hex) => {
	document.querySelector(".color-swatch").style.backgroundColor = hex;
	document.querySelector(".hex-value").value = hex;
}

const convertHexToRGB = (hex) => {
	const redHex = hex.slice(1,3);
	const greenHex = hex.slice(3,5);
	const blueHex = hex.slice(5,7);
	const red = parseInt(redHex, 16).toString(10);
	const green = parseInt(greenHex, 16).toString(10);
	const blue = parseInt(blueHex, 16).toString(10);
	return {red, green, blue};
}


// Add color after document is loaded and ready
window.addEventListener('load', addRandomColor);

//button generate new color
document.querySelector('.new-color-button').addEventListener('click', addRandomColor);

//copy to clipboard listener
document.querySelector('.copy-hex-button').addEventListener('click', copyToClipboard);

//change color
document.querySelector('#colorpicker').addEventListener('input', function(event) {
	const hex = event.target.value;
	document.querySelector(".color-swatch").style.backgroundColor = hex;
	document.querySelector(".hex-value").value = hex;

	const {red, green, blue} = convertHexToRGB(hex);
	document.querySelector(".RGB-value").innerHTML = `RGB value : ${red} ${green} ${blue}`;	
})

return {
	changeColor: changeColor,
	convertHexToRGB: convertHexToRGB
}

};

rainbowRiches();

