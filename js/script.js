// Teste de jQuery com alerta

$(document).ready(() => {
    $('#btn').click(() => {
        alert('Clicou no botão');
    });
});


// Seleção de elementos com jQuery

/* 
    Selecione elementos por tag - $('tag')
    Selecione elementos por classe - $('.classe')
    Selecione elementos por id - $('#id')
*/

console.log( $('h1') );
console.log( $('div') );
console.log( $('ul') );
console.log( $('li') );
console.log( $('input') );
console.log( $('select') );

console.log( $('.lista1'));
console.log( $('#img'));

// Combinação de seletores
    // Selecione elementos por tag específica dentro de um elemento - $('elemento tag')
console.log( $('input.exemplo1')) ;
    // Selecionar elementos por classe de classe específica dentro de um elemento - $('elemento .classe')
console.log( $('.lista1 .exemplo1')) ;
console.log( $('.lista2 .exemplo1')) ;

// Atuação sobre o array de retorno dos elementos selecionados

console.log( $('.lista1 .exemplo1:first') ); // Primeiro elemento
console.log( $('.lista1 .exemplo1:last') ); // Último elemento
console.log( $('.lista1 .exemplo1:even') ); // Elementos pares
console.log( $('.lista1 .exemplo1:odd') ); // Elementos ímpares

// Sequência de execução de código

// Primeira forma de execução - Mais utilizada
$(document).ready(() => {
    
    function teste () {
        console.log($('#exemplo'));
    }
    teste();
});

// Segunda forma de execução
function teste () {
    console.log($('#exemplo'));
}

$(teste);

// Terceira forma de execução
$(function () {
    console.log($('#exemplo'));
});
