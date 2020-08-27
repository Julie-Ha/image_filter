const img = document.getElementById('img');
const filterControls = document.querySelectorAll('input[type=range]');

filterControls.forEach(function(item, index) {
	item.addEventListener('input', () => {
		applyFilters();
	})
});

function applyFilters() {
	let computedFilters = '';
	filterControls.forEach(function(item, index) {
		computedFilters += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ') ';
		let span = document.getElementById(item.getAttribute('data-filter'));
		span.innerText = item.value + ((item.getAttribute('data-scale') == 'deg') ? '°' : '%');
	});
	img.style.filter = computedFilters;
}