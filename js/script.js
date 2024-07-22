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
$.each($('.interesses:checked'), (indice, valor) => {
    console.log(indice, valor.value)
})


// *** Inserindo e Removendo Elementos no DOM com jQuery

/* 

Vamos aprender um pouco : 
prepend; append; before; after 

*/

$(document).ready(() => {
    $('#lista1').append('<li>Item 4</li>'); // Adiciona um item ao final da lista
    $('#lista1').prepend('<li>Item 0</li>'); // Adiciona um item ao início da lista
    $('#lista1').before('<h2>Lista 1</h2>'); // Adiciona um elemento antes da lista
    $('#lista1').after('<p>Texto após a lista</p>'); // Adiciona um elemento após a lista

    $('#lista3').html('<p>Eu substitui todo o conteúdo que estava aqui! </p>'); // Substitui todo o conteúdo do elemento
    $('#lista3').remove(); // Remove o elemento
    $('.remove-item').remove(); // Remove todos os elementos com a classe remove-item

});

// *** Navegando entre os elementos HTML ( parent(); closest(); find(); )
/*  
    » O parent() retorna o elemento pai do elemento selecionado
    » O closest() Procura o elemento pai mais próximo que corresponde ao seletor
    » O find() retorna os elementos filhos do elemento selecionado
*/

// Os comandos a seguir devem ser executados no console do navegador para que sejam visualizados.

$(document).ready(() => {
    console.log($('.secao1').parent()); // Retorna o elemento pais
    console.log($('.subSecao').closest()); // Retorna o elemento mais próximo
    console.log($('.subSecao').closest('#pagina')); // Retorna o elemento mais próximo
    console.log($('.item').closest('#topo'));
    console.log($('#rodape').find('p')); // Retorna os elementos filhos
    console.log($('#topo').find('.item')); // Retorna os elementos filhos
    console.log($('.secao1').parent().find('h1')); // Exemplo de combinação de métodos

});


