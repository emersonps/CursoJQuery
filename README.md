# CursoJQuery
Curso básico de JQuery

http://jquery.com/download/

Modo de Download do JQuery:
Baixar direto para o computador;
Usar uma CDN:
  Google CDN
  Microsoft CDN
  CDNJS CDN
  jsDelivr CDN

<strong>Instalando o JQuery</strong>

1. Google CND: <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
Copia e cola no cabeçalho do site 
  Obs: o sistema só irá funcionar de houver uma conexão com a internet.

2. Baixando o arquivo:
  2.1 No site clique no link: Download the compressed, production jQuery 3.3.1
  2.2 Ao exibir os comando na página web, pressiona CTRL+S e salva na paste do projeto (JS).
  2.3 No cabeçalho do site digite a seguinte linha:
      <script src="js/jquery-3.3.1.min.js"></script>
  Obs.: Nesse caso, toda vez que o o JQuery fir atualizado, essa linha terá que ser atualizada manualmente.
3. Baixando e renomeando:
  Para evitar problemas com acesso ou atualização, basta renomear e deixar apenas como mostra abaixo:
      3.1 Copiar e colar o arquivo: jquery-3.3.1.min.js;
      3.2 Renomear o arquivo: jquery.js no diretório e no cabeçalho do site:
      <script type="text/javascript" src="js/jquery.js"></script>

Notas Finais: Tente trabalhar usando apenas uma das 3 opções.

<strong>Métodos de Inicialização e Carregamento</strong>
   DOM (document object Model) - São objetos carregados. 
   
   <script type="text/javascript">
			$(document).ready(function(){
				alert('DOM Carregado!!! - Executa antes mesmo dos elementos serem carregados');
			});
   
      $(window).load(function(){
				alert('Elementos Carregados!!! - Executa quando todos os elementos forem carregados!!!');
			});
    </script>

Obs.: Abaixo está o método resumido do primeiro exemplo anterior:
$(function(){
  //scripts
})


	

   
      

      
      
     

