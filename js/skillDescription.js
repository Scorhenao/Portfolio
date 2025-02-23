document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".icon");

    // Create a description box dynamically
    const descriptionBox = document.createElement("div");
    descriptionBox.classList.add("skill-description");
    document.body.appendChild(descriptionBox);

    // Skill descriptions
    const descriptions = {
        "icon-tabler-brand-javascript": "JavaScript: The language of the web.",
        "icon-tabler-brand-typescript": "TypeScript: JavaScript with static typing.",
        "icon-nestjs": "NestJS: Scalable Node.js framework.",
        "icon-tabler-brand-python": "Python: Powerful and easy-to-learn language.",
        "icon-tabler-brand-django": "Django: High-level Python web framework.",
        "icon-tabler-brand-php": "PHP: Server-side scripting language.",
        "icon-tabler-brand-laravel": "Laravel: PHP framework for web artisans.",
        "icon-tabler-brand-mysql": "MySQL: Open-source relational database.",
        "icon-tabler-brand-mongodb": "MongoDB: NoSQL database for modern apps.",
        "icon-tabler-brand-postgresql": "PostgreSQL: Advanced relational database.",
        "icon-tabler-brand-sqlite": "SQLite: Lightweight SQL database.",
        "icon-tabler-brand-git": "Git: Distributed version control system.",
        "icon-tabler-brand-github": "GitHub: Code hosting platform for Git.",
        "icon-tabler-brand-html5": "HTML5: Markup language for the web.",
        "icon-tabler-brand-css3": "CSS3: Styling language for web pages.",
        "icon-tabler-brand-react": "React: JavaScript library for UI development.",
        "icon-tabler-brand-bootstrap": "Bootstrap: CSS framework for responsive design.",
        "icon-tabler-brand-materialui": "Material UI: React component library.",
        "icon-tabler-brand-materialize": "Materialize: A modern responsive front-end framework based on Material Design.",
        "icon-tabler-brand-nodejs": "Node.js: JavaScript runtime for backend.",
        "icon-tabler-brand-postman": "Postman: API testing tool.",
        "icon-tabler-brand-npm": "NPM: JavaScript package manager.",
        "icon-tabler-brand-docker": "Docker: Containerization platform.",
        "icon-tabler-brand-ubuntu": "Ubuntu: Linux-based operating system.",
        "icon-tabler-brand-vscode": "VS Code: Popular code editor.",
        "icon-tabler-brand-discord": "Discord: Communication platform for communities.",
        "icon-tabler-brand-linux": "Linux: Open-source operating system used for servers, development, and more.",
        "icon-tabler-brand-jira": "Jira: Project management tool.",
        "icon-tabler-brand-thunderclient": "Thunder Client: Lightweight API testing tool for VS Code.",
        "icon-tabler-brand-yarn": "Yarn: Fast and reliable JavaScript package manager."
    };

    icons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            const skillName = Array.from(icon.classList).find(cls => descriptions[cls]); // Find matching class
            if (!skillName) return;

            descriptionBox.textContent = descriptions[skillName];
            
            const rect = icon.getBoundingClientRect();
            const tooltipWidth = descriptionBox.offsetWidth;
            const tooltipHeight = descriptionBox.offsetHeight;
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let leftPosition = rect.right + 10; // Default position to the right
            let topPosition = rect.top + (rect.height / 3) - (tooltipHeight / 2); // Centered vertically

            // If the tooltip would go off the right edge of the screen, move it to the left
            if (leftPosition + tooltipWidth > viewportWidth) {
                leftPosition = rect.left - tooltipWidth - 10;
            }

            // Ensure the tooltip does not go off the top or bottom
            if (topPosition < 20) topPosition = 20;
            if (topPosition + tooltipHeight > viewportHeight) {
                topPosition = viewportHeight - tooltipHeight - 10;
            }

            descriptionBox.style.left = `${leftPosition}px`;
            descriptionBox.style.top = `${topPosition}px`;
            descriptionBox.style.opacity = "1";
            descriptionBox.style.visibility = "visible";
        });

        icon.addEventListener("mouseleave", () => {
            descriptionBox.style.opacity = "0";
            descriptionBox.style.visibility = "hidden";
        });
    });
});
