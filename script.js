var btnSucc = document.getElementsByClassName("success")[0];
var btnError = document.getElementsByClassName("error")[0];
var colors = document.getElementsByClassName("color");
// console.log(btnError);

function succMsg() {
  document.getElementById("msg").style.display = "block";
  document.getElementById("msg").style.border = "2px solid green";
  for (var i = 0; i < colors.length; i++) {
    colors[i].style.color = "green";
  }
}
btnSucc.addEventListener("click", succMsg);

btnError.addEventListener("click", function () {
  document.getElementById("msg").style.display = "block";
  document.getElementById("msg").style.border = "2px solid red";
  for (var i = 0; i < colors.length; i++) {
    colors[i].style.color = "red";
  }
});
