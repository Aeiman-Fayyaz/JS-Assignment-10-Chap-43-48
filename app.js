// QUESTION 1
// Show an alert box on click on a link.

// ANSWER 1

function greet() {
  alert("Thanks for order");
}

// QUESTION 2
// Display some Mobile images in browser. On click on an
//     image Show the message in alert to user.

// ANSWER 2

function thanksForPurchasing() {
  alert("Order confirm \nThanks for Purchasing");
}

// QUESTION 3
// Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// ANSWER 3

function deleteRow() {
  let deleteButtons = document.querySelectorAll(" .deleteRow");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      deleteButtons.closest("tr").remove();
      console.log(deleteButtons);
      
    });
  });
}

// QUESTION 4
// Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// ANSWER 4

let coverImg = document.getElementById("coverImg")

coverImg.addEventListener("mouseover" , function(){
  coverImg.src = "./Images/cover3.avif"
})

coverImg.addEventListener("mouseout" , function(){
  coverImg.src = "./Images/cover2.avif"
})

// QUESTION 5
// Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

// ANSWER 5

let couter = 0
// Getting counter
let countdoc = document.getElementById("value")

// Get elements 

let increaseBtn = document.getElementById("increase-btn")
let decreaseBtn = document.getElementById("decrease-btn")

function counterUpdate() {
  countdoc.textContent = couter

}

increaseBtn.addEventListener("click" , function(){
  couter++
  counterUpdate()
})
decreaseBtn.addEventListener("click" , function(){
  couter--
  counterUpdate()
})
