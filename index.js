// Your code here
const dodger = document.getElementById('dodger')


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); 

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });  


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
  
    if (left > 0) {
      dodger.style.left = `${left - 20}px`;
      
    }
    
  } 
  
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
  
    if (left > 0) {
      dodger.style.left = `${left + 20}px`;
      
    }
    
  }  

      