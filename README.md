# informacoes-de-filmes
 Aplicação que exibe informações de filme utilizando a API (Open Movie Database-OMDB)

 - Inserindo um título de filme (em inglês) no campo de entrada
 retorna algumas informações sobre o filme, como por exemplo
 ano de lançamento, atores principais, sinopse do filme, entre outros.

- É usada a API nativa do javascript FETCH() para fazer uma 
requisição para https://www.omdbapi.com que retorna uma 
promisse, que é tratada e convertida para formato json, sendo
assim lida e processada para que as informações relevantes sobre o filme seja exibida nos campos correspondentes.

- Caso alguma informação não esteja disponível, os dados
são tratados e é exibido um "Não encontrado"

- As informações vão surgindo uma apos a outra traves da função
setTimeout que vai exibindo os dados um de cada vez

- A função Clear está atrelada ao botão reset, e é responsável por limpar todos os campos de exibição
