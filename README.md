# Desafio 2 em Javascript - Dio Me

## Introdução
Neste desafio, o objetivo é criar um programa em Javascript que calcule o valor gasto em uma viagem com base em cinco variáveis: preço do etanol, preço da gasolina, tipo de combustível do carro, consumo médio de combustível por quilômetro e a distância da viagem em quilômetros.

## Variáveis
### Preços dos Combustíveis
- `precoEtanol`: Armazena o preço do etanol por litro.
- `precoGasolina`: Armazena o preço da gasolina por litro.

### Informações sobre o Carro e a Viagem
- `tipoCombustivel`: Armazena o tipo de combustível que está no carro (etanol ou gasolina).
- `consumoPorKm`: Armazena o consumo médio de combustível do carro por quilômetro.
- `Distancia`: Armazena a distância da viagem em quilômetros.

## Cálculo
O programa realiza o seguinte cálculo com base no tipo de combustível escolhido:
- Se o `tipoCombustivel` for igual a 'gasolina', ele calcula o número de litros consumidos durante a viagem (`litroConsumido`) dividindo a distância (`Distancia`) pelo consumo médio por quilômetro (`consumoPorKm`). Em seguida, calcula o valor gasto (`valorGasto`) multiplicando o número de litros consumidos pelo preço da gasolina (`precoGasolina`).
- Caso contrário, se o `tipoCombustivel` for diferente de 'gasolina', ele realiza o mesmo cálculo, mas usando o preço do etanol (`precoEtanol`) em vez do preço da gasolina.
- O valor gasto é então exibido no console com duas casas decimais usando o método `toFixed(2)`.

## Saída
O programa exibe o valor gasto na viagem com base no tipo de combustível escolhido e a distância da viagem.

Espero que esta explicação ajude a compreender o código.

