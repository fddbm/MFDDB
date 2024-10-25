const gift = document.getElementById('gift');
const giftModal = document.getElementById('gift-modal');
const giftCloseBtn = document.getElementById('gift-close-btn');

const menuBtn = document.getElementById('menu-btn');
const menuModal = document.getElementById('menu-modal');
const menuCloseBtn = document.getElementById('menu-close-btn');


gift.addEventListener('click', function() {
    giftModal.classList.add('show');
});


giftCloseBtn.addEventListener('click', function() {
    giftModal.classList.remove('show');
});


menuBtn.addEventListener('click', function() {
    menuModal.classList.add('show'); 
});


menuCloseBtn.addEventListener('click', function() {
    menuModal.classList.remove('show');
});


window.addEventListener('click', function(event) {
    if (event.target === giftModal) {
        giftModal.classList.remove('show');
    }
    if (event.target === menuModal) {
        menuModal.classList.remove('show'); 
    }
});
