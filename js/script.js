const noButton = document.querySelector(".no-button");
const container = document.querySelector(".container");

// Function to move the "No" button (keeps it in bounds)
function moveNoButton() {
    let maxX = container.clientWidth - noButton.clientWidth - 10;
    let maxY = container.clientHeight - noButton.clientHeight - 80; 

    let newX = Math.max(0, Math.random() * maxX);
    let newY = Math.max(0, Math.random() * maxY);

    noButton.style.transform = `translate(${newX}px, ${newY}px)`;
}

// Move button on hover (desktop)
noButton.addEventListener("mouseover", moveNoButton);

// Move button on tap (mobile)
noButton.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevent accidental zooming
    moveNoButton();
}, { passive: false });

// Function when clicking "Yes"
function handleYesClick() {
    // Change the GIF
    document.querySelector(".gif-container img").src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmVucW15NnlmNTEzN2N0Ymw0MDFid3Zyd29mbnc3aXF0dGlsZ3gwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wHUWuJWg6iRRQWTBd1/giphy.gif";
    
    alert("Great! Let's spend some time together!");
    window.location.href = "html/stay_page.html";
}
