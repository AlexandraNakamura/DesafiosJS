
        let data = new Date();
        // // let nome = document.querySelector("#nome");
        let nome = document.getElementById("nome");

        $("#confirmar").click(function(){
            nome = $("#nome").val();
    
    
            if(data.getHours()> 06 && data.getHours()<= 12){
                $("#situacao").html('Bom dia ' + nome + ', agora são ' + data.getHours() + ':' + data.getMinutes());
            } else {
                if(data.getHours()> 12 && data.getHours()<= 18) {
                    $("#situacao").html('Boa tarde ' + nome + ', agora são ' + data.getHours() + ':' + data.getMinutes());
                } else {
                    $("#situacao").html('Boa noite ' + nome + ', agora são ' + data.getHours() + ':' + data.getMinutes());
                }
            }
        });
