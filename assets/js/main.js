/* ヘッダーのスクロール処理 */

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.classList.add('is-scrolled');
    } else {
        header.classList.remove('is-scrolled');
    }
});

/* ハンバーガーメニュー */

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header__nav');
const header = document.querySelector('.header');

function closeMenu() {
    hamburger.classList.remove('is-active');
    nav.classList.remove('is-open');
    header.classList.remove('is-menu-open');

    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'メニューを開く');
}

hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');

    hamburger.classList.toggle('is-active', isOpen);
    header.classList.toggle('is-menu-open', isOpen);

    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute(
        'aria-label',
        isOpen ? 'メニューを閉じる' : 'メニューを開く'
    );
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeMenu();
    }
});