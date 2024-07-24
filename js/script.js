// *** Teste de jQuery com alerta

// $(document).ready(() => {
//     $('#btn').click(() => {
//         alert('Clicou no botão');
//     });
// });


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

// $('.sexo:checked').val(); // Recupera o valor do campo

// Com a utilização do método each() é possível percorrer todos os elementos selecionados e realizar uma ação para cada um deles
// $.each($('.interesses:checked'), (indice, valor) => {
//     console.log(indice, valor.value)
// })


// *** Inserindo e Removendo Elementos no DOM com jQuery

/* 

Vamos aprender um pouco : 
prepend; append; before; after 

*/

// $(document).ready(() => {
//     $('#lista1').append('<li>Item 4</li>'); // Adiciona um item ao final da lista
//     $('#lista1').prepend('<li>Item 0</li>'); // Adiciona um item ao início da lista
//     $('#lista1').before('<h2>Lista 1</h2>'); // Adiciona um elemento antes da lista
//     $('#lista1').after('<p>Texto após a lista</p>'); // Adiciona um elemento após a lista

//     $('#lista3').html('<p>Eu substitui todo o conteúdo que estava aqui! </p>'); // Substitui todo o conteúdo do elemento
//     $('#lista3').remove(); // Remove o elemento
//     $('.remove-item').remove(); // Remove todos os elementos com a classe remove-item

// });

// *** Navegando entre os elementos HTML ( parent(); closest(); find(); )
/*  
    » O parent() retorna o elemento pai do elemento selecionado
    » O closest() Procura o elemento pai mais próximo que corresponde ao seletor
    » O find() retorna os elementos filhos do elemento selecionado
*/

// Os comandos a seguir devem ser executados no console do navegador para que sejam visualizados.

// $(document).ready(() => {
//     console.log($('.secao1').parent()); // Retorna o elemento pais
//     console.log($('.subSecao').closest()); // Retorna o elemento mais próximo
//     console.log($('.subSecao').closest('#pagina')); // Retorna o elemento mais próximo
//     console.log($('.item').closest('#topo'));
//     console.log($('#rodape').find('p')); // Retorna os elementos filhos
//     console.log($('#topo').find('.item')); // Retorna os elementos filhos
//     console.log($('.secao1').parent().find('h1')); // Exemplo de combinação de métodos

// });

// *** Manipulando Classes dos Elementos

/* 

» css() - adiciona propriedades inline ao elemento selecionado
» addClass() - Adiciona uma classe ao elemento
» removeClass() - Remove uma classe do elemento
» hasClass() - Verifica se o elemento possui uma classe

*/

// $(document).ready(() => {
    
//     // Podemos chamar o método css() quantas vezes quisermos
//     console.log( $ ('#topo').css('background-color', 'blue').css('color', '#fff').css('padding', '10px'));
    
//     // É possivel passar um objeto com vários atributos 
//     console.log( $ ('#topo').css(
//         {
//             'background-color': 'lightblue',
//             'color': 'black',
//             'padding': '10px'
//         }
//     ));

//     // Adiciona uma classe ao elemento

//     console.log( $('input').addClass('campo') ); // Adiciona a classe campo ao elemento input
//     console.log( $('input').addClass('campo padao') ); 
//     // console.log( $('input').addClass('campo padao erro') ); 
//     console.log( $('textarea').addClass('campo erro') ); 
    
//     console.log( $('textarea').hasClass('erro') ); // Verifica se o elemento possui a classe erro
//     console.log( $('textarea').hasClass('padrao') ); // Verifica se o elemento possui a class padrao
    
//     // Remove uma classe do elemento
//     console.log( $('textarea').removeClass('erro') ); // Remove a classe erro do elemento

//     // Se o elemento não possuir a classe erro, adiciona a classe borda
//     if ( !$('textarea').hasClass('erro') ) {
//         $('textarea').addClass('borda');
//     }
    
