//biblioteca npm require readline-sync packt entrada de pessoas usuários
const livros = require('./database')
console.log(livros)
// pegar o input
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N-> ')
// se a entrada for 'S' sim, a gente mostra as categorias disponiveis, e pergunta qual categoria escolhe
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log ('Essas são as categorias disponiveis:')
    console.log ('Produtividade e estilo de vida','/Historia brasileira','/Américas','/Estilo de vida','/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = livros.filter( livro => livro.categoria === entradaCategoria)

    console.table (retorno)
} else {                //se escolher não mostra todos os livros em ordem crescente pela quantidade de pagina
    
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas são todos os livros disponiveis: ')
    console.table(livrosOrdenados)
}
