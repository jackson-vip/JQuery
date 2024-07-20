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



