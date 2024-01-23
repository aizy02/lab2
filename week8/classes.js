class ProfileImage {
    constructor(element) {
        this.element = element;
        this.attachEvents();
    }

    attachEvents() {
        this.element.addEventListener("click", () => this.rotate());
        this.element.addEventListener("mouseover", () => this.scaleUp());
        this.element.addEventListener("mouseout", () => this.scaleDown());
    }

    rotate() {
        this.element.style.transform = "rotate(360deg)";
    }

    scaleUp() {
        this.element.style.transform = "scale(1.1)";
    }

    scaleDown() {
        this.element.style.transform = "scale(1)";
    }
}

// Initialize the ProfileImage class for your profile image
document.addEventListener('DOMContentLoaded', function () {
    var profileImage = new ProfileImage(document.querySelector(".profile img"));
});
