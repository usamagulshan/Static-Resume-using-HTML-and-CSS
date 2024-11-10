// Select the button and the skills section
var toggleSkillsButton = document.getElementById('toggleSkillsBtn');
var skillsSection = document.getElementById('skillsSection');
// Add an event listener to the button to toggle the skills section visibility
toggleSkillsButton.addEventListener('click', function () {
    // Check if the skills section is currently visible
    if (skillsSection.style.display === 'none') {
        // Show the skills section
        skillsSection.style.display = 'block';
    }
    else {
        // Hide the skills section
        skillsSection.style.display = 'none';
    }
});
