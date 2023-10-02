$(document).ready(function() {
    //descer formulario
    $('header button').click(function() {
        $('form').slideDown();
    })

    //recolher formulario
    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    //impedir que o evento submit tenha eu comportamento padrao
    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real"
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');

    })
})

