document.getElementById('revealButton').addEventListener('click', function() {
    var message = document.getElementById('specialMessage');
    if (message.style.display === 'none') {
        message.style.display = 'block';
        this.textContent = "💗  ";
    } else {
        message.style.display = 'none';
        this.textContent = "Click Here";
    }
});

