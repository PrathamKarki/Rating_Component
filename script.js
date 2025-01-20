const card = document.querySelector(".card");

const submitBtn = document.querySelector('.btn');

const thankYouSection = document.querySelector('.thank_you_section');

const ratingBtns = document.querySelectorAll('.rate_list');

const ratingScore = document.querySelector('.dynamic-number');


let defaultRatingScore = 0;


ratingBtns.forEach((btn) =>{
    btn.addEventListener("click", captureRating)
})


function submitRating(){
    card.style.display= "none";
    thankYouSection.style.display = "block";
    ratingScore.textContent = defaultRatingScore;
}

submitBtn.addEventListener("click", submitRating);


function captureRating(e){
  
    defaultRatingScore = e.target.textContent;

    ratingScore.textContent = defaultRatingScore;

    if(e.target.classList.contains("rate_list")){
       e.target.classList.toggle("active");
    }

}