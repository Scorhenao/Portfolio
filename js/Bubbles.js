document.addEventListener("DOMContentLoaded", () => {
    const bubbleContainer = document.querySelector(".bubble-background");

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        // aleatory size
        const size = Math.random() * 80 + 20;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        // Aleatory position X
        bubble.style.left = `${Math.random() * 100}vw`;

        // Aleatory position duration
        const duration = Math.random() * 6 + 4;
        bubble.style.animationDuration = `${duration}s`;

        // Add bubble to the container
        bubbleContainer.appendChild(bubble);

        // Remove bubble
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }

    // Create a bubble every 500ms
    setInterval(createBubble, 500);
});