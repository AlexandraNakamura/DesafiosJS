let tipo = parseInt(prompt("Escolha um numero para operação matematica que deseja fazer: 1 - Somar, 2 - Subitrair, 3 - Mutiplicar, 4 - Dividir"));
        
const numero1 = parseFloat(prompt("Digite o primeiro numero"));
const numero2 = parseFloat(prompt("Digite o segundo numero"));


switch (tipo) {
    case 1:
        const resultadoSoma = numero1 + numero2
        alert("O resultado da soma é " + resultadoSoma);
        break;
    case 2:
    const resultadoSubtracao = numero1 - numero2
        alert("O resultado da subtração é " + resultadoSubtracao);
        break;
    case 3:
    const resultadoMutiplicacao = numero1 * numero2
        alert("O resultado da mutiplicação é " + resultadoMutiplicacao);
        break;
    case 4:
    const resultadoDivisao = numero1 / numero2
        alert("O resultado da divisão é " + resultadoDivisao);
        break;
    default:
    alert(tipo);
}
