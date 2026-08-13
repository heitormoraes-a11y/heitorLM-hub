const frases = [
  "O café da manhã é a refeição mais importante do dia.",
  "Chove muito em Santa Catarina no inverno.",
  "Programar é como resolver um quebra-cabeça todos os dias.",
  "A biblioteca da cidade abre às oito da manhã.",
  "Gatos dormem quase o dia inteiro.",
  "Aprender algo novo toda semana é um bom hábito.",
  "O sol nasce no leste e se põe no oeste.",
  "Música clássica ajuda muita gente a se concentrar.",
  "Viajar sem pressa é a melhor forma de conhecer um lugar.",
  "Um bom código comentado facilita a vida de quem vem depois."
];

const fraseTexto = document.querySelector(".frase");
const btnFrase = document.querySelector(".btnFrase");
 
function mostrarfrase() {
    let indice = Math.floor(Math.random() *frases.length);
    fraseTexto.textContent = frases[indice]
}

btnFrase.addEventListener("click", function(){
    mostrarfrase()
});
