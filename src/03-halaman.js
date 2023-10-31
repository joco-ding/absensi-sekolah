elNavMenu.forEach(element => {
  element.addEventListener('click', bukaHalaman);
});

function bukaHalaman(event) {
  event.preventDefault()
  elNavMenu.forEach(element => {
    element.classList.remove('active')
  });
  this.classList.add('active')
  const dataMenu = this.getAttribute('menu');

  elHalaman.forEach(element => {
    element.classList.add('d-none')
  })
  document.getElementById(dataMenu).classList.remove('d-none')
}