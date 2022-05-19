//--------------Defining Elements and variables-----------------------
const ratingStatmentContainer = document.querySelector(".rating-statment");
const thankYouContainer = document.querySelector(".thank-you-statment");
const ratesContainer = document.getElementById("ratesContainer");
const submit = document.getElementById("submit-btn");
const rate = document.getElementById("rate");
let selectedElemetn = null;

//--------------Eevents---------------------

//------------Event for selecting a rating---------------
ratesContainer.addEventListener("click", event => {
    if (event.target.classList.contains("rating") && selectedElemetn == null ){
        selectedElemetn = event.target;
        selectedElemetn.style.backgroundColor = "hsl(25, 97%, 53%)";
        selectedElemetn.style.color = "hsl(0, 0%, 100%)";
    }

    if(event.target.classList.contains("rating") && selectedElemetn != null){
        selectedElemetn.style.backgroundColor = "hsl(214, 26%, 24%)";
        selectedElemetn.style.color = "hsl(217, 12%, 63%)";
        selectedElemetn = event.target;
        selectedElemetn.style.backgroundColor = "hsl(25, 97%, 53%)";
        selectedElemetn.style.color = "hsl(0, 0%, 100%)";
    }
})

//--------------Event for submitting rating---------------
submit.addEventListener("click", ()=> {
    if (selectedElemetn == null) return;
    rate.innerText = selectedElemetn.innerText;
    ratingStatmentContainer.style.display = "none";
    thankYouContainer.style.display = "block";
})




