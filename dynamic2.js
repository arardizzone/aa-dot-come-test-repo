document.addEventListener('DOMContentLoaded', function() {
    var dynamicElement = document.getElementById('dynamicText');
    
    setTimeout(function() {
        dynamicElement.textContent = 'Updated Text';
    }, 5000); // 5000 milliseconds = 5 seconds
});
