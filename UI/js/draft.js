// $("[type=file]").on("change", function(){
//     // Name of file and placeholder
//     var file = this.files[0].name;
//     var dflt = $(this).attr("placeholder");
//     if($(this).val()!=""){
//       $(this).next().text(file);
//     } else {
//       $(this).next().text(dflt);
//     }
// });

const selectElement = (element) => document.querySelector(element)

// const more_info =  () => {

//     let class_list  = [...selectElement('.data-details').classList]

//     if (class_list.includes('show-me')) {
//       console.log(selectElement('.data-details'))
//       selectElement('.data-details').classList.remove("show-me")
//       selectElement('.data-details').classList.add("hide-me")
//     } else {
//       console.log(selectElement('.data-details'))
//       selectElement('.data-details').classList.remove("hide-me")
//       selectElement('.data-details').classList.add("show-me")
//     }
    
//     console.log(selectElement('.data-details').classList)
//     console.log(class_list)
// }

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
    console.log(e.target.classList)
    const theParent = e.target.parentNode.parentNode.parentNode
    console.log(theParent.childNodes[3].classList)
    
    let class_list  = [...theParent.childNodes[3].classList]

    if (class_list.includes('show-me')) {
      console.log(selectElement('.data-details'))
      theParent.childNodes[3].classList.remove("show-me")
      theParent.childNodes[3].classList.add("hide-me")
    } else {
      hide_details()
      console.log(selectElement('.data-details'))
      theParent.childNodes[3].classList.remove("hide-me")
      theParent.childNodes[3].classList.add("show-me")
    }
  }

}, false);

/*

const more = document.querySelectorAll('.more')
console.log(more)

more.forEach( 
  function(currentValue, currentIndex, listObj) {

    currentValue.addEventListener('click', (event) => {
      // selectElement('header').classList.toggle('active')
      // selectElement('.data-details').style.display = "block";
      
      console.log(currentValue)
      console.log(selectElement('.more'))
      console.log(event)

      const class_list  = [...selectElement('.data-details').classList]
  
      if (class_list.includes('show-me')) {
        selectElement('.data-details').classList.remove("show-me")
        selectElement('.data-details').classList.add("hide-me")
      } else {
        selectElement('.data-details').classList.remove("hide-me")
        selectElement('.data-details').classList.add("show-me")
      }
      
      //console.log(selectElement('.data-details').classList)
      //console.log(class_list)
  
  })

    console.log(currentValue + ', ' + currentIndex + ', ' + this + listObj); 
  },
  'myThisArg'
);
*/




// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }