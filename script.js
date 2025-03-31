// Digital Clock
function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById("digitalClock").innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000); // Update every second

// Stopwatch
let stopwatchTime = 0;
let stopwatchInterval;
let stopwatchRunning = false;

function updateStopwatchDisplay() {
    let hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
    let minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
    let seconds = String(stopwatchTime % 60).padStart(2, '0');

    document.getElementById("stopwatchDisplay").innerText = `${hours}:${minutes}:${seconds}`;
}

document.getElementById("startStopwatch").addEventListener("click", function () {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatchDisplay();
        }, 1000);
        this.innerText = "Pause";
    } else {
        clearInterval(stopwatchInterval);
        this.innerText = "Start";
    }
    stopwatchRunning = !stopwatchRunning;
});

document.getElementById("resetStopwatch").addEventListener("click", function () {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    stopwatchRunning = false;
    updateStopwatchDisplay();
    document.getElementById("startStopwatch").innerText = "Start";
});
