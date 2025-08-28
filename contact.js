// JS สำหรับซ่อน/แสดง header ขณะ scroll
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 50) {
        // scroll ลง → ซ่อน header
        header.style.top = '-120px';
    } else {
        // scroll ขึ้น → แสดง header
        header.style.top = '0';
    }
    lastScroll = currentScroll;
});
