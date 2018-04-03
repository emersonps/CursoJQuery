$(function(){
	var ex = $('.ex1');

	$('.ev1').click(function(){
		ex.hide('slow');//ou fast ou em milisegundos - oculta
	});

	$('.ev2').click(function(){
		ex.show('slow');//ou fast ou em milisegundos - exibe
	});

	$('.ev3').click(function(){
		ex.toggle('slow');//ou fast ou em milisegundos - exibe e oculta
	});

	$('.ev4').keyup(function(){
		var texto = $(this).val();

		if(texto == 'hide'){
			ex.hide('slow');
		}
		if(texto == 'show'){
			ex.show('slow');
		}
		if(texto == 'toggle'){
			ex.toggle('slow');
		}
	});

})