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
       console.log(this.arrayProdutos)
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