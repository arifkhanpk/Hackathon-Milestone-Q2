// Toggle skills visibility
var toggleSkillsButton1 = document.getElementById('toggle-skills');
var skillsContainer1 = document.getElementById('skills');
toggleSkillsButton1.addEventListener('click', function () {
    if (skillsContainer1.classList.contains('hidden')) {
        skillsContainer1.classList.remove('hidden');
        toggleSkillsButton1.textContent = 'Hide Skills';
    }
    else {
        skillsContainer1.classList.add('hidden');
        toggleSkillsButton1.textContent = 'Show Skills';
    }
});
