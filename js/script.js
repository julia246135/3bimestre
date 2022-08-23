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

})