//     // Veri9fica se o elemento possui a classe erro e exibe um alerta 
//     if ( $('textarea').hasClass('erro') ) {
//         alert('O campo está com erro');
//     }

// });

// *** Eventos com jQuery

/* 
    Eventos do Browser 
    ******************
    onload, onscroll, onresize
*`

// $('document').ready(() => {

//     $('#onload').html('Página carregada com sucesso!');

//     // O SCROLL - é um evento que é acionado quando a barra de rolagem da página é acionada
//     $(window).scroll(() => {
//         $('#scroll').html('Scroll acionado');
//     })

//     // O RESIZE - é um evento que é acionado quando a janela do navegador é redimensionada
//     $(window).resize(() => {
//         $('#resize').html('Janela redimensionada');
//     })

//     // Function ou Arrow Function 
//     $('#div1').scroll(function() {
//         $(this).css('background-color', 'blue') 
//     });

//     // A Arrow Function não possui o this e por isso não é possível acessar o elemento que acionou o evento
//     $('#div1').scroll( e => {
//         $(e.target).css('background-color', 'blue') 
//     });

// });


/* 
    Eventos do Mouse
    ****************
*/
 
// »» Eventos do Mouse - mousedown, mouseup, click, dblclick, 
// mousemove, mouseenter, mouseleave, mouseover, mouseout

$('document').ready(() => {

    /* É só remover os comentários para testar os eventos. 
    
    */

    // O mousedown é acionado quando o botão do mouse é pressionado
    // $('#btn1').mousedown(() => {
    //     $('#div2').css('background-color', 'pink')
    // });

    // O mouseup é acionado quando o botão do mouse é liberado
    // $('#btn1').mouseup(() => {
    //     $('#div2').css('background-color', 'lightblue')
    // });

    // O click é acionado quando o botão do mouse é pressionado e liberado
    // $('#btn1').click(() => {
    //     $('#div2').css('background-color', 'lightgreen')
    // });

    // O dblclick é acionado quando o botão do mouse é pressionado e liberado duas vezes
    // $('#btn2').dblclick(() => {
    //     $('#div2').css('background-color', 'lightgreen')
    // });

    // O mousemove é acionado quando o mouse é movido
    // $('#div2').mousemove(() => {
    //     $('#div2').css('background-color', 'yellow')
    // });

    // Exemplo 2
    // $('#div2').mousemove( (e) => {
    //     $('#resultadoDiv').html('X:' + e.offsetX + '|  Y:' + e.offsetY);
    // });

    // O mouseenter é acionado quando o mouse entra no elemento
    // $('#div2').mouseenter(() => {
    //     $('#div2').css('background-color', 'purple')
    // });

    /* Mouseouver e Mouseout  (Antigos no JQuery) */
    
    // O mouseover é acionado quando o mouse passa por cima do elemento
    // $('#divExterna').mouseover(() => {
    //     $('#resultadoDiv1').html(' entou');
    //     console.log('Div Externa entrou');
    // });

    // console.log('Div Externa entrou');
    // $('#divInterna').mouseover(() => {
    //     $('#resultadoDiv2').html(' entou');
    //     console.log('Div Interna entrou');
    // });

    // O mouseout é acionado quando o mouse sai do elemento
    // $('#divExterna').mouseout(() => {
    //     $('#resultadoDiv1').html(' Saiu');
    //     console.log('Div Externa saiu');
    // });

    // $('#divInterna').mouseout(() => {
    //     $('#resultadoDiv2').html(' Saiu');
    //     console.log('Div Interna saiu');
    // });

    /* Mouseenter e mouseleave (Novos)  */

    // o mouseleave é acionado quando o mouse sai do elemento
    // $('#divExterna').mouseleave(() => {
    //     $('#resultadoDiv1').html(' Saiu');
    //     console.log('Div Externa saiu');

    // });

    // $('#divInterna').mouseleave(() => {
    //     $('#resultadoDiv2').html(' Saiu');
    //     console.log('Div Interna saiu');
    // });

     // Exemplo 2
    // $('#divExterna').mouseenter(() => {
    //     $('#resultadoDiv1').html(' entou');
    //     console.log('Div Externa entrou');

    // });

    // $('#divInterna').mouseenter(() => {
    //     $('#resultadoDiv2').html(' entou');
    //     console.log('Div Interna entrou');
    // });


    /* 
        Eventos do Teclado 
        ******************
        keydown, keyup, keypress  
    */

    // O keydown é acionado quando uma tecla é pressionada
    // $('#teclado').keydown(() => {
    //     $('#resultadoTeclado').html('Tecla pressionada');
    // });

    // O keyup é acionado quando uma tecla é liberada
    // $('#teclado').keyup((e) => {

    //     $('#resultadoTeclado').html('Tecla liberada');
        
    //     // Temos a possibilidade de capturar o evento e verificar 
    //     // qual tecla foi pressionada através da propriedade keyCode
    //     if (e.keyCode == 13) {
    //         txt = $(e.target).val();
    //         alert('Você pressionou a tecla Enter');
    //         $('#resultadoTeclado').html('Valor Capturado: ' + txt);
    //     }
    // });

    // O keypress é acionado quando uma tecla é pressionada e liberada
    // $('#teclado').keypress(() => {
    //     $('#resultadoTeclado').html('Tecla pressionada e liberada');
    // });

/* 
    Eventos de Formulário 
    ******************
    submit, change, focus, blur
*/

    // O focus é acionado quando o elemento recebe o foco
    // $('#nome, #email').focus((e) => {
    //     evento = e.target;
    //     $(evento).addClass('foco');
    //     // $('#nome, #email').css('background-color', 'lightblue');
    //     $('#nome, #email').attr('placeholder', 'Recebeu o foco');
    // });

    // O blur é acionado quando o elemento perde o foco
    // $('#nome, #email').blur((e) => {
    //     evento = e.target;
    //     $(evento).removeClass('foco');
    //     // $('#nome, #email').css('background-color', 'white');
    //     $('#nome, #email').attr('placeholder', 'Perdeu o foco');
    // });

    // O change é acioum ou mais manipuladores de eventos para os elementos selecionados.ado quando o valor do elemento é alterado
    // $('#opcao').change((e) => {
    //     console.log($(e.target).val())
    // });

    // O submit é acionado quando o formulário é submetido
    // $('#form').submit((e) => {
    //     e.preventDefault();
    //     console.log('Formulário submetido');
    // });

    // $('a').click((e) => {
    //     e.preventDefault();
    //     console.log('Clique no link');
    // });
});

