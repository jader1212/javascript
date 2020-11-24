class Cliente {
    constructor() {
        this.clientes = localStorage.getItem("tbClientes") === null ? [] : JSON.parse(localStorage.getItem("tbClientes"))
    }

    salva(cliente) {
        if (document.getElementById('codigo').getAttribute('disabled') === 'disabled') {
            this.apaga(cliente.codigo)
        }
        this.clientes.push(cliente)
        localStorage.setItem("tbClientes", JSON.stringify(this.clientes))
        alert('Cliente salvo com sucesso!')
        this.limpa()
        return true
    }
    apaga(codigo) {
        let index = this.clientes.findIndex(cliente => cliente.codigo == codigo)
        this.clientes.splice(index, 1) //o 1o parâmetro é o índice do array e o segundo o número de itens que serão removidos
        localStorage.setItem("tbClientes", JSON.stringify(this.clientes))
        cliente.atualiza()
    }

    limpa() {
        document.getElementById('codigo').value = ''
        document.getElementById('nome').value = ''
        document.getElementById('cep').value = ''
        document.getElementById('endereco').value = ''
        document.getElementById('bairro').value = ''
        document.getElementById('cidade').value = ''
        document.getElementById('uf').value = ''
        document.getElementById('nascimento').value = ''
        document.getElementById('telefone').value = ''
        document.getElementById('celular').value = ''
        document.getElementById('email').value = ''
        document.getElementById('observacoes').value = ''
        document.getElementById('cpf').value = ''
    }

    edita(cliente) {
        document.getElementById('codigo').setAttribute('disabled', 'disabled')
        document.getElementById('codigo').value = cliente.codigo
        document.getElementById('nome').value = cliente.nome
        document.getElementById('cep').value = cliente.cep
        document.getElementById('endereco').value = cliente.endereco
        document.getElementById('bairro').value = cliente.bairro
        document.getElementById('cidade').value = cliente.cidade
        document.getElementById('uf').value = cliente.uf
        document.getElementById('cpf').value = cliente.cpf
        document.getElementById('telefone').value = cliente.telefone
        document.getElementById('celular').value = cliente.celular
        document.getElementById('email').value = cliente.email
        document.getElementById('nascimento').value = cliente.nascimento
        document.getElementById('observacoes').value = cliente.observacoes

    }

    lista() {
        const listagem = this.clientes.map((cliente) => (
            `<tr>
                <td>${cliente.codigo}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.cep}</td>
                <td>${cliente.endereco}</td>
                <td>${cliente.bairro}</td>
                <td>${cliente.cidade}</td>
                <td>${cliente.uf}</td>
                <td>${cliente.cpf}</td>
                <td>${cliente.telefone}</td>
                <td>${cliente.celular}</td>
                <td>${cliente.email}</td>
                <td>${cliente.nascimento}</td>
                <td>${cliente.observacoes}</td>
                
                <td><button id='apagar' onClick='cliente.apaga(${cliente.codigo})'>🗑️Apagar</button>
                    <button id='editar' onClick='cliente.edita(${JSON.stringify(cliente)})'>📝Editar</button>
                </td>    
            </tr>`
        ))
        return (`
        <table border='1' class='paleBlueRows'>
         <caption>Relação dos Clientes</caption>
            <thead>
            <th>Código</th>      
            <th>Nome</th>
            <th>CEP</th>         
            <th>Endereço</th>
            <th>Bairro</th>      
            <th>Cidade</th>
            <th>UF</th> 
            <th>Nascimento</th>
            <th>CPF</th>         
            <th>Telefone</th>
            <th>Celular</th>      
            <th>E-mail</th>
            <th>Observações</th> 
            </thead>
            <tbody>
            ${listagem}
            </tbody>
        </table>`)
    }

    atualiza() {
        document.getElementById('listagem').innerHTML = cliente.lista()
    }

}
//instanciamos novo objeto
const cliente = new Cliente()

//tratamos o botão salvar
document.getElementById('salvar').onclick = function() {
    const registro = {
        nome: document.getElementById('nome').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        observacoes: document.getElementById('observacoes').value,
        rg: document.getElementById('rg').value,
        cpf: document.getElementById('cpf').value,
        uf: document.getElementById('uf').value,
        celular: document.getElementById('celular').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        nascimento: document.getElementById('nascimento').value,
    }
    cliente.salva(registro)

}

//tratamos a listagem
window.onload = function() {
    cliente.atualiza()
}