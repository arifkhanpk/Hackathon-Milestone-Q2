    // Toggle skills visibility
    const toggleSkillsButton1 = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsContainer1 = document.getElementById('skills') as HTMLElement;
    
    toggleSkillsButton1.addEventListener('click', () => {
        if (skillsContainer1.classList.contains('hidden')) {
            skillsContainer1.classList.remove('hidden');
            toggleSkillsButton1.textContent = 'Hide Skills';
        } else {
            skillsContainer1.classList.add('hidden');
            toggleSkillsButton1.textContent = 'Show Skills';
        }
    });

   