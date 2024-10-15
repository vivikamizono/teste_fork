//-- Comentário --

console.log("Digite seu nickname:")

// Declaração de variável
let nick = "ImDeadWarrior"
console.log("...ImDeadWarrior")

// Concatenando uma mensagem com uma variável
console.log("Bem vindo, " + nick + "!")

// Constante: não pode ser reatribuído / alterado
const notificacao = " diz: "

// Let: pode ser reatribuído / alterado
let jogo = "Pokemon Go"

console.log(jogo + notificacao + "tem um novo pokemon na região")
console.log(jogo + notificacao + "você foi derrotado por um líder")

// Reatribuindo o valor de "jogo"
jogo = "Digimon"

console.log("-----------------------------")

console.log(jogo + notificacao + "tem um novo pokemon na região")
console.log(jogo + notificacao + "você foi derrotado por um líder")