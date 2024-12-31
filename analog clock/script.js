const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const deg = 6; // Each minute/second represents 6 degrees (360/60)
const setClock = () => {
    const updateTime = () => {
        let day = new Date();
        let hh = day.getHours() * 30; // Each hour is 30 degrees (360/12)
        let mm = day.getMinutes() * deg; // Each minute is 6 degrees
        let ss = day.getSeconds() * deg; // Each second is 6 degrees

        hour.style.transform = `rotateZ(${hh + mm / 12}deg)`; // Smooth hour hand transition
        min.style.transform = `rotateZ(${mm}deg)`; // Minute hand
        sec.style.transform = `rotateZ(${ss}deg)`; // Second hand
    };

    updateTime(); // Initialize clock immediately
    setInterval(updateTime, 1000); // Update clock every second
};
setClock();

// Theme Switcher
const switchTheme = (evt) => {
    const switchBtn = evt.target;
    if (switchBtn.textContent.toLowerCase() === 'light') {
        switchBtn.textContent = 'dark';
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        switchBtn.textContent = 'light';
        document.documentElement.setAttribute('data-theme', 'light');
    }
};

const switchModeBtn = document.querySelector('.switch-btn');
switchModeBtn.addEventListener('click', switchTheme, false);

// Set initial theme
let currentTheme = 'dark'; // Default theme
document.documentElement.setAttribute('data-theme', currentTheme);
switchModeBtn.textContent = currentTheme;
