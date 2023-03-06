    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        const origin = document.getElementById('origin').value.trim();
        const destination = document.getElementById('destination').value.trim();
        const departureDate = document.getElementById('departure-date').value;
        const returnDate = document.getElementById('return-date').value;

        if (!origin || !destination || !departureDate || !returnDate) {
            alert('Please fill in all the fields.');
            event.preventDefault();
        }
    });