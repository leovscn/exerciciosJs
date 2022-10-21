class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  descrever() {
    console.log(`meu nome é  ${this.nome} e minha idade é :  ${this.idade}`);
    //descrever: function () {
    //this.nome, this.idade, etc...
  }
}

const leonardo = new Pessoa('leo', 25);
const leticia = new Pessoa('let', 32);

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade)
    console.log(`${p1.nome} é mais velhor que ${p2.nome}`);
  else if (p2.idade > p1.idade)
    console.log(`${p1.nome} é mais velhor que ${p2.nome}`);
  else
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
} 