var randonRainbowAppCreator =  function() {

	const createHeader = () => {
		let header = document.createElement('HEADER');
		document.getElementById('main').appendChild(header);

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

	return {
		createHeader: createHeader,
		createApp: createApp
	}
}

randonRainbowAppCreator().createHeader();
randonRainbowAppCreator().createApp();