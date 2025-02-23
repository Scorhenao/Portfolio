document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".hidden-section");

    const revealSections = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", revealSections);
    revealSections();
});
