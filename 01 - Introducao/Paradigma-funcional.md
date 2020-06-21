# Paradigma funcional

- Imutabilidade é essencial
- Mutabilidade isolada (mudar variaveis dentro de escopos somente - bloco, funcao)

## First Class Functions

- Funções são tratadas como valores.

## High Order Functions

- Quer dizer que uma função pode receber outra função como parâmetro e retorna outra func como parametro.
- É possivel atribuir uma função para uma variavel (funcao anonima).

Ex:

```javascript
const dobro= function(x) {
    return x * 2
}

dobro(20)


const alunos = [...]
const isAprovado = aluno => aluno.nota >= 7

const aprovados = alunos.filter(isAprovado) // o filter so vai retornar os elementos do array que, quando passados pela funcao isAprovado retornaram TRUE
console.log(aprovados)

```
