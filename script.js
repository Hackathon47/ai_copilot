// Simplified Example Logic
let focusScore = 100;

function updateUserFocus(results) {
    // Assume you have these boolean flags from your calculations
    const isDrowsy = checkDrowsiness(results);
    const isYawning = checkYawn(results);
    const isDistracted = checkHeadPose(results);

    if (isDrowsy || isYawning || isDistracted) {
        // Decrease score faster for negative events
        focusScore -= 2;
    } else {
        // Slowly regenerate score when focused
        focusScore += 0.5;
    }

    // Clamp the score between 0 and 100
    focusScore = Math.max(0, Math.min(100, focusScore));
}

// In your main loop
function updateDashboard(score) {
    const root = document.documentElement;
    const scoreElement = document.getElementById('score');
    const statusText = document.getElementById('status-text');

    scoreElement.innerText = Math.round(score);

    if (score > 80) {
        root.style.setProperty('--primary-color', '#0f0'); // Green
        statusText.innerText = "FOCUSED";
    } else if (score > 50) {
        root.style.setProperty('--primary-color', '#ff0'); // Yellow
        statusText.innerText = "PAY ATTENTION";
        // Play a gentle chime
    } else {
        root.style.setProperty('--primary-color', '#f00'); // Red
        statusText.innerText = "DANGER: DROWSINESS DETECTED!";
        // Play a loud alert sound
    }
}