
// 1. Set the date and time for TechForward 2024
    const countDownDate = new Date("Aprill 16, 2025 09:00:00").getTime();

// 2. Update the countdown every second
const timer = setInterval(() => {
  const now = new Date().getTime();
    const distance = countDownDate - now;

    // 3. Calculate remaining days, hours, minutes, seconds
    const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 4. Inject values into the HTML
    document.getElementById("days").textContent    = days;
    document.getElementById("hours").textContent   = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // 5. If countdown is finished or past the date
    if (distance < 0) {
        clearInterval(timer);
    document.getElementById("days").textContent    = "0";
    document.getElementById("hours").textContent   = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
  }
}, 1000);

