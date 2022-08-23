$(document).ready(function() {

    $('#send').click(function(e) {
        e.preventDefault()

        var nome = $('#NOME').val()
        var idade = $('#IDADE').val()

        var frase = 'Ola ' + nome + ', sua idade é: ' + idade

        $('#NOME').val('')
        $('#IDADE').val('')

        $('#mensagem').append(frase)
    })

    $('#NOME').focusin(function() {
        $('#mensagem').empty()
    })

    //Botão de resumo

    $('p').hide()

    $('#btn-resumo').click(function(e) {
        e.preventDefault()

        //recebe o status
        let status = $(this).attr('data-status')

        $('#btn-resumo').empty()
        if (status == '1') {

            $('#btn-resumo').append('Esconder resumo')
            $('#btn-resumo').attr('data-status', '2')
        } else {

            $('#btn-resumo').append('Ver resumo')
            $('#btn-resumo').attr('data-status', '1')
        }

        $('p').toggle(2000)
    })

    //2000 -> 2 segundos

})