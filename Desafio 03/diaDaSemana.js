const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function bemVindo() {

    rl.question('Qual o seu nome?\n', (nomeDoUsuario) => {

        let hoje = new Date();
        let diaDaSemana = hoje.getDay()
        let nomeDoDiaDaSemana = "";

        switch (diaDaSemana) {
            case 0:
                nomeDoDiaDaSemana = 'Domingo';
                break;
            case 1:
                nomeDoDiaDaSemana = `Segunda-feira`;
                break;
            case 2:
                nomeDoDiaDaSemana = `Terça-feira`;
                break;
            case 3:
                nomeDoDiaDaSemana = "Quarta-feira";
                break;
            case 4:
                nomeDoDiaDaSemana = `Quinta-feira`;
                break;
            case 5:
                nomeDoDiaDaSemana = `Sexta-feira`;
                break;
            case 6:
                nomeDoDiaDaSemana = 'Sábado';
                break;
        }

        console.log(`Bem vindo ${nomeDoUsuario}`);
        console.log(`Hoje é ${nomeDoDiaDaSemana}`);

        rl.close();

    })
}

bemVindo();


