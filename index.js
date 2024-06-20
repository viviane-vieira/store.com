class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampo(produto)) {
            this.adicionar(produto);
            this.listaTabela();
            this.cancelar(); // Opcional: Limpar campos após salvar
        }
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerHTML = ''; // Usando innerHTML para limpar o conteúdo

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_Produto = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_cor = tr.insertCell();
            let td_tamanho = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_Produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].preco;
            td_cor.innerText = this.arrayProdutos[i].cor;
            td_tamanho.innerText = this.arrayProdutos[i].tamanho;

            td_id.classList.add('center')

             //  adicionar botões de ação 
             let imgEdit = document.createElement('img');
             imgEdit.src = 'img/edit.png';

             let imgDelete = document.createElement('img');
             imgDelete.src = 'img/excluir.png';


             td_acoes.appendChild(imgEdit);
             td_acoes.appendChild(imgDelete);
        }       
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados() {
        let produto = {
            id: this.id,
            nomeProduto: document.getElementById('produto').value,
            cor: document.getElementById('cor').value,
            preco: document.getElementById('preco').value,
            tamanho: document.getElementById('tamanho').value
        };

        return produto;
    }

    validaCampo(produto) {
        let msg = '';
        if (produto.nomeProduto === '') {
            msg += '- Informe o Nome do Produto \n';
        }
        if (produto.preco === '') {
            msg += '- Informe o Preço do Produto \n';
        }
        if (produto.cor === '') {
            msg += '- Informe a Cor do Produto \n';
        }
        if (produto.tamanho === '') {
            msg += '- Informe o tamanho do Produto \n';
        }

        if (msg !== '') {
            alert(msg);
            return false;
        }
        return true;
    }

   cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
        document.getElementById('cor').value = '';
        document.getElementById('tamanho').value = '';
    }
}


const produto = new Produto();