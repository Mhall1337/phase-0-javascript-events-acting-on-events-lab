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
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
});
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});

function moveDodgerDown(){
  const bottomNumbers = dodger.style.bottom.replace('px','')
  const up = parseInt(bottomNumbers, 10)

  if(up > 0){
    dodger.style.bottom = `${up - 10}px`;
  }
}

function moveDodgerUp(){
  const bottomNumbers = dodger.style.bottom.replace('px','')
  const up = parseInt(bottomNumbers, 10)

  if(up < 380){
    dodger.style.bottom = `${up + 10}px`;
  }
}

function moveDodgerLeft(){
  const leftNumbers = dodger.style.left.replace('px','')
  const left = parseInt(leftNumbers, 10)

  if(left > 0){
    dodger.style.left = `${left -10}px`;
  }
}
function moveDodgerRight(){
  const leftNumbers = dodger.style.left.replace('px','')
  const left = parseInt(leftNumbers, 10)

  if(left < 360){
    dodger.style.left = `${left + 10}px`;
  }
}