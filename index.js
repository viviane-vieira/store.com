class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null; //toda vez que esse valor tiver diferente de null quer dizer que estou fazendo uma edição
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampo(produto)) {
            if(this.editId == null){
               this.adicionar(produto);
            }else {
                this.atualizar(this.editId, produto);

            }

         
            this.listaTabela();
            this.cancelar(); // Opcional: Limpar campos após salvar
        }
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerHTML = ''; // Usando innerHTML para limpar o conteúdo

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();//colunas na tabela
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
             imgEdit.setAttribute("onclick", "produto.preparaEdicao("+ JSON.stringify(this.arrayProdutos[i])+")");

             let imgDelete = document.createElement('img');
             imgDelete.src = 'img/excluir.png';
             imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")");


             td_acoes.appendChild(imgEdit);
             td_acoes.appendChild(imgDelete);
        }       
    }

    adicionar(produto) {
        produto.preco = parseFloat(produto.preco);
        this.arrayProdutos.push(produto);
        this.id++;
    }
    atualizar(id, produto){
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].preco= produto.preco;
                this.arrayProdutos[i].cor = produto.cor;
                this.arrayProdutos[i].tamanho = produto.tamanho;
            };
            
        }
    }


    preparaEdicao(dados){
        this.editId = dados.id;

        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('preco').value = dados.preco;
        document.getElementById('cor').value = dados.cor;
        document.getElementById('tamanho').value = dados.tamanho;
        
        //botao salvar com edição de atualizar
        document.getElementById('btn1').innerText = 'Atualizar';

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
        
        document.getElementById('btn1').value = "Salvar";
        this.editId = null;
   }
    deletar(id) {

        if(confirm('Deseja realmente deletar o produto do ID' + id)) {       
        let tbody = document.getElementById('tbody');

      for (let i = 0; i < this.arrayProdutos.length; i++) {
          
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);

            }
      console.log(this.arrayProdutos);
    }
  }

}    
   
}


const produto = new Produto();