const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

const removeActiveClasses = function () {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}

const findActiveIndex = function () {
  var index = 0
  var i = 0
  panels.forEach((panel) => {
    if (panel.classList.contains('active')) {
      index = i
    }
    i = i + 1
  })
  return index
}

var isSmall = false

window.addEventListener('resize', () => {
  if (document.body.clientWidth < 425 && !isSmall) {
    var index = findActiveIndex()
    if (index > 2) {
      removeActiveClasses()
      panels[0].classList.add('active')
    }
    isSmall = true
  }
  if (document.body.clientWidth > 425) {
    isSmall = false
  }
})
