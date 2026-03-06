const themes = ['theme-dark', 'theme-light'];

function applyTheme(themeName) {
    themes.forEach(t => document.body.classList.remove(t));
    document.body.classList.add(themeName);
    localStorage.setItem('theme', themeName);
}

function cycleTheme() {
    let currentIndex = themes.findIndex(t => document.body.classList.contains(t));
    const nextIndex = (currentIndex + 1) % themes.length;
    applyTheme(themes[nextIndex]);
}

function goHome() {
    let result = text.link("https://www.w3schools.com");
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || themes[0];
    applyTheme(savedTheme);

    const btn = document.getElementById('btn-palette');
    if (btn) {
        btn.addEventListener('click', cycleTheme);
    }

});