//Cria a view, que vai atualizar na tela o que a gente captou
class View{
    mostraUsuario(dadosDeUsuario){
        let nome = document.getElementById("nome")
        nome.innerText = dadosDeUsuario.getNome()
        let login = document.getElementById("login")
        login.innerText = dadosDeUsuario.getLogin()
    }
    
    
    mostraRepositorio(repositorio){
    let rep = document.getElementById("repositorios");   
    let r = repositorio._repositorios;
    console.log(repositorio)

        for (let repo of r){
                let card = document.createElement("div");
                let a = document.createElement("a");
                a.innerText = repo.name;
                a.href = repo.html_url;
                    card.appendChild(a)
                a.classList.add("nome_repo")   
                let p = document.createElement("p");
                p.innerText = repo.language;
                    card.appendChild(p)
                rep.appendChild(card)
                card.classList.add("card");
        }

    }
}