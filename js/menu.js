(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-mobile-open]'),
    closeMenuBtn: document.querySelector('[data-mobile-close]'),
    menu: document.querySelector('[data-mobile]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
