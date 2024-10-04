const countdownDate = new Date("2024-10-04T03:33:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = `${days}d`;
    document.getElementById("hours").innerHTML = `${hours}h`;
    document.getElementById("minutes").innerHTML = `${minutes}m`;
    document.getElementById("seconds").innerHTML = `${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("message").innerHTML = "O evento começou!";
    }
};

const interval = setInterval(updateCountdown, 1000);
