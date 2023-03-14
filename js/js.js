const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
//mostrará en la consola donde hacemos click
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  //ahora si el id existe
  if (id) {
    //remover active de los otros botones y darle active al que hacemos click
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    //ahora vamos a hacer lo mismo para el contenido
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});