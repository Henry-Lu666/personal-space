const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.rev').forEach((el) => obs.observe(el));

const page = document.body.dataset.page;
if (page) {
  document.querySelectorAll('.nav-links a[data-nav]').forEach((a) => {
    a.classList.toggle('active', a.dataset.nav === page);
  });
}
