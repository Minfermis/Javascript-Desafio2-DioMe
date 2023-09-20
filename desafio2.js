
/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - O tipo de combústivel que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/


/* Preços do Combustiveis*/
const precoEtanol = 3.58;
const PrecoGasolina = 5.39;

/* Referencia ao carro e KM */
const tipoCombustivel = 'gasolina'; 
const consumoPorKm = 9;
let Distancia = 200;

/* Calcúlo para o Desafio 2 */
    if (tipoCombustivel === 'gasolina') {
        const litroConsumido = Distancia / consumoPorKm;
        const valorGasto = litroConsumido * PrecoGasolina;

        console.log(valorGasto.toFixed(2));
    }

    else {
        const litroConsumido = Distancia / consumoPorKm;
        const valorGasto = litroConsumido * precoEtanol;

        console.log(valorGasto.toFixed(2));
}