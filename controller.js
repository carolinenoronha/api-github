//Cria a controller, que é quem vai "comandar" a view e a model
class Controller {
    //Função que busca o usuario
    buscarUsuario(nomeDeUsuario){
        let model = new userModel;
        model.localizaUsuario(nomeDeUsuario)
        let view = new View;
        view.mostraUsuario(model)
    }
    //Função que busca o repositório
    buscaRepositorio(nomeDeUsuario){
        let model = new userModel;
        model.localizaRepositorio(nomeDeUsuario)
        let view = new View;
        view.mostraRepositorio(model)
    }
}