$(document).ready(() => {

    // O método on() é utilizado para adicionar um ou mais manipuladores de eventos para os elementos selecionados.
    // A captura do elemento body é necessária para que o evento seja acionado em elementos que ainda não foram criados

    // $('body').on('focus', 'input' , (e) => {
    //     $(e.target).removeClass('desfocado');
    //     $(e.target).addClass('foco');
    // });

    // $('body').on('blur', 'input' , (e) => {
    //     $(e.target).removeClass('foco');
    //     $(e.target).addClass('desfocado');
    // });

    // $('body').append('<br /><br /><input type="text" class="desfocado">')

    // O método off() é utilizado para remover um ou mais manipuladores de eventos para os elementos selecionados.
    // $('body').off('blur', 'input');


    /* 
        Disparando Eventos de forma programática e eventos auxiliadores
        ***************************************************************
        trigger(), hover(), toggleClass()
     */

    // O método trigger() - é utilizado para acionar um evento programaticamente
    // $('#btn1').on('click', () => {
    //     alert('BTN 2 foi clicado');
    // });

    // $('#btn1').on('click', () => {
    //     $('#btn2').tigger('click');
    // });

    // $('#div1').on('mouseenter', (e) => {
    //     $(e.target).addClass('emDestaque')
    // });

    // $('#div1').on('mouseleave', (e) => {
    //     $(e.target).removeClass('emDestaque')
    // });

    // O método hover() - Função auxiliar para captura dos eventos mouseenter, mouserout, mouseleave e mouseover
    // Temos a possibilidade de reduzir a codificação a cima usando o método hover():

    // $('#div1').hover(
    //     e => $(e.target).addClass('emDestaque'),
    //     e => $(e.target).removeClass('emDestaque')
    // );

    // O método toggleClass() - Função auxiliar para adicionar ou remover uma classe de um elemento
    // $('#div1').hover(
    //     e => $(e.target).toggleClass('emDestaque'),
    // );

});

