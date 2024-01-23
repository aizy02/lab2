import { typeWriter, toggleDarkMode } from './functions.js';


document.addEventListener('DOMContentLoaded', function () {
    
    typeWriter("portfolioTitle", "Reejay's Portfolio");
    typeWriter("socialMediaText", "Find me on social media.");
});


document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
