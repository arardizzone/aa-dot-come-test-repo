document.addEventListener('DOMContentLoaded', function() {
    var changeColorButton = document.getElementById('changeColorButton');
    var randomColorButton = document.getElementById('randomColorButton'); // New button
    var body = document.body;
    var originalBackgroundColor = window.getComputedStyle(body).backgroundColor; // Get original background color

    changeColorButton.style.fontSize = '20px'; // Set button font size
    changeColorButton.style.fontFamily = 'Arial'; // Set button font family
    changeColorButton.style.padding = '10px 20px'; // Set button padding

    randomColorButton.style.fontSize = '20px'; // Set button font size
    randomColorButton.style.fontFamily = 'Arial'; // Set button font family
    randomColorButton.style.padding = '10px 20px'; // Set button padding

    var isColorChanged = false; // Variable to track if color is changed

    changeColorButton.addEventListener('click', function() {
        if (!isColorChanged) {
            // Change background color to red
            body.style.backgroundColor = 'red';
        } else {
            // Change background color back to original
            body.style.backgroundColor = originalBackgroundColor;
        }
        
        isColorChanged = !isColorChanged; // Toggle isColorChanged variable
    });

    randomColorButton.addEventListener('click', function() {
        // Generate random color
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Change background color to random color
        body.style.backgroundColor = randomColor;
        
        // Update isColorChanged variable to false
        isColorChanged = false;
    });
});