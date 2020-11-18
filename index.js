let botao = document.getElementById("btn")
let corpo = document.querySelector("body")


//Instancia a controller 
let controller = new Controller
//Cria o evento do botão quando ele é clicado
botao.addEventListener("click", function (){
    let input = document.getElementById("input");
    let nomeDeUsuario = input.value;
    corpo.innerHTML = `
    <div id= "titulo">
    <h1>API Github</h1><br><br>
    </div>


    <section id="segunda_tela">
    <div id="perfil">
    <h2 id = "titulo">Perfil</h2>
    <p id= "nome">Nome da pessoa</p>
    <p id = "login">Username</p>
    </div>
    

    <div id= "repositorios">
    <h2 id = "titulo">Repositórios:</h2>
    
    </div>
    </section>` 
    
    
    //Executa os métodos da controller
    controller.buscarUsuario(nomeDeUsuario)
    controller.buscaRepositorio(nomeDeUsuario)
}
)