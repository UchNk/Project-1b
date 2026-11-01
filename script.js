// Smooth-scroll for the CTA buttons
document.querySelectorAll('[data-scroll]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    const target = id === '#top' ? document.body : document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: id === '#top' ? 'start' : 'center' });
  });
});

// If a photo is missing from /images, hide it so the gradient placeholder shows
document.querySelectorAll('.photo img').forEach((img) => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
});

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
