// Load noClickCount from localStorage / Start with 0 if not found
let noClickCount = localStorage.getItem("noClickCount");

if (noClickCount === null) {
    noClickCount = 0; // Default to 0 if nothing is stored
} else {
    noClickCount = parseInt(noClickCount); // Convert stored value to number
}

// Get the current page name
let currentPage = window.location.pathname.split("/").pop();
localStorage.setItem("lastReasonPage", currentPage);

// Debugging
console.log("Loaded noClickCount:", noClickCount);

// ✅ Function for "Yes" button (resets noClickCount and redirects to ending)
function handleYesClick() {
    console.log("Yes button clicked! Resetting noClickCount and going to ending.html");

    resetProgress(); // Reset noClickCount and lastReasonPage
    window.location.href = "../html/ending.html"; // Redirect to ending
}

// ✅ Function for "No" button (tracks clicks and redirects)
function handleNoClick() {
    noClickCount++; // Increment counter
    localStorage.setItem("noClickCount", noClickCount); // Store updated count

    console.log("No button clicked! Updated noClickCount:", noClickCount);

    if (noClickCount >= 3) {
        console.log("Reached 3 'No' clicks. Redirecting to ending.html");
        resetProgress(); // Reset progress at the ending
        window.location.href = "../html/ending.html";
    } else {
        let sadPage = `sad${noClickCount}.html`;
        console.log("Redirecting to:", sadPage);
        window.location.href = `../html/${sadPage}`;
    }
}

// ✅ Function to reset progress
function resetProgress() {
    localStorage.removeItem("noClickCount");
    localStorage.removeItem("lastReasonPage");
    console.log("Progress reset.");
}
