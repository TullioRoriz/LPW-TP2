
$(document).ready(function() {
    if(localStorage.getItem('username')) {

        let nome = localStorage.getItem('username');


        $('#nome').text(nome + ' é o recordista!');
        
    } else {
        $('#nome').text('Não houve registros de usúarios, sem recorde D:');
    }
});