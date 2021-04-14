const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual operação deseja fazer? \n somar \n subtrair \n mutiplicar \n dividir \n ', (operacao) => {
    rl.question('Digite o primeiro valor: ', (valor1) => {
        valor1 = parseFloat(valor1);
        rl.question('Digite o segundo valor: ', (valor2) => {
            valor2 = parseFloat(valor2);


            switch (operacao) {
                case 'somar':
                    let resultadoSoma = valor1 + valor2
                    console.log(`O resultado da soma é ${resultadoSoma}`);
                    break;
                case 'subtrair':
                    let resultadoSubtrair = valor1 - valor2
                    console.log(`O resultado da subtrair é ${resultadoSubtrair}`);
                    break;
                case 'mutiplicar':
                    let resultadoMutiplicar = valor1 * valor2
                    console.log(`O resultado da subtrair é ${resultadoMutiplicar}`);
                    break;
                case 'dividr':
                    let resultadoDividir = valor1 / valor2
                    if (valor2 === 0) throw new Error('Impossível fazer divisão por 0');
                    console.log(`O resultado da subtrair é ${resultadoDividir}`);
                    break;
                case '':
                    console.log('Operação invalida, dente novamente');
                    break;
            }
            rl.close();

        });
    });
});