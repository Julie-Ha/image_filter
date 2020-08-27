const img = document.getElementById('img');
const filterControls = document.querySelectorAll('input[type=range]');
const cancelButton = document.getElementById('cancelButton');
const changeImageButton = document.getElementById('changeImageButton');

const nbImage = 4;

let currentImage = Math.floor(Math.random() * nbImage);
img.style.background = "url(./images/image" + currentImage + ".jpg) center/cover";

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

changeImageButton.addEventListener('click', () => {
    let newImageId = Math.floor(Math.random() * nbImage);

    while (newImageId == currentImage) {
        newImageId = Math.floor(Math.random() * nbImage);
    }

    currentImage = newImageId;
    img.style.background = "url(./images/image" + newImageId + ".jpg) center/cover";
    img.style.transition = "0.5s";
});