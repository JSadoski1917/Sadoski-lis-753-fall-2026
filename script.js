// Select the button element by its ID
const button = document.getElementById('colorBtn');

// Function to generate a random number between 0 and 255
function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

// Add an event listener to execute on button click
button.addEventListener('click', () => {
    // Generate a random RGB color string
    const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    
    // Target the body element and update its background color
    document.body.style.backgroundColor = randomColor;
});