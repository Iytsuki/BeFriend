//load noClickCount from localStorage / start with 0
let noClickCount = localStorage.getItem("noClickCount")? parseInt(localStorage.getItem("noClickCount")):0;

//Get the current page name 
let currentPage = window.location.pathname.split("/").pop();
localStorage.setItem("lastReasonPage", currentPage);

// Function for "Yes" button
function handleYesClick() {
    let nextPage = getNextReasonPage (currentPage);
    window.location.href = "../html/result.html";
}

// Function for "No" button (tracks clicks and redirects)
function handleNoClick() {
    noClickCount++;
    localStorage.setItem("noClickCount", noClickCount); // Save new count
    
    if (noClickCount >= 3){
        console.log("Redirecting to ending.html");
        window.location.href = "../html/ending.html"; //If 3 "No's", go to ending page
    }
    else {
        //determine what is the next sad Page
        let sadPage = `../html/sad${noClickCount}.html`;
        console.log("Redirecting to:", sadPage);
        window.location.href = sadPage;
    }
}

//Function to determine the next reason page
function getNextReasonPage(currentPage){
    const pages = ["first.html", "second.html", "third.html", "fourth.html", "fifth.html"];
    let currentIndex = pages.indexOf(currentPage);
    return currentIndex < pages.length - 1 ? pages[currentIndex + 1]: "ending.html";
}