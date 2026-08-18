let tarefas = []
let contadorID =  0;

const inputText = document.querySelector(".inputText");
const btnEnviar = document.querySelector(".btnEnviar");
let lista = document.querySelector(".lista");

btnEnviar.addEventListener("click", function(){
adicionarTarefa();
});

inputText.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
})

function adicionarTarefa(){
    let texto = inputText.value.trim();

    if(texto !== "" ) {
        contadorID++;
        taferas.push({id: contadorID, tarefa: texto, concluido: false});
        inputText.value = "";
        console.log(tarefas);
    }
}

