document.getElementById('greet-btn').addEventListener('click', () => {
    const greetEl = document.getElementById('greet');
    greetEl.textContent = "Hello! Welcome to the Ticket Booking App 🎟️";
    greetEl.classList.remove('hidden');
});
