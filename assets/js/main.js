/* ヘッダーのスクロール処理 */

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.classList.add('is-scrolled');
    } else {
        header.classList.remove('is-scrolled');
    }
});