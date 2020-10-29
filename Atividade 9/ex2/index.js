function conta(){
    var nome_correntista
    this.getNome = function(){
        return nome_correntista;
    }
    this.setNome = function(value){
        nome_correntista = value;
    }
    var banco;
    this.getBanco = function(){
        return banco;
    }
    this.setBanco = function(value){
        banco = value
    }
    var numero_conta;
    this.getNumeroConta = function(){
        return numero_conta;
    }
    this.setNumeroConta = function(value){
        numero_conta = value;
    }
    var saldo;
    this.getSaldo = function(){
        return saldo;
    }
    this.setSaldo = function(value){
        saldo = value;
    }
}

function correnteSaldoEspecial(){
    var saldoEspecial;
    this.getSaldoEsp = function(){
        return saldoEspecial;
    }
    this.setSaldoEsp = function(value){
        saldoEspecial = value;
    }
    var dataVencimento;
    this.getdataVencimento = function(){
        return dataVencimento;
    }
    this.setdataVencimento = function(value){
        dataVencimento = value;
    }
}

function correntePoupanca(){
    var poupancaComJuros;
    this.getPoupancaComJuros = function(){
        return poupancaComJuros;
    }
    this.setPoupancaComJuros = function(value){
        poupancaComJuros = value;
    }
    var dataVencimento;
    this.getdataVencimento = function(){
        return dataVencimento;
    }
    this.setdataVencimento = function(value){
        dataVencimento = value;
    }
}

correnteSaldoEspecial.prototype = new conta()
correntePoupanca.prototype = new conta()

corrente = new correnteSaldoEspecial()
poupanca = new correntePoupanca()

corrente.setNome("xxxxx")
corrente.setBanco("santander")
corrente.setNumeroConta("2131")
corrente.setSaldo("13541321")
corrente.setSaldoEsp("SaldoEsp")
corrente.setdataVencimento("22/02/2021")

poupanca.setNome("xxxxxy")
poupanca.setBanco("bradesco")
poupanca.setNumeroConta("2132")
poupanca.setSaldo("13541322")
poupanca.setPoupancaComJuros("Poupanca")
poupanca.setdataVencimento("23/02/2021")


alert(`Corrente: ${corrente.getNome()}, ${corrente.getBanco()}, ${corrente.getNumeroConta()}, ${corrente.getSaldo()}, ${corrente.getSaldoEsp()}, ${corrente.getdataVencimento()} Poupança: ${poupanca.getNome()}, ${poupanca.getBanco()}, ${poupanca.getNumeroConta()}, ${poupanca.getSaldo()}, ${poupanca.getPoupancaComJuros()}, ${poupanca.getdataVencimento()}`)