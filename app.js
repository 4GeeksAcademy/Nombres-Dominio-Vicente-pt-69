//write your code here

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racon"];
const ter = [".com", ".es", ".net", ".us", ".io"];

function generarNombresDominio() {
  const nombresDominio = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ter.length; l++) {
          const dominio = pronoun[i] + adj[j] + noun[k] + ter[l];
          nombresDominio.push(dominio);
        }
      }
    }
  }
  return nombresDominio;
}
const dominio = generarNombresDominio();
for (let w = 0; w < dominio.length; w++) console.log(dominio[w]);
