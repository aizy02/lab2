function typeWriter(elementId, text) {
    var element = document.getElementById(elementId);
    var index = 0;

    element.innerHTML = "";

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    type();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
