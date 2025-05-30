const texto = `Esse é meu site https://site.com
Esse aqui não funciona http://invalido..com
Esse está incompleto htp://erro
Esse é nosso novo site https://correto.org 
Veja também http://blog.exemplo.org/artigo?tag=js.`;

function extrairLinksValidos(texto) {
  const possiveisLinks = texto.match(/https?:\/\/[^\s]+/gi) || [];
}
