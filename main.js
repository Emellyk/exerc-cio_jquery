$(document).ready(function() {

        $('form').on('submit', function(e) {
            e.preventDefault();

            const novaTarefa = $('#nova-tarefa').val();
            const novoItem = $(`<li>${novaTarefa}</li>`).click(function() {
                $(this).css("text-decoration", "line-through");
        });

            $(novoItem).appendTo('ul');
            $('#nova-tarefa').val('');
        
    })
})