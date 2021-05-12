const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cadastro(){
    rl.question('Nome: ', (nomeDoUsuario)  =>{ 
        rl.question('E-mail: ', (emailDoUsuario)  =>{
            rl.question('Senha: ', (senhaDoUsuario)  =>{            
                rl.question('Login: ', (loginAcesso) => {
                    rl.question('Senha: ', (senhaAcesso) => {
                        if(loginAcesso == nomeDoUsuario || loginAcesso == emailDoUsuario && senhaDoUsuario == senhaAcesso){
                            console.log(`Acesso com suecsso ${nomeDoUsuario}`);
                        } else {
                            console.log(`Login ou senha errada, tente novamente`);
                        }
                        
                        rl.close();

                    });
                });
                
        });
    });
});

    

}

/* tela de cadastro
    nome 
        amarzenar em uma variavel
    email
        amarzenar em uma variavel
    senha
        amarzenar em uma variavel
*/


/* tela de login
    login 
        email
    senha 
        checar se o login e senha está igual a variavel do cadastro.
            se sim, tela de bem vindo com o nome.
            se nao, msg de erro e tentar novamente.
*/

cadastro();