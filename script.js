

//-----------------------------------------------
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
    if (clickCount <= 5) {
        const yesButton = document.querySelector('.yes');
        yesButton.style.width = `${parseInt(yesButton.style.width || 100) * 2}px`;
        yesButton.style.height = `${parseInt(yesButton.style.height || 50) * 2}px`;
    } else {
        document.querySelector('.yes').style.width = '100%';
        document.querySelector('.yes').style.height = '100%';
        document.querySelector('.yes').style.position = 'fixed';
        document.querySelector('.yes').style.top = '0';
        document.querySelector('.yes').style.left = '0';
        document.querySelector('.yes').style.zIndex = '9999';
        document.querySelector('.yes').innerText = 'Yes';
        document.querySelector('.yes').addEventListener('click', function() {
            window.location.reload();
        });
    }
});

document.getElementById("yesID").addEventListener("click", function() {
    document.querySelector('.panel').style.display = 'block';
    document.querySelector('.first-panel').style.display = 'none';
});

