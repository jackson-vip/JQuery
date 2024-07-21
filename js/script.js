// *** Teste de jQuery com alerta

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

// console.log( $('h1') );
// console.log( $('div') );
// console.log( $('ul') );
// console.log( $('li') );
// console.log( $('input') );
// console.log( $('select') );

// console.log( $('.lista1'));
// console.log( $('#img'));

// *** Combinação de seletores
    // Selecione elementos por tag específica dentro de um elemento - $('elemento tag')
// console.log( $('input.exemplo1')) ;
    // Selecionar elementos por classe de classe específica dentro de um elemento - $('elemento .classe')
// console.log( $('.lista1 .exemplo1')) ;
// console.log( $('.lista2 .exemplo1')) ;

// Atuação sobre o array de retorno dos elementos selecionados

// console.log( $('.lista1 .exemplo1:first') ); // Primeiro elemento
// console.log( $('.lista1 .exemplo1:last') ); // Último elemento
// console.log( $('.lista1 .exemplo1:even') ); // Elementos pares
// console.log( $('.lista1 .exemplo1:odd') ); // Elementos ímpares

// *** Sequência de execução de código

// Primeira forma de execução - Mais utilizada
// $(document).ready(() => {
    
//     function teste () {
//         console.log($('#exemplo'));
//     }
//     teste();
// });

// Segunda forma de execução
// function teste () {
//     console.log($('#exemplo'));
// }

// $(teste);

// Terceira forma de execução
// $(function () {
//     console.log($('#exemplo'));
// });


// *** Recuperando Manipulando Atributos dos Elementos 

// $(document).ready(() => {

//     // $('img').attr('src', 'img/esfera_2.png');
//     $('img').attr('border', '20');

//     // console.log( $('div').attr('style', 'background-color: blue; width: 200px; height: 200px;') );
    
//     console.log( $('input').attr('type', 'password') );
// });

// *** Recuperando e Manipulando o conteúdo dos elementos

// $(document).ready(() => {
//     console.log( 'Conteudo DIV1 : ', $('#div1').html() );
//     console.log( 'Conteudo DIV2 : ', $('#div2').html() );

//     // A utilização do método html() permite recuperar o conteúdo de um elemento
//     console.log( 'Conteudo DIV1 : ', $('#div1').html('<strong style="color: red">Eu sou um novo conteúdo!</strong>') );
    
//     // A utilização do método text() é semelhante ao método html(), porém ele não interpreta tags HTML
//     console.log( 'Conteudo DIV1 : ', $('#div1').text('<strong style="color: red">Eu sou um novo conteúdo!</strong>') );

// });

// *** Recuperando Manipulando Valores dos Elementos

// Os Comandos a seguir devem ser executados no console do navegador para que sejam visualizados.

// $('#nome').val(); // Recupera o valor do campo
// $('#origem').val(); // Recupera o valor do campo
// $('#nome').val('Fulano'); // Atribui um valor ao campo


// Vamos aprender a manipular os elementos input do tipo checkbox e radio

$('.sexo:checked').val(); // Recupera o valor do campo

// Com a utilização do método each() é possível percorrer todos os elementos selecionados e realizar uma ação para cada um deles
$.each( $('.interesses:checked'), ( indice, valor ) => {
    console.log( indice , valor.value )
})


