document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("section, main");

    function revealElements() {
        elements.forEach((el) => {
            const elTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elTop < windowHeight - 50) {
                el.classList.add("show");
            }
        });
    }

    // Executa ao carregar a página e ao rolar
    revealElements();
    window.addEventListener("scroll", revealElements);
});