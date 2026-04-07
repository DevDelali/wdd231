// Using local storage to track number of visits
const messageEl = document.getElementById("visit-message");

if (messageEl) {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
        messageEl.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const diffTime = now - Number(lastVisit);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 1) {
            messageEl.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = diffDays === 1 ? "day" : "days";
            messageEl.textContent = `You last visited ${diffDays} ${dayText} ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);
}