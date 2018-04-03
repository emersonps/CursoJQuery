$(function(){
	$('#slide img:eq(0)').addClass("ativo").show(); //primeira tag da imagem que ele encontrar (primeira filha)
	//Com a class Ativo selecionaremos o alt da imagem que possui essa classe e vamos fazer com que o Alt se torne uma tag de parágrafo, sendo ela a porimeira filha da nossa tag figure
	var texto= $(".ativo").attr("alt"); //attr pega o tributo 
	$('#slide').prepend("<p>"+texto+"</p>");
	setInterval(slide, 3000);//temporizador; slide: nome da função que gera as transições e as mudanças de legendas -> abaixo;

	function slide(){
		
		if($('.ativo').next().size()){
			
			$('.ativo').fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");

		}else{

			$('.ativo').fadeOut().removeClass("ativo");
			$('#slide img:eq(0)').fadeIn().addClass("ativo");

		}
	}

});