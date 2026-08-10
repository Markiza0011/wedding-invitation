// ==============================
// Музыка
// ==============================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {

    musicBtn.addEventListener("click", async () => {

        if (music.paused) {

            try {

                await music.play();
                musicBtn.innerHTML = "❖ Музыка играет ❖";

            } catch (e) {

                console.log(e);

            }

        } else {

            music.pause();
            musicBtn.innerHTML = "✦ Включить музыку ✦";

        }

    });

}

// ==============================
// Таймер
// ==============================

const weddingDate = new Date(2026, 9, 3, 15, 0, 0).getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;

    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = String(d).padStart(2, "0");
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");

}

updateCountdown();
setInterval(updateCountdown, 1000);

// ==============================
// Кнопка наверх
// ==============================

const toTop = document.getElementById("toTop");

if (toTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            toTop.style.display = "flex";

        } else {

            toTop.style.display = "none";

        }

    });

    toTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ==============================
// Плавое появление секций
// ==============================

const sections = document.querySelectorAll("section");

if (sections.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    sections.forEach(section => {

        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "all .8s ease";

        observer.observe(section);

    });

}