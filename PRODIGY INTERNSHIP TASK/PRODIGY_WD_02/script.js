// Get the elements
const stopwatch = document.querySelector('.stopwatch');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapTimesList = document.getElementById('lapTimes');

let startTime;
let elapsedTime = 0;
let timerInterval;

// Function to display the stopwatch time
function displayTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    stopwatch.textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
}

// Function to start the stopwatch
function startTimer() {
    if (!startTime) {
        startTime = Date.now() - elapsedTime;
    }
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        displayTime(elapsedTime);
    }, 10);
}

// Function to pause the stopwatch
function pauseTimer() {
    clearInterval(timerInterval);
}

// Function to reset the stopwatch
function resetTimer() {
    clearInterval(timerInterval);
    stopwatch.textContent = '00:00:00:000';
    startTime = null;
    elapsedTime = 0;
    lapTimesList.innerHTML = '';
}

// Event listeners for the buttons
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
