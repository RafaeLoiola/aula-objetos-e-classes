// 1)CLASSES E OBJETOS Com constructor (cadastrando objetos e classes)
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
//2) FUNÇOES RECEBENDO OBJETOS (COMPARANDO IDADE)
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
console.log ('---------------------');

// 3)- Crie uma classe para representar carros.
//Os carros possuem uma marca, uma cor e um gasto medio de combustivel por kilometro rodado.
//Crie um metodo que dado a quantidade de quilometro e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm =  gastoMedioPorKm;
    }
    calcularGastoDePercurso (distanciaEmKm,precoCombustivel){
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
}   
}

const fusca = new Carro('Wolks','Vinho',1 / 12);
console.log('Fusca gastou R$',fusca.calcularGastoDePercurso(70,5).toFixed(2),'Reais em combustivel');
const corsa = new Carro('Chevrolet','prata',1/10);
console.log('Corsa gastou R$',corsa.calcularGastoDePercurso(70,5),'Reais em combustivel');
console.log ('----------------');


// 2) Crie uma classe para representar pessoas.Para cada pessoa teremos os atributos nome,peso e altura.
//As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
//Instancie uma pessoa chamada Jose que tenha 70Kg de peso e 1,75 de altura e peça ao Jose para dizer o valor do seu IMC;

//Definindo caracteristicas de Pessoas
{class Pessoa {
	nome;
    peso;
    altura;

	constructor (nome, peso, altura){
		this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        
}
calcularImc (){
return this.peso/ (this.altura*this.altura);
}
classificarImc(){
	const imc = this.calcularImc();
    if (imc < 18.5){
	return ('Condição:abaixo do peso');
} else if (imc >= 18.5 && imc < 25 ){
	return ('Condição:Peso Normal');
}else if (imc >=25 && imc < 30 ){
	return ('Condição:acima do Peso');
}else if (imc >= 30 && imc < 40){
	return ('Obeso');
} else {
	return ('Condição:Obesidade Grave')
}
}
}
//Criando Pessoas de acordo com caracteres definidos
const jose = new Pessoa('Jose',70,1.75);
console.log ('Eu Jose tenho IMC de ',jose.calcularImc().toFixed(2));
console.log(jose.classificarImc());

const laura = new Pessoa ('Laura',35,1.35)
//Chamando nome na string
console.log ('Eu',laura.nome,' tenho IMC de ',laura.calcularImc().toFixed(2))
console.log(laura.classificarImc());
}