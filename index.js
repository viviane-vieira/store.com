class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];

    }
    salvar() {
       let produto = this.lerDados();

       if(this.validaCampo(produto)) {
          this.adicionar(produto);
       }
       this.listaTabela();
      
    }
    listaTabela() {
       let tbody = document.getElementById('tbody');  
       for (let i = 0; i <this.arrayProdutos.length; i++) {//tr =linha da tabela //td = colunas da tabela
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
            td_tamanho.innerText = this.arrayProdutos[i].acoes


        
        
       }
    }
    adicionar() {
       this.arrayProdutos.push(produto);
       this.id++;
    }
    lerDados() {
        let produto = {}
        
       produto.id = this.id;
       produto.nomeProduto = document.getElementById('produto').value;
       produto.cor = document.getElementById('cor').value;
       produto.preco = document.getElementById('preco').value;
       produto.tamanho = document.getElementById('tamanho').value;
      


        return produto;

    }
    validaCampo(produto) {
        let msg = ''
        if(produto.nomeProduto == '') {
            msg += '- Informe o Nome do Produto \n';
        }
        if(produto.preco == '') {
            msg += '- Informe o Preço do Produto \n';
        }
        if(produto.cor == '') {
            msg += '- Informe a Cor do Produto \n';
        }
        if(produto.tamanho == '') {
            msg += '- Informe o tamanho do Produto \n';
        }

        if (msg != '') {
            alert(msg);
            return false
        }
        return true

    }

    
    cancelar(){
       
    }
}

const produto = new Produto();