document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const headerOffset = Math.max(0, Math.min(1, scrollY / 20));
        document.documentElement.style.setProperty("--header-offset", `${1 - headerOffset}rem`);
    });
});