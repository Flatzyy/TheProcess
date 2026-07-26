function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => document.getElementById('mobileMenu').classList.remove('open'));
});

function toggleForm(id) {
  const btn = document.getElementById('btn-' + id);
  const details = document.getElementById('form-' + id);
  btn.classList.toggle('open');
  details.classList.toggle('open');
  btn.querySelector('.arrow').textContent = btn.classList.contains('open') ? '▼' : '▶';
}

function saveExercise(id) {
  const w = document.getElementById(id + '-weight');
  const r = document.getElementById(id + '-reps');
  const c = document.getElementById(id + '-confirm');
  if (!w || !r) return;
  localStorage.setItem('fitness_' + id, JSON.stringify({ weight: w.value, reps: r.value }));
  c.classList.add('visible');
  setTimeout(() => c.classList.remove('visible'), 2000);
}

function loadSavedData() {
  document.querySelectorAll('.tracker-input').forEach(input => {
    const id = input.id.replace('-weight', '').replace('-reps', '');
    try {
      const saved = localStorage.getItem('fitness_' + id);
      if (saved) {
        const data = JSON.parse(saved);
        const w = document.getElementById(id + '-weight');
        const r = document.getElementById(id + '-reps');
        if (w && data.weight) w.value = data.weight;
        if (r && data.reps) r.value = data.reps;
      }
    } catch(e) {}
  });
}

document.addEventListener('DOMContentLoaded', loadSavedData);

document.querySelectorAll('.tracker-input').forEach(input => {
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const id = input.id.replace('-weight', '').replace('-reps', '');
      saveExercise(id);
    }
  });
});
