document.getElementById('year').innerText = new Date().getFullYear();

const cards = document.querySelectorAll('.card-item');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.backgroundColor =  '#eaeaea'
    })
    card.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'var(--card)'
    })
})