var randonRainbowAppCreator =  function() {

	const createHeader = () => {
		let header = document.createElement('HEADER');
		document.getElementById('main').appendChild(header);

		let heading = document.createElement('H1');
		let headingText = document.createTextNode('RANDOM RAINBOW');
		heading.appendChild(headingText);
		header.appendChild(heading);
	};

	const displayHexValue = () => {

	};

	const displayRGBValue = () => {

	};

	const displayColorBox = () => {

	};

	const displayCopyHexValueButton = () => {

	};

	const displayNewColorButton = () => {

	};

	const displayChangeColorBox = () => {

	};

	const  createApp = () => {
		let app = document.createElement('DIV');
		app.setAttribute('class', 'random-rainbow-app');
		document.getElementById('main').appendChild(app);
	};

	return {
		createHeader: createHeader,
		createApp: createApp
	}
}

randonRainbowAppCreator().createHeader();
randonRainbowAppCreator().createApp();