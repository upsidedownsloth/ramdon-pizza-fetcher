
const container = document.getElementById('container')
const nextBtn = document.getElementById('btn')
nextBtn.addEventListener("click", fetchPizza)

const imgText = document.createElement('img')
imgText.classList.add('image') // adding classlist to css. The sane can be acheive by styling img in general in css
imgText.alt = "pizza image"
container.appendChild(imgText)


// calling async function because we're calling an API on it
async function nextPizza(){
    const req = await fetch("https://foodish-api.herokuapp.com/api/images/pizza")
    
    try {
    // if HTTP-status is 200-299, get the response body
        if (req.ok){ 
            const json = await req.json() //the api file gets sent to a jason file 
            return json.image // extracting the image url from the response

        }else{
            console.log("HTTP error: " + req.status)
    }
    } catch (e) {
        console.log (e)
    }
}

async function fetchPizza() {
    try{
    const pizzaImage = await nextPizza() 
    imgText.src = pizzaImage
    }
    catch(e){
        console.log(e)
    }
}

// IIFE function 
// immediate function expression
(async function () {
    await fetchPizza()
})()