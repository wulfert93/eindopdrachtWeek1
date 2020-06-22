// document.addEventListener()
document.addEventListener('keydown', logKey)
function logKey (e) {
  switch (e.code) {
    case 'Numpad1':
      homeClick()
      break
    case 'Numpad2':
      redClick()
      break
    case 'Numpad3':
      orangeClick()
      break
    case 'Numpad4':
      purpleClick()
      break
    case 'Numpad5':
      greenClick()
      break
  }
}
function homeClick () {
  document.body.style.backgroundColor = 'white'
  document.getElementById('header').innerHTML = 'Home'
  menuDicht()
}
function redClick () {
  document.body.style.backgroundColor = 'red'
  document.getElementById('header').innerHTML = 'Red'
  menuDicht()
}
function orangeClick () {
  document.body.style.backgroundColor = 'orange'
  document.getElementById('header').innerHTML = 'Orange'
  menuDicht()
}
function purpleClick () {
  document.body.style.backgroundColor = 'purple'
  document.getElementById('header').innerHTML = 'Purple'
  menuDicht()
}
function greenClick () {
  document.body.style.backgroundColor = 'green'
  document.getElementById('header').innerHTML = 'Green'
  menuDicht()
}
const menuZie = () => {
  document.getElementById('menu').style.width = '300px'
  document.getElementById('liId').style.display = 'block'
}
function menuDicht () {
  document.getElementById('menu').style.width = '0px'
  document.getElementById('liId').style.display = 'none'
}
