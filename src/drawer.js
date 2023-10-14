
function toggleDrawer(name) {
  let ele = document.getElementById(`drawer-${name}`)
  console.debug('toggleDrawer', name, ele)
  let show = ele.classList.contains('show')
  if (show) {
    ele.classList.remove('show')
  } else {
    ele.classList.add('show')
  }
}
function closeDrawer(name) {
  let ele = document.getElementById(`drawer-${name}`)
  console.debug('closeDrawer', name, ele)
  let show = ele.classList.contains('show')
  if (show) {
    ele.classList.remove('show')
  }
}
