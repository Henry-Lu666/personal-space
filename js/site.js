// 内容默认可见；仅在动画能力明确可用时启用入场效果，避免 JS 失败时整页隐身。
if ('IntersectionObserver' in window) {
  document.body.classList.add('js-ready');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.rev').forEach((el) => obs.observe(el));
} else {
  document.querySelectorAll('.rev').forEach((el) => el.classList.add('in'));
}

const page = document.body.dataset.page;
if (page) {
  document.querySelectorAll('.nav-links a[data-nav]').forEach((a) => {
    a.classList.toggle('active', a.dataset.nav === page);
  });
}
