const img = document.getElementById('img');
const brightnessRange = document.getElementById('brightnessRange');
const brightnessDisplay = document.getElementById('brightnessDisplay');

brightnessRange.addEventListener('input', () => {
	img.style.filter = 'brightness('+ brightnessRange.value + '%)';
	brightnessDisplay.innerText = brightnessRange.value + '%';
})