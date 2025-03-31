class Pessoa{
	nome;
    idade;
    anoDeNascimento;
    
    constructor(nome, idade, anoDeNascimento){
		this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
}
    
    descrever (){
    	console.log (`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}				

const rafael = new Pessoa('Rafael',37)
const guilherme = new Pessoa ('Guilherme', 10)



console.log(rafael);