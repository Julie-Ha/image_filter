const img = document.getElementById('img');
const filterControls = document.querySelectorAll('input[type=range]');
const cancelButton = document.getElementById('cancelButton');
const changeImageButton = document.getElementById('changeImageButton');

filterControls.forEach(function(item, index) {
    item.addEventListener('input', () => {
        applyFilters();
    });
});

function applyFilters(apply = true) {
    let computedFilters = '';
    filterControls.forEach(function(item, index) {
        if (!apply) item.value = item.getAttribute('data-default');
        computedFilters += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ') ';
        let span = document.getElementById(item.getAttribute('data-filter'));
        span.innerText = item.value + ((item.getAttribute('data-scale') == 'deg') ? '°' : '%');
    });
    img.style.filter = computedFilters;
}

cancelButton.addEventListener('click', () => {
    applyFilters(false);
});