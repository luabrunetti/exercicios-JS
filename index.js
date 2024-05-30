console.log("Exercício Um")
function mostraDados(nome, idade, endereco){
    console.log(nome, idade, endereco)
}
var nome = "Luana" 
var idade = 16
var endereco = "Rua dos Bambus"
mostraDados(nome, idade, endereco)

console.log("Exercício Dois")
function calculaTroco( valorArroz, valorBatataPalha, valorSuco){
    var saldoTotal = 100
    var valorTotal = valorArroz + valorBatataPalha + valorSuco
    return saldoTotal - valorTotal
}
var arroz = 3
var batataPalha = 5.50
var suco = 10.50
console.log ("O troco é ", calculaTroco(arroz, batataPalha, suco) )

console.log("Exercício Três")
function calculaBombom(alunos, professores){
    return alunos * 2 + professores
}
console.log("A quantidade total é ", calculaBombom(39,1))

console.log("Exercício Quatro")
function mediaHoras(horasPrimeiraSemana, horasSegundaSemaana, horasTerceiraSemana, horasQuartaSemana){
    var diasDaSemana = 7
    var mediaPrimeiraSemana = horasPrimeiraSemana / diasDaSemana
    var mediaSegundaSemana = horasSegundaSemaana / diasDaSemana
    var mediaTerceiraSemana = horasTerceiraSemana / diasDaSemana
    var mediaQuartaSemana = horasQuartaSemana / diasDaSemana
    console.log("A média de horas da Primeira Semana é ", mediaPrimeiraSemana.toFixed(2))
    console.log("A média de horas da Segunda Semana é ", mediaSegundaSemana.toFixed(2))
    console.log("A média de horas da Terceira Semana é ", mediaTerceiraSemana.toFixed(2))
    console.log("A média de horas da Quarta Semana é ", mediaQuartaSemana.toFixed(2))
}
mediaHoras(20, 18, 21, 22)

console.log("Exercício Cinco")
function calculaLivros(valorLivro1, valorLivro2, valorLivro3){
    var valorTotal = valorLivro1 + valorLivro2 + valorLivro3
    var valorComDesconto = valorTotal- valorTotal * 0.15 
    console.log("Valor total dos livros é de", valorTotal.toFixed(2))
    console.log("Valor total dos livros com desconto é de", valorComDesconto.toFixed(2))
}
calculaLivros(50, 25, 25)

console.log("Exercício Seis")
function calculaGastos(totalKms,totalLitros){
    var totalGastos = totalLitros / totalKms 
    return totalGastos.toFixed(2)
}
var gastos = calculaGastos(150,10)
console.log ("O gasto total por km é de ", gastos)

console.log("Exercício Sete")
function calculaTotalBaresBanheiros(totalPessoas){
    var totalBanheiros = Math.ceil(totalPessoas / 50)
    var totalBares = Math.ceil(totalPessoas / 150)
    if (totalBanheiros < 1){
        totalBanheiros = 1
    }
    if (totalBares < 1){
        totalBares = 1
    }
    console.log("O total de bares necessários", totalBares)
    console.log("O total de banheiros necessários", totalBanheiros)
}
calculaTotalBaresBanheiros(100)

console.log("Exercício Oito")
function calculaPousada( diarias, pessoasComCafé){
    var precodiaria = 280
    var precoCafe = 15
    var custoDiarias = precodiaria * diarias
    var custoCafes = precoCafe * pessoasComCafé * diarias 
    var total = custoDiarias + custoCafes
    return total
}
const diarias = parseInt(prompt("Informe o número de diárias:"))
const pessoasComCafe = parseInt(prompt("Quantas pessoas querem café diário:"))

const totalAPagar = calculaPousada(diarias, pessoasComCafe)

alert(`O total a pagar é: R$${totalAPagar.toFixed(2)}`)


   
    



