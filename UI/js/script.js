
const selectElement = (element) => document.querySelector(element)

function hide_details() {
  const displayed_details = [...document.querySelectorAll('.data-details')]
  displayed_details.forEach( 
    function(currentValue, currentIndex, listObj) {
  
      currentValue.classList.remove("show-me")
      currentValue.classList.add("hide-me")
    },
    'myThisArg'
  )
}

document.addEventListener('click', function(e) {
  const clicked_classList = [...e.target.classList]

  if (clicked_classList.includes('more')) {
    const theParent = e.target.parentNode.parentNode.parentNode
    
    let class_list  = [...theParent.childNodes[3].classList]

    if (class_list.includes('show-me')) {
      theParent.childNodes[3].classList.remove("show-me")
      theParent.childNodes[3].classList.add("hide-me")
    } else {
      hide_details()
      theParent.childNodes[3].classList.remove("hide-me")
      theParent.childNodes[3].classList.add("show-me")
    }
  }

}, false);

selectElement('.menu-icon').addEventListener('click', function(event) {
  const class_list = [...selectElement('.menus').classList]
  
  if (class_list.includes('menu-responsive')) {
    selectElement('.menus').classList.remove("menu-responsive")
  } else {
    selectElement('.menus').classList.add("menu-responsive")
  }
})