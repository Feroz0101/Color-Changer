let btn = document.querySelectorAll(".button");
let body = document.querySelector("body");


btn.forEach(function (button) {
  button.addEventListener("click", function (para) {
    if (para.target.id === "grey") {
      body.style.backgroundColor = para.target.id;
      body.style.transition = ".5s ease all";

    } else if (para.target.id === "white") {
      body.style.backgroundColor = para.target.id;
      body.style.transition = ".5s ease all";
    } else if (para.target.id === "blue") {
      body.style.backgroundColor = para.target.id;

      body.style.transition = ".5s ease all";
    } else para.target.id === "yellow";
    {
      body.style.backgroundColor = para.target.id;
      body.style.transition = ".5s ease all";
    }
  });
});
