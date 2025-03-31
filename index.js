// CLASSES E OBJETOS Com constructor (cadastrando objetos e classes)
class Pessoa{
	nome;
    idade;
    anoDeNascimento;
    
    constructor(nome, idade){
		this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
}
    
    descrever (){
    	console.log (`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}				
{
const rafael = new Pessoa('Rafael',37)
const guilherme = new Pessoa ('Guilherme', 10)



console.log (rafael)
}
// FUNÇOES RECEBENDO OBJETOS (COMPARANDO IDADE)
function compararPessoas(p1, p2){
	if (p1.idade > p2.idade){
    	console.log (`${p1.nome} é mais velho(a) que ${p2.nome}`);
	}else if (p2.idade > p1.idade){
    	console.log (`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else {
    	console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }

}
const rafael = new Pessoa ('Rafael', 37);
const guilherme = new Pessoa ('Guilherme', 10);

compararPessoas(rafael,guilherme);
