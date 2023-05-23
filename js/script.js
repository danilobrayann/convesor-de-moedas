// tou pegando meu botão pelo id dele
const button = document.getElementById("converter-button")
// tou pegando meu select 
const select = document.getElementById("select-cedula")



// tou criando uma função para meu botão quando for cliclado
// minha função passou a ser async
const ConverteValue = async () => {

    // pegando meu input e o valor dele
    const inputReais = document.getElementById("valorReais").value
    // tou pegando o valor do meu input e modificando meu texto com innerHtml
    const realBazil = document.getElementById("RealBrasileiro")
    // tou pegando meu texto e modificando
    const dolarAmerica = document.getElementById("DolaAmericano")

    //Async Await
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high

    const Euro = data.EURBRL.high

    const Bitcoin = data.BTCBRL.high
    
    

    if (select.value === ('US$ Dólar americano')) {

        //dolarAmerica.innerHTML = inputReais / dolar
        dolarAmerica.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar);

    }

    if (select.value === ('€ Euro')) {

        dolarAmerica.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais * Euro);

    }

    if (select.value === ('Bitcoin')) {

        dolarAmerica.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais / Bitcoin);

    }



    //realBazil.innerHTML = inputReais
    // formatando valores e inserino valores
    realBazil.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);




    //console.log(input)
    inputReais / dolar




}



// função da mudança mudando nome e imagem do euro
ChangeCurrey = () => {
    const nameDolar = document.getElementById("dolar-name")
    const imagemPais = document.getElementById("imagem-do-pais")
    // se
    if (select.value === '€ Euro') {
        nameDolar.innerHTML = ' Euro'
        imagemPais.src = './assets/Euro.svg'

    }

    // se
    if (select.value === 'US$ Dólar americano') {
        nameDolar.innerHTML = 'Dólar Americano'
        imagemPais.src = './assets/Eua.svg'
    }

    // se
    if (select.value === 'Bitcoin') {
        nameDolar.innerHTML = 'Bitcoin'
        imagemPais.src = './assets/biticoin.png'
    }

    ConverteValue()

}

// tou passando um vento de clique no meu botão
button.addEventListener("click", ConverteValue)

// tou passaando um evento de mudança no meu select
select.addEventListener("change", ChangeCurrey)


//console log para vê como está minha função
//console.log(button)



