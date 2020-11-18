//Cria a model
class userModel {
    
    //Salva os coisa (deu branco do nome)  
    constructor(){
        this._name = "";
        this._login = "";
        this._repositorios ="";
    }
    
    //Função que realiza a requisição de usuário se tudo estiver ok
    localizaUsuario(nomeDeUsuario){
        let req = new XMLHttpRequest;
        
        req.addEventListener("load", ()=>{
            if (req.status == 200){
                let dadosDeUsuario = JSON.parse(req.responseText)
                this._Atualiza(dadosDeUsuario);
                console.log(this._name,this._login)
            }

            else{
                erro(req.status)
            }

        })
        
        //Abre e envia a requisição
        req.open("GET", `https://api.github.com/users/${nomeDeUsuario}`, false)
        req.send()
    }
    //Função que realiza a requisição de repositório se tudo estiver ok
    localizaRepositorio(nomeDeUsuario){
        let req = new XMLHttpRequest;
        
        req.addEventListener("load", ()=>{
            if (req.status == 200){
                let repo = JSON.parse(req.responseText)
                this._repositorios = repo;
            }
        })
        
        //Abre e envia a requisição
        req.open("GET", `https://api.github.com/users/${nomeDeUsuario}/repos`, false)
        req.send()
    }
    
    //Função que linka os coisa com os dados da API
    _Atualiza(dadosDeUsuario){
        this._name = dadosDeUsuario.name;
        this._login = dadosDeUsuario.login;
    }
    //Funções para proteger o código   
    getNome(){
        return this._name
    }
    
    getLogin(){
        return this._login
    }
    
    
}

function erro(num_erro){
    corpo.innerHTML = ` <h1 id = titulo>Erro ${num_erro}</h1>
    <p id = "mensagem">Infelizmente tivemos dificuldades em concluir sua busca.</p>
    <img id = "sad_img" src="https://media.tenor.com/images/2bc775a87bb372e80d200c27c5b3c407/tenor.gif"><br>
    <a href = "index.html" id="btn_error">Tentar novamente</a>` 
}