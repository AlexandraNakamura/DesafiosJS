
        // let data = new Date();
        // // // let nome = document.querySelector("#nome");
        // let nome = document.getElementById("nome");

        // $("#confirmar").click(function(){
        //     nome = $("#nome").val();
    
    
        //     if(data.getHours()> 06 && data.getHours()<= 12){
        //         $("#situacao").html('Bom dia ' + nome + ', agora são ' + data.getHours() + ':' + data.getMinutes());
        //     } else {
        //         if(data.getHours()> 12 && data.getHours()<= 18) {
        //             $("#situacao").html('Boa tarde ' + nome + ', agora são ' + data.getHours() + ':' + data.getMinutes());
        //         } else {
        //             $("#situacao").html('Boa noite ' + nome + ', agora são ' + data.getHours() + ':' + data.getMinutes());
        //         }
        //     }
        // });


        
        function confirmar() {
            const data = new Date();
            const tempoAtual = data.toLocaleTimeString();
            const nomeUsuario = document.getElementById("nome").value;  
            let periodo = ''

            
            if(tempoAtual >= "06" && tempoAtual <= "12"){
            periodo = 'Bom dia'
            } else {
                if(tempoAtual >= "18") {
                    periodo = 'Boa tarde'
                } else {
                    periodo = 'Boa noite'
                }
            }
        
            // var texto = periodo + ' ' + nomeUsuario + ', agora são ' + tempoAtual;
            const texto = `${periodo} ${nomeUsuario}, agora são ${tempoAtual}`;
    
            document.getElementById("cumprimento").innerHTML = texto;
        }
