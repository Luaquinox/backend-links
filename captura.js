console.log("==== ENCAPSULAMENTO=====");
class ContaBancaria{
 #saldo = 0;
 constructor(titular){
    this.titular = titular;
 }
 
 
 depositar(valor){
    if(valor >0){
      this.#saldo += valor;
      console.log(`Depósito R$${valor} realizado`);

    }else{
      console.log("valor inválido paea depósito");
    }
  }
  sacar(valor){
    if(valor >0 && valor >= this.#saldo){
    this.#saldo -= valor;
    console.log(`Saque de R$${valor} realizado`);

   }

  else{console.log("Saldo insuficiente ou valor inválido");}
}
consultarSaldo(){return this.#saldo}
}
const minhaconta = new ContaBancaria("Luana");
minhaconta.depositar(200);
minhaconta.sacar(40);
console.log(`Saldo: R$${minhaconta.consultarSaldo()}`);

//console.log(minhaConta#saldo); //Erro! propriedade privada