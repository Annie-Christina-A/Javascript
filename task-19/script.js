const stars=document.querySelectorAll(".star")
const currentRatings = document.querySelector(".current-rating");

stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{
        let current_star=index+1
        currentRatings.innerText = `${current_star} out of 5`;
        stars.forEach((star,i)=>{
            console.log(i)
            if(current_star>=i+1){
                console.log(current_star)
                star.innerHTML=`&#9733`
            }
            else{
                star.innerHTML = `&#9734`;
            }
        })
    })
})

// const radioElement = document.querySelectorAll("input");

// const rating = document.querySelector(".rating-value");

// radioElement.forEach((radio) => {
//   radio.addEventListener("click", () => {
//     let value = radio.value;
//     rating.innerText = `${value} of 5`;
//   });
// });
