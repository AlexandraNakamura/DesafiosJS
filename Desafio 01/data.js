        function confirmar() {
            let data = new Date();
            let nomeUsuario = document.getElementById("nome").value;
            const hora = data.getHours();
            const tempoAtual = data.toLocaleTimeString();
            let periodo = '';

            if(hora >= 06 && hora <= 11){
                    periodo = 'Bom dia'
                    } else if(hora >= 12 && hora <= 18) {
                            periodo = 'Boa tarde'
                        } else {
                            periodo = 'Boa noite'
                        }


            let texto = `${periodo} ${nomeUsuario}, agora são ${tempoAtual}`;
            document.getElementById("cumprimento").innerHTML = texto;
        }

