
const input = document.querySelector("#texto");
const resultado = document.querySelector("#resultado");
const boton = document.getElementsByClassName("btn")[0];
const resultadoMayusculas = document.getElementById("resultadoMayusculas");

input.addEventListener("input", function() {
    resultado.textContent = input.value;
    
});

 boton.addEventListener("click", function() {
  const texto = input.value.toUpperCase();
  resultadoMayusculas.textContent = texto;
 
});
