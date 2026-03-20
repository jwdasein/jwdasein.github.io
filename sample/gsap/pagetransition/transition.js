const panels = document.querySelectorAll(".overlay-panel");

// --- ENTER: uncover the page on load ---
gsap.set(panels, { scaleY: 1, transformOrigin: "top" });
gsap.to(panels, {
    scaleY: 0,
    duration: 0.6,
    ease: "power3.inOut",
    stagger: 0.05,
    delay: 0.1
});

// --- EXIT: cover the page before navigating ---
document.querySelectorAll("a.transition-link").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");

        gsap.set(panels, { scaleY: 0, transformOrigin: "bottom" });
        gsap.to(panels, {
            scaleY: 1,
            duration: 0.5,
            ease: "power3.inOut",
            stagger: 0.05,
            onComplete: () => {
                window.location.href = href;
            }
        });
    });
});
