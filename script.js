
const gift = document.getElementById('gift');
const giftModal = document.getElementById('gift-modal');
const giftCloseBtn = document.getElementById('gift-close-btn');


const menuBtn = document.getElementById('menu-btn');
const menuModal = document.getElementById('menu-modal');
const menuCloseBtn = document.getElementById('menu-close-btn');


gift.addEventListener('click', function() {
    giftModal.style.display = 'flex';
});


giftCloseBtn.addEventListener('click', function() {
    giftModal.style.display = 'none';
});


menuBtn.addEventListener('click', function() {
    menuModal.style.display = 'flex';
});


menuCloseBtn.addEventListener('click', function() {
    menuModal.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === giftModal) {
        giftModal.style.display = 'none';
    }
    if (event.target === menuModal) {
        menuModal.style.display = 'none';
    }
});
