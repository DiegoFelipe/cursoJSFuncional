# Como funciona o JS

## Heap

- área de memoria, os objetos, arrays ficam nessa área.

## Stack

- Pilha de execução.
- Quando chamamos uma funcão ela é adiciona à pilha de execução.
- Não é possível executar mais de uma coisa ao mesmo tempo no JS.
- JS é single threaded, nao executa mais de uma coisa ao mesmo tempo.
  
## Event Queue

- Uma fila de espera para executar funções.
- Prioriza as funcoes que executam mais rápido.

## Event Loop

- Monitora o Event Queue para ver se tem alguma coisa pra ele executar, mas se tiver alguma coisa na Stack o event loop não vai conseguir atender o event queue.