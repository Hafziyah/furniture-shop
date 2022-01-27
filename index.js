let homePage = "/index.html"
let "forwardButton" = document.getElementById("forward-btn")
console.log(forwardButton)

const arrayOfImages = [
    "hafsat", "paul", "mayowa"
]




forwardButton(index){
    const result = arrayOfImages[index]
    console.log(result)
}

forwardButton(0)


// let presentPage = '#'


// const handleNavigateForward = () =>{
//     if(presentPage === '#'){
//         presentPage === "manufacture/index.html"
//     }else if( presentPage === 'manufacture/index.html'){
//         presentPage === 'globally/index.html'
//     }
// }


