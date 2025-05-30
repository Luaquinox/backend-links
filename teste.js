const texto = `Esse é meu site https://site.com
Esse aqui não funciona http://invalido..com
Esse está incompleto htp://erro
Esse é nosso novo site https://correto.org`;



const regex = /https?:\/\/[^\s]+/g;
const linksValidos = texto.match(regex);

console.log("Links achados");
console.log(linksValidos);



