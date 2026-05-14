document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (mobileMenuBtn && mobileNav) {
        const menuIcon = mobileMenuBtn.querySelector('.material-symbols-outlined');

        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = !mobileNav.classList.contains('hidden');
            
            if (isExpanded) {
                mobileNav.classList.add('hidden');
                menuIcon.textContent = 'menu';
            } else {
                mobileNav.classList.remove('hidden');
                menuIcon.textContent = 'close';
            }
        });
    }
});
