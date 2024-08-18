document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        const contactInput = document.getElementById('contact').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+?[1-9]\d{1,14}$/;
        if (!emailPattern.test(contactInput) && !phonePattern.test(contactInput)) {
            event.preventDefault(); // Prevent form submission
            document.getElementById('error-message').textContent = 'Please enter a valid phone number or email address.';
        } else {
            document.getElementById('error-message').textContent = '';
        }
    });

    const countrySelect = document.getElementById('country');
    const citySelect = document.getElementById('city');

    // Static data for cities
    const citiesByCountry = {
        'US': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'],
        'CA': ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon']
    };

    function populateCities(cities) {
        citySelect.innerHTML = '<option value="">Select a city</option>'; // Clear previous options and add default option

        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.text = city;
            citySelect.appendChild(option);
        });
    }

    // Event listener for country change
    countrySelect.addEventListener('change', () => {
        const selectedCountry = countrySelect.value;
        let cities = [];

        if (selectedCountry === 'US') {
            cities = citiesByCountry['US'];
        } else if (selectedCountry === 'CA') {
            cities = citiesByCountry['CA'];
        } else {
            cities = [];
        }

        populateCities(cities);
    });
});
