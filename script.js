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
    const anotherPanel = document.querySelector('.another_panel');
    const firstPanel = document.querySelector('.first-panel');

    if (clickCount < 4) {
        yesButton.style.width = `${parseInt(yesButton.style.width || 100) * 2}px`;
        yesButton.style.height = `${parseInt(yesButton.style.height || 50) * 2}px`;
    } else if (clickCount === 4) {
        firstPanel.style.display = 'none';
        anotherPanel.style.display = 'block';
    } 
});

document.getElementById("yesID").addEventListener("click", function() {
    document.querySelector('.panel').style.display = 'block';
    document.querySelector('.first-panel').style.display = 'none';
});


document.getElementById("yesanotherID").addEventListener("click", function() {
    document.querySelector('.panel').style.display = 'block';
    document.querySelector('.first-panel').style.display = 'none';
});