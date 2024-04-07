var selectElement = document.getElementById("systems-select");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

selectElement.addEventListener("click", function () {
  if (selectElement.getAttribute("data-open") === "true") {
    selectElement.setAttribute("data-open", "false");
  } else {
    selectElement.setAttribute("data-open", "true");
  }
});
selectElement.addEventListener("blur", function () {
  selectElement.setAttribute("data-open", "false");
});

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
