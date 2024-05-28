document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('checkbox-input');
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (theme) => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
        toggleCheckbox.checked = theme === 'dark';
    };

    toggleCheckbox.addEventListener('change', () => {
        const newTheme = toggleCheckbox.checked ? 'dark' : 'light';
        applyTheme(newTheme);
    });

    const savedTheme = localStorage.getItem('theme') || (darkModeMediaQuery.matches ? 'dark' : 'light');
    applyTheme(savedTheme);
});
