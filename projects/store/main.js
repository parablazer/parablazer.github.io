const toggleBtn = document.getElementById('nav-toggle');
const navbar = document.getElementsByClassName('collapse-navbar')[0]

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
})
