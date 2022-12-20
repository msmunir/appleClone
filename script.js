var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (!panel.classList.contains("show-footer")) {
      panel.classList.add("show-footer");
    } else {
      panel.classList.remove("show-footer");
    }
  });
}
