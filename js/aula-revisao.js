$(function(){
	$('.titulo1').click(function(){
			var classe = $(this);

			if(classe.hasClass('titulo1')){
				classe.removeClass('titulo1').fadeOut('fast').fadeIn('fast');
				classe.addClass('titulo2');
			}
			else{
				classe.removeClass('titulo2').fadeOut('fast').fadeIn('fast');
				classe.addClass('titulo1');
			}
	});

	

	$('.titulo').click(function(){

		var conteudo = $(this).parent().find('.conteudo'); //parent faz a div voltar ao ancestral dela. (div caixa), sem seguida procurar por um filho caixa que tenha a classa conteúdo.
		
		if(!conteudo.hasClass('show')){ //perguntando para o sistema se na div conteudo não tiver a class show, oculta todo o conteúdo da caixa
			$('.caixa').find('.show').slideUp('fast', function(){
				$(this).addClass('hide').removeClass('show');
			});

			conteudo.slideDown('fast',function(){
				$(this).addClass('show').removeClass('hide');
			});
		}
	});
});