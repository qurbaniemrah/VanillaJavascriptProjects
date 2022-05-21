let container = document.querySelector("#container");
let click = document.querySelector("#click")
let counter = -1




click.addEventListener('click', () => {

    let colors = ['red', 'green', 'blue']
   counter++
  







    for (let i = 0; i < colors.length; i++) {

        container.style.backgroundColor = colors[counter]

    }

})