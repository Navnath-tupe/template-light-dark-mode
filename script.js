
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function toggleLightDarkMode(isDark) {
    isDark === DARK_THEME ? document.documentElement.setAttribute('data-theme', DARK_THEME) : document.documentElement.setAttribute('data-theme', LIGHT_THEME)
    nav.style.backgroundColor = isDark === DARK_THEME ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark === DARK_THEME ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark === DARK_THEME ? 'Dark' : 'Light';
    isDark === DARK_THEME ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark === DARK_THEME ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);

}



function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function switchTheme(event) {
    if(event.target.checked) {
        localStorage.setItem('theme', DARK_THEME);
        toggleLightDarkMode(DARK_THEME);
    } else {
        localStorage.setItem('theme', LIGHT_THEME);
        toggleLightDarkMode(LIGHT_THEME);
    }
}

// Event listner
toggleSwitch.addEventListener('change', switchTheme);

// Local storage
const currentTheme = localStorage.getItem('theme');

if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === DARK_THEME) {
        toggleSwitch.checked = 'true';
        toggleLightDarkMode(DARK_THEME);
    }
}