function changeColors() {
    const body = document.querySelector('body');
    const title = document.getElementById('main-title');

    body.style.backgroundColor = getRandomColor();
    title.style.color = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function highlightBox(box) {
    box.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
}

function unhighlightBox(box) {
    box.style.boxShadow = 'none';
}