/* 
    Efeitos Especiais 
    *****************

    Show(), Hide(), Toggle(), FadeIn(), FadeOut(), FadeToggle(), FodeTo(),
    SlideDown(), SlideUp(), SlideToggle(), Animate()
*/

$(document).ready(() => {

    // Podemos passsa os seguintes parâmetros : Slow, Fast, Medio e (Númerais) que corresponde 
    // o tempo em milisegundos

    // O método hide() - é utilizado para ocultar um elemento
    // $('#div1').hide('slow');
    // $('#div1').hide('medio');
    // $('#div1').hide('fast');
    // $('#div1').hide(3000);

    // O método show() - é utilizado para exibir um elemento
    // $('#div1').show();
    // $('#div1').show('slow');
    // $('#div1').show('medio');
    // $('#div1').show('fast');
    // $('#div1').show(3000);

    // O método toggle() - é utilizado para alternar entre os métodos show() e hide()
    $('#btn1').on( 'click', () => $('#div1').toggle('slow'));

    // Vamos ver os métodos fadeIn() , fadeOut() , fadeToggle() e fadeTo()
    
    // $('#div2').fadeOut(); // Oculta o elemento

    // $('#div2').fadeIn('slow'); // Exibe o elemento

    // $('#div2').fadeToggle(); // Alterna entre os métodos fadeIn() e fadeOut()

    // $('#btn2').on('click', () => $('#div2').fadeToggle('slow')); // Alterna entre os métodos fadeIn() e fadeOut()
    
    // »» Opacidade do elemento vai de 0 a 1
    $('#btn2').on('click', () => $('#div2').fadeTo('slow', 0.2)); // Altera a opacidade do elemento

    // Vamos ver os métodos slideDown() , slideUp() , slideToggle() e animate()

    $('#div3').slideUp('slow'); // Oculta o elemento

    $('#div3').slideDown('slow'); // Exibe o elemento

    $('#btn3').on('click', () => $('#div3').slideToggle('slow')); // Alterna entre os métodos slideDown() e slideUp()

    // O método animate() - é utilizado para criar animações personalizadas
    
    // Exemplo 1
    // $('#btn4').on('click', () => { 
    //     $('#div4').animate(
    //         {
    //             width: '300px',
    //             height: '100px',
    //             opacity: 0.5
    //         }, 3000
    //     );
    // });

    // Exemplo 2

    // $('#btn4').on('click', () => { 
    //     $('#div4').animate(
    //         {
    //             width: '300px',
    //             height: '100px',
    //             opacity: 0.5
    //         }, {
    //             duration: 3000,
    //             start: () => console.log(('Iniciando a animação')),
    //             complete: () => console.log(('Animação finalizada'))
    //         }
    //     );
    // });

    // Exemplo 3

    let resultadoFinal = {
        'width': '20px',
        'height': '20px',
        'border-radius': '50%',
        'top': '0',
        'z-index': '1',
    }

    $('#btn4').on('click', () => { 
        $('#div4').animate(
            resultadoFinal , {
                duration: 3000,
                start: () => console.log(('Iniciando a animação')),
                complete: () => {
                    $('#div5').animate(
                        {
                            'width': '30px',
                            'height': '30px',
                            'opacity': 0.5,
                            'left': '50px',
                        }, {
                            duration: 3000,
                        }
                    );
                }
            }
        );
    });


});






