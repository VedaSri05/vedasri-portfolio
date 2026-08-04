const scrollProgress = document.getElementById("scrollProgress");


window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    scrollProgress.style.width = progress + "%";

});

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";
        backToTop.style.transform = "translateY(0)";

    } else {

        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";
        backToTop.style.transform = "translateY(20px)";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const revealItems =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    const trigger =
        window.innerHeight * 0.85;

    revealItems.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

window.addEventListener(
    "load",
    revealOnScroll
);

const hero =
    document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const offset = window.scrollY;

    hero.style.backgroundPositionY =
        offset * 0.4 + "px";

});\

let previousScroll = window.pageYOffset;

window.addEventListener("scroll", () => {

    const currentScroll =
        window.pageYOffset;

    if (currentScroll > previousScroll &&
        currentScroll > 150) {

        header.style.transform =
            "translateY(-100%)";

    } else {

        header.style.transform =
            "translateY(0)";

    }

    previousScroll = currentScroll;

});

const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                }

            });

        },

        {

            threshold: 0.2

        }

    );

document
    .querySelectorAll(".section")
    .forEach(section => {

        sectionObserver.observe(section);

    });