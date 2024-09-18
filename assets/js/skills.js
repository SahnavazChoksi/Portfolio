document.querySelectorAll('.coin').forEach(coin => {
    coin.addEventListener('click', () => {
        coin.classList.add('flip');

        // Remove the flip class after the animation to allow repeated clicks
        setTimeout(() => {
            coin.classList.remove('flip');
        }, 800);
    });
});

  