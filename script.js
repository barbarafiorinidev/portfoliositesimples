document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                section.classList.add("show");
            }
        });
    }

    // Executa ao carregar a página e ao rolar
    revealSections();
    window.addEventListener("scroll", revealSections);
});