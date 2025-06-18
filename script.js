// dark mode 

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

// Set theme based on saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    html.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    themeIcon.classList.replace('text-dark', 'text-light');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-bs-theme');

    if (currentTheme === 'light') {
        html.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeIcon.classList.replace('text-dark', 'text-light');
    } else {
        html.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeIcon.classList.replace('text-light', 'text-dark');
    }
});