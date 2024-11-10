// Select the button and the skills section
const toggleSkillsButton = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;

// Add an event listener to the button to toggle the skills section visibility
toggleSkillsButton.addEventListener('click', () => {
    // Check if the skills section is currently visible
    if (skillsSection.style.display === 'none') {
        // Show the skills section
        skillsSection.style.display = 'block';
    } else {
        // Hide the skills section
        skillsSection.style.display = 'none';
    }
});
