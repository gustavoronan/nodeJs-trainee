
//Query params = ?nome=NodeJS
//Route params = /curso/:id
//Request Body = { nome: 'NodeJS', tipo:'Backend' }

//CRUD: Create, Read, Update, Delete

const express = require('express') //recebendo a ferramenta express e armazenando dentro de uma const chamada express
//console.log(express) //verificando se foi instalado com sucesso

const server = express() //criando o servidor com express
server.use(express.json()) //função para receber requisições no body de um JSON

const cursos = ['NodeJS', 'JavaScript', 'PHP']

server.get('/curso', (req, res)=>{ //passando a rota /curso, e a funcao que deve ser executada ao acessar a rota
    const nome = req.query.nome // passando para a variavel a requisicao + query
    return res.json({curso: `aprendendo ${nome}`}) //retorno de um json no frontend
})


server.get('/route/:id', (req, res)=>{ //passando a rota /route um id a ser acessado
    const id = req.params.id //funciona da mesma forma que o query params
    return res.json({curso: `Curso ${id}`}) //retorno de um json no frontend
})

server.get('/cursos/:index', (req, res)=>{ //passando a rota /route um index como requisicao
    const { index } = req.params //recebendo a requisicao e armazenando na variavel index, de uma forma a usar desentruturação, basicamente acessando o index
    //de uma forma direta pelo req.params, basicamente dizendo: Do objeto req.params, pegue a propriedade chamada index e guarde seu valor na variável index
    return res.json(cursos[index]) //retorno de um json no frontend
})

server.get('/cursos', (req, res)=>{
    return res.json(cursos) //retorna uma listagem de todos os cursos
})


server.post('/cursos', (req, res)=>{ //metodo para gerar um post de um novo curso

    const { name } = req.body // const name recebe oque for enviado no corpo da requisição, o {name} é a propridade a ser enviada
    cursos.push(name) //enviando name para o array de cursos

    return res.json(cursos) //retornando os cursos atualizados
})

server.put('/cursos/:index', (req, res)=> {

    const {index} =  req.params //recebe cada posição da lista, no parametro vai ser passado a posicao do curso a ser editado
    const {name} = req.body //recebe o novo nome a partir do body

    cursos[index] = name //faz a alteração a partir do index passando o valor de name

    return res.json(cursos) //retorno da função
})

// Define uma rota para deletar um curso específico com base no índice fornecido na URL
server.delete('/cursos/:index', (req, res) => {
    // Extrai o parâmetro 'index' da URL usando desestruturação
    const { index } = req.params;

    // Remove o curso na posição especificada pelo índice no array 'cursos'
    // O método splice é usado para remover 1 elemento no índice indicado
    cursos.splice(index, 1);

    // Retorna a lista de cursos atualizada em formato JSON como resposta
    const message = res.json('Deletado com sucesso');
    return(message)
});


server.listen(3000) //porta que o servidor esta rodando