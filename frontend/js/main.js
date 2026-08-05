// Minimal frontend JS for future behaviour (nav toggle, simple interactions)
document.addEventListener('DOMContentLoaded', function () {
  // placeholder: mobile nav toggle if needed in future
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav ul');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
});
