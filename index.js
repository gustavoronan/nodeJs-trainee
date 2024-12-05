
//Query params = ?nome=NodeJS
//Route params = /curso/:id
//Request Body = { nome: 'NodeJS', tipo:'Backend' }


const express = require('express') //recebendo a ferramenta express e armazenando dentro de uma const chamada express

console.log(express) //verificando se foi instalado com sucesso

const server = express() //criando o servidor com express

const cursos = ['NodeJS', 'Java', 'PHP']

server.get('/curso', (req, res)=>{ //passando a rota /curso, e a funcao que deve ser executada ao acessar a rota
    const nome = req.query.nome // passando para a vareavel a requisicao + query
    return res.json({curso: `aprendendo ${nome}`}) //retorno de um json no frontend
})


server.get('/route/:id', (req, res)=>{ //passando a rota /route um id a ser acessado
    const id = req.params.id //funciona da mesma forma que o query params
    return res.json({curso: `Curso ${id}`}) //retorno de um json no frontend
})

server.get('/cursos/:index', (req, res)=>{ //passando a rota /route um index como requisicao
    const { index } = req.params //recebendo a requisicao e armazenando na vareavel index, de uma forma a usar desentruturação, basicamente acessando o index
    //de uma forma direta pelo req.params, basicamente dizendo: Do objeto req.params, pegue a propriedade chamada index e guarde seu valor na variável index
    return res.json(cursos[index]) //retorno de um json no frontend
})


server.listen(3000) //porta que o servidor esta rodando