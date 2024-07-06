onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

document.addEventListener('wheel', function(event) {
    event.preventDefault();
}, { passive: false });

let clickCount = 0;

document.getElementById("noID").addEventListener("click", function() {
    clickCount++;
    const yesButton = document.querySelector('.yes');

    if (clickCount < 5) {
        yesButton.style.width = `${parseInt(yesButton.style.width || 100) * 2}px`;
        yesButton.style.height = `${parseInt(yesButton.style.height || 50) * 2}px`;
    } else if (clickCount === 5) {
        yesButton.style.position = 'absolute';
        yesButton.style.top = '0%';
        yesButton.style.left = '0%';
        yesButton.style.width = '100%';
        yesButton.style.height = '100%';
    } 
});

document.getElementById("yesID").addEventListener("click", function() {
    document.querySelector('.panel').style.display = 'block';
    document.querySelector('.first-panel').style.display = 'none';
});
