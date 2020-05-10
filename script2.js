const text = document.getElementById("text").value;
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
 document.getElementById("written").innerHTML = text;
});
