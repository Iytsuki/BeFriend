// Load noClickCount from localStorage / Start with 0 if not found
let noClickCount = localStorage.getItem("noClickCount");

if (noClickCount === null) {
    noClickCount = 0; // Default to 0 if nothing is stored
} else {
    noClickCount = parseInt(noClickCount); // Convert stored value to number
}

// Reset noClickCount after 3 "No" clicks
if (noClickCount >= 4) {
    noClickCount = 0;
    localStorage.setItem("noClickCount", noClickCount);
}

// ✅ Get the current page name
let currentPage = window.location.pathname.split("/").pop();

// ✅ Only store lastReasonPage if it's a reason page (NOT a sad page)
const reasonPages = ["first.html", "second.html", "third.html", "fourth.html", "fifth.html"];
if (reasonPages.includes(currentPage)) {
    localStorage.setItem("lastReasonPage", currentPage);
}

// Debugging: Show current noClickCount in console
console.log("Loaded noClickCount:", noClickCount);
console.log("Current page:", currentPage);

// ✅ Function for "Yes" button (continue to next reason)
function handleYesClick() {
    continueToReason();
}

// ✅ Function for "No" button (tracks clicks and redirects to sad pages)
function handleNoClick() {
    noClickCount++; // Increment counter
    localStorage.setItem("noClickCount", noClickCount); // Store updated count

    console.log("No button clicked! Updated noClickCount:", noClickCount);

    if (noClickCount > 3) {
        console.log("Reached 3 'No' clicks. Redirecting to ending.html");
        window.location.href = "../html/ending.html";
    } else {
        let sadPage = `sad${noClickCount}.html`;
        console.log("Redirecting to:", sadPage);
        window.location.href = `../html/${sadPage}`;
    }
}

// ✅ Function to continue from Sad page (Return to the correct next reason)
function continueToReason() {
    let lastReasonPage = localStorage.getItem("lastReasonPage") || "first.html";
    let nextPage = getNextReasonPage(lastReasonPage);

    console.log("Returning to next reason after:", lastReasonPage);
    console.log("Redirecting to:", nextPage);

    window.location.href = `../html/${nextPage}`;
}

// ✅ Function to determine the next reason page
function getNextReasonPage(currentPage) {
    const pages = ["first.html", "second.html", "third.html", "fourth.html", "fifth.html"];
    let currentIndex = pages.indexOf(currentPage);
    
    if (currentIndex === -1) {
        console.log("Error: Page not found in list, defaulting to first.html");
        return "first.html"; // Fail-safe
    }

    return currentIndex < pages.length - 1 ? pages[currentIndex + 1] : "ending.html";
}
