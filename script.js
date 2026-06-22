// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });
});

// ============================================
// WEIGHT TRACKER — saves to localStorage
// ============================================

function saveExercise(id) {
  const weightInput = document.getElementById(id + '-weight');
  const repsInput = document.getElementById(id + '-reps');
  const confirm = document.getElementById(id + '-confirm');

  if (!weightInput || !repsInput) return;

  const data = {
    weight: weightInput.value,
    reps: repsInput.value,
    savedAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  };

  localStorage.setItem('fitness_' + id, JSON.stringify(data));

  confirm.classList.add('visible');
  setTimeout(() => confirm.classList.remove('visible'), 2000);
}

function loadSavedData() {
  const inputs = document.querySelectorAll('.tracker-input');
  inputs.forEach(input => {
    const id = input.id.replace('-weight', '').replace('-reps', '');
    const saved = localStorage.getItem('fitness_' + id);
    if (saved) {
      const data = JSON.parse(saved);
      const weightInput = document.getElementById(id + '-weight');
      const repsInput = document.getElementById(id + '-reps');
      if (weightInput && data.weight) weightInput.value = data.weight;
      if (repsInput && data.reps) repsInput.value = data.reps;
    }
  });
}

// Load saved data on page load
document.addEventListener('DOMContentLoaded', loadSavedData);

// Allow pressing Enter on inputs to save
document.querySelectorAll('.tracker-input').forEach(input => {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const id = input.id.replace('-weight', '').replace('-reps', '');
      saveExercise(id);
    }
  });
});
