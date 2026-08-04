const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");

    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle?.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );

    themeToggle.innerHTML = isLight
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';

});

emailjs.init("ww9e7J1_jdmrwwpnL");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const submitButton =
        document.querySelector(".submit-btn");

    submitButton.disabled = true;

    submitButton.innerHTML =
        "Sending...";

    emailjs.sendForm(

        "service_6g66j4s",

        "template_r0ochvl",

        this

    )

    .then(() => {

        alert("Message sent successfully!");

        contactForm.reset();

    })

    .catch((error) => {

        console.error(error);

        alert("Failed to send message.");

    })

    .finally(() => {

        submitButton.disabled = false;

        submitButton.innerHTML =

            `Send Message
            <i class="fa-solid fa-paper-plane"></i>`;

    });

});

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        const radius = diameter / 2;

        circle.style.width = circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top =
            `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        this.appendChild(circle);

    });

});

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-category, .highlight-card, .timeline-item"
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

});

document.querySelectorAll("img").forEach((img) => {

    img.onerror = function () {

        this.src =
            "https://placehold.co/800x500/1E293B/FFFFFF?text=Project";

    };

});

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        const radius = diameter / 2;

        circle.style.width = circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top =
            `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        this.appendChild(circle);

    });

});
