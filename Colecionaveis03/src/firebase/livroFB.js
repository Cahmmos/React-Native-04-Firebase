import { conexaoFS } from './conexaoFB';

export class LivroFB{
    state = {
        colecao: conexaoFS.collection('ColecionaveisFirestore/Itens/livros')
    };

    pegarColecao(){
        return this.state.colecao;
    }

}