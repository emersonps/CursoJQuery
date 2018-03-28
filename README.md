# CursoJQuery
Curso básico de JQuery<br>
<br>
http://jquery.com/download/<br>

Modo de Download do JQuery:<br>
Baixar direto para o computador;<br>
Usar uma CDN:<br>
  Google CDN<br>
  Microsoft CDN<br>
  CDNJS CDN<br>
  jsDelivr CDN<br>

<strong>Instalando o JQuery</strong><br>
<br>
1. Google CND: <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> <br>
Copia e cola no cabeçalho do site <br>
  Obs: o sistema só irá funcionar de houver uma conexão com a internet.<br>

2. Baixando o arquivo:<br>
  2.1 No site clique no link: Download the compressed, production jQuery 3.3.1<br>
  2.2 Ao exibir os comando na página web, pressiona CTRL+S e salva na paste do projeto (JS).<br>
  2.3 No cabeçalho do site digite a seguinte linha:<br>
      <script src="js/jquery-3.3.1.min.js"></script><br>
  Obs.: Nesse caso, toda vez que o o JQuery fir atualizado, essa linha terá que ser atualizada manualmente.<br>
3. Baixando e renomeando:<br>
  Para evitar problemas com acesso ou atualização, basta renomear e deixar apenas como mostra abaixo:<br>
      3.1 Copiar e colar o arquivo: jquery-3.3.1.min.js;<br>
      3.2 Renomear o arquivo: jquery.js no diretório e no cabeçalho do site:<br>
      <script type="text/javascript" src="js/jquery.js"></script><br>
<br>
Notas Finais: Tente trabalhar usando apenas uma das 3 opções.<br>
<br>
<strong>Métodos de Inicialização e Carregamento</strong><br>
   DOM (document object Model) - São objetos carregados. <br>
<br>   
   <script type="text/javascript"><br>
	$(document).ready(function(){<br>
		alert('DOM Carregado!!! - Executa antes mesmo dos elementos serem carregados');<br>
	});<br>
<br>
	$(window).load(function(){<br>
		alert('Elementos Carregados!!! - Executa quando todos os elementos forem carregados!!!');<br>
	});<br>
    </script><br>

Obs.: Abaixo está o método resumido do primeiro exemplo anterior:<br>
$(function(){<br>
  //scripts<br>
})<br>


