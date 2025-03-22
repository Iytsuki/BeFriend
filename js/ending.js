// Reset everything when reaching the ending
localStorage.removeItem("noClickCount");
localStorage.removeItem("lastReasonPage");

console.log("Game over. Progress has been reset.");

function handleYesClick() {
    continueToReason(); // Redirect back to the correct reason page
}

function continueToReason() {
    let lastReasonPage = localStorage.getItem("lastReasonPage");

    if (!lastReasonPage) {
        lastReasonPage = "first.html"; // Default to first reason
    }

    console.log("Returning to next reason after:", lastReasonPage);

    let nextPage = getNextReasonPage(lastReasonPage);

    console.log("Redirecting to:", nextPage);
    window.location.href = `../html/${nextPage}`;
}

// 🔹 Make sure this function exists in sad2.js
function getNextReasonPage(currentPage) {
    const pages = ["first.html", "second.html", "third.html", "fourth.html", "fifth.html"];
    let currentIndex = pages.indexOf(currentPage);

    if (currentIndex === -1) {
        console.log("Error: Page not found in list, defaulting to first.html");
        return "first.html"; // Fail-safe
    }

    return currentIndex < pages.length - 1 ? pages[currentIndex + 1] : "ending.html";
}
