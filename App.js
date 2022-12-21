const mainContainer = document.querySelector(".container");
const Submit = document.querySelector('.submit-btn')
const Container = document.querySelector(".container-2");
const buttonArea = document.querySelector(".button-area")
let selectedNo = document.querySelector(".selected-no")


Submit.addEventListener('click',function(){
     
     mainContainer.classList.add('hidden')
     Container.classList.remove('hidden')
     
})

buttonArea.addEventListener('click',function(e){
    selectedNo.textContent = " " + e.target.textContent + " ";
})

 
