document.getElementById('year').textContent = new Date().getFullYear();

// Let's Connect dropdown toggle
const connectWrap = document.getElementById('connectWrap');
const connectBtn = document.getElementById('connectBtn');

if (connectWrap && connectBtn) {
  connectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    connectWrap.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!connectWrap.contains(e.target)) {
      connectWrap.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      connectWrap.classList.remove('open');
    }
  });
}
