function toggleDropdown() {
  const el = document.querySelector('#dropdown-content');
  if (el.className === '') {
    el.className = 'show';
  } else {
    el.className = '';
  }
}