<strong>AULA 2</strong>	<br>
Pra trabalhar com JQuery, preciamos ter uma base de seleção. Vamos aplicar de uma forma simples, diferentes soluições para o problema a seguir: Fazer a seleção de um elemento, seja ele uma classe ou tag:<br>
<strong>1. Selector: <br></strong>
$("") <br>
ou:<br>
$('')<br>
<br>
Exemplo:<br>
$(document).ready(function)(){<br>
   $('h1');<br>
});<br>
<br>
Nota: Quando fazemos isso estamos usando o método de encapsulamento, ou seja, estamos pegando o DOM desse H1 e passando pra ele todas as funções nativas do JQuery.<br>
<br>
<strong>2. Atribuíndo uma função ou interação ao Seletor ou item selecionado:<br></strong>
$(''). <br>
Usamos o ponto após a aspas, no fim do seletor.<br>
<br>
Exemplo:<br>
$('h1').css("color","#f66");<br>
$('h1').css("color","#f66");<br>
<br>
Aplicando Funções nativas do JQuery<br>
$('h1').hide();<br>
$('h1').delay('1000');<br>
$('h1').fadeIn("slow");<br>
$('h1').text('Curso JQuery');<br>
<br>
<strong>3. Desencadeando as funções em apenas uma linha de comando:<br></strong>
Basta separar as funções por ponto:<br>
<br>
$('h1').css("color","#f66").hide().delay('1000').fadeIn("slow").text('Curso JQuery');<br>
<br>
<strong>4. Desencadeando as funções em bloco (indicado para melhor revisar o código:<br></strong>
<br>
$('h1')<br>
	.css("color","#f66")<br>
	.hide()<br>
	.delay('1000')<br>
	.fadeIn("slow")<br>
	.text('Curso JQuery');<br>
<br>
<strong>5. Colocando uma função dentro da função principal:<br></strong>
<br>
$(document).ready(function(){<br>
$('h1')<br>
&nbsp&nbsp.click(function(){<br>
<br>
});<br>
});<br>
<br>
Exemplo:<br>
<strong>Criaremos uma função para quando clicarmos no H1 ele mude a cor do Body:</strong><br>
<br>
$('h1')<br>
.click(function(){<br>
	$('body').css("background","#c30");<br>
});<br>
<br>
<strong>Mais exemplos:</strong><br>
.click(function(){<br>
	$('body').css("background","#c30")<br>
	$('h1').css("color","#fff")<br>
	$('h1').text("Emerson");<br>
});<br>
<br>
<strong>6. Colocando Várias Instruções CSS numa função:</strong><br>
Exemplo:<br>
$('a').css({color: "red', display:"block"});<br>
<br>
<strong>7. Atribuíndo uma Função Jquery a uma classe ou Id:</strong><br>
$('.nomeDaClasse);<br>
$('#nomeDaClasse);<br>
<br>
Exemplo:<br>
$('.link2').css("color","green")<br>
$('#link3').css("color","black");<br>
<br>
<strong>8. Atacando todos os Elementos da Página:</strong><br>
Exemplo para resetar o margin e o padding da página:<br>
<br>
$('*')<br>
.css("margin","0");<br>
.css("padding","0");<br>
<br>
$('*')<br>
.css({margin:"0",padding:"10"});<br>
<br>
<strong>8. Selecionar mais de um Elemento:</strong><br>
$('h1, #link3').css("border-bottom","solid 3px blue");<br>
<br><br>
<strong>AULA 3</strong><br>
<br>
<strong>Seletores</strong>
Basicamente aplica-se a mesma estrutura do CSS:<br>
Exemplos<br>
//Filhas<br>
$('.div1 span')<br>
	.hide()<br>
	.delay('1000')<br>
	.fadeIn(1000)<br>
	.css({<br>
		color:'green',<br>
		'font-size':'15px',<br>
	});<br>
<br>
$('.div1 h2')<br>
	.hide()<br>
	.css({<br>
		'font-size':'50px',<br>
		color:'red',<br>
	})<br>
	.fadeIn('1000');<br>
<br>
// Filhas diretas do Elemento<br>
$('.div1 > span').css({<br>
	color: 'red',<br>
});<br>
<br>
// Primeiro elemento após o selecionado<br>
$('.p1 + p').css('color','#fde')<br>
<br>
// Todos os elementos após o selecionado<br>
$('.p1 ~ p').css({color:'black'});<br>
<br>

<srtong>AULA 4, 5, 6 E 7</strong><br>
<br>
Algumas Funções do JQuery:<br>
Revisão:<br>
<br>
4.1. Função principal de Jquery para um documento.<br>
$(document).ready(function(){ <br>
    demais funções do Jquery; <br>
});<br>
<br>
4.2. Encapsulando Elementos:<br>
$('elemento');<br>
Ex: $('h1');<br>
<br>
4.3. Atribuindo Funções ao Elemento encapsulado:<br>
Para atribuir uma função a outra função, basta separá-lkas por um '.':<br>
$('elemento').função('atributo','valor');<br>
Ex: $('h1').css('color','#fff');<br>
<br>
4.4. Atributos desencadeados:<br>
Para apilcar mais de um atributo a uma função, podemos colocá-los dentro de chaves:<br>
$('elemento').função({<br>
	atributoSimples: "valor";<br>
	"atributoComposto": "valor;<br>
});<br>
<br>
4.5. Funções Desencadeadas:<br>
$('elemento')<br>
	.função1()<br>
	.função2()<br>
	.função3(função4(){<br>
	});<br>
	<br>
4.5. Outras funções do JQuery:<br>
.css() - atribui valores de estilos CSS;<br>
.hide() - oculta um elemento;<br>
.delay('ms*') - exibe o elemento de acordo com o tempo especificado em milésimos de segundos;<br>
.fadeIn(tempo) - Completa efeito após segundos configurados;<br>
.fadeOut(tempo) - esconde o conteúdo pós alguns segundos;<br>
<br>
*milesegundos.<br>
<br>
4.6. Eventos do Mouse:<br>
Essas funções, são nativas do JQuery, por isso iniciaremos-na como uma outra função dentro da função de encapsulamento:<br>
<br>
Exemplo:<br>
$('.h1').click(function(){<br>
	$(this).css("background","#ccc"); //o this, nesse caso, atribui o valos de css no mesmo objeto encapsulado.<br>
});<br>
Vejamos algumas funções de Eventos de Mouse:<br>
<br>
.click() = retorna o clique único do mouse;<br>
.dbclick() = retorna clique duplo do mouse;<br>
.focusin() = retorna o foco do clique (onde foi clicado);<br>
.focusout() = retira o foco do clique;<br>
.hove() = retorna informação quando o mouse passa em uma região;<br>
.mousedown() = retorna o clique do mouse;<br>
.mouseup() = retorna informação quando solta o clique;<br>
.mouseenter() = retorna a quantidade de cliques;<br>
.mouseout() = retorna a quantidade de saídas do mouse;<br>
.mouseover() = retorna quantidade de movimentos do mouse sobre o objeto;<br>
.mouseleave() = retorna a saída do mouse sobre o objeto;<br>
.mousemove() = retorna o valor da região em pixel por onde passa o mouse;<br>
<br>
<strong>5. EVENTOS DO TECLADO<br></strong><br>
<br>
.each() = retornar o valor capturado;<br>
.val() = imprime o valor no objeto;<br>
.focusin() = mostra legenda de texto quando focado o campo;<br>
.focusout() = some legenda de texto quando focado o campo;<br>
.keypress() = exibe caractere por caractere digitado; (com deley de um caractere sucessor)<br>
.keydown() = igual o keypress;<br>
.keyup() = imprime o texto em tempo real;(sem delay)<br>
<br>
Exemplo:<br>
$('.place').each(function(){<br>
	var place = $(this).attr('title');<br>
	var input = $(this);<br>
	<br>
	input<br>
		.val(place)<br>
		.css('color','#000');<br>
		.focusin(function(){<br>
		input.css('color','#000');<br>
		   if(input.val() == place){<br>
			input.val('')<br>
		   }<br>
		})<br>
		.focusout(function(){<br>
		   if(input.val() == ''){<br>
			input.css('color','#c<br>cc');<br>
			input.val(place);<br>
		   }<br>
		})<br>
    	});<br>
	<br>
	var ex = $('.ex1');<br>
	$('.key').keyup(function(){<br>
		ex.text($(this).val());<br>
	});<br>
})<br>
<br>
});<br>
<br>
<strong>5. EVENTOS DO FORMULÁRIO<br></strong><br>
<br>
.hide('slow'); (fast ou em milisegundos) - Dispara uma função que oculta o elemento encapsulado;<br>
.show('slow'); (fast ou em milisegundos) - Dispara uma função que exibe o elemento encapsulado;<br>
.toggle('slow') (fast ou em milisegundos) - Dispara uma função que exibe e oculta o elemento encapsulado;<br>
<br>





     

