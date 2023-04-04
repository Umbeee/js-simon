let arrayNumeri = []
let arrayNumeriDue = []

function numRandom(min, max){
    return Math.floor(Math.random() * max) + min
}

let btnGioca = document.getElementById('gioca')
btnGioca.addEventListener('click', function(){
    memoryNumeri();
})

function memoryNumeri(){

    

    for(let i=0; i<5; i++){
        arrayNumeri.push(numRandom(1, 50))
    }
    console.log(arrayNumeri)

    for(let j=0; j<arrayNumeri.length; j++){
        let spanNum = document.createElement('span');
        spanNum.classList.add('spanNum');
        spanNum.innerText = arrayNumeri[j];

        document.querySelector('main').append(spanNum)
    }

    setTimeout(secondaParte, 3000);

   

}


function secondaParte(){
    document.querySelector('main').innerHTML = ''

    let domanda = document.createElement('p')
    domanda.innerText = 'Clicca sul bottone di fianco per inserire i numeri appena scomparsi'

    let bottonePrompt = document.createElement('button')
    bottonePrompt.innerText= 'clicca qua'

    document.querySelector('main').append(domanda, bottonePrompt)

    bottonePrompt.addEventListener('click', function(){
        funzionePrompt();
    })
}

function funzionePrompt(){

    for(let i=0; i<5; i++){
        arrayNumeriDue.push(prompt(`Inserisci numero ${i+1}`))
    }
    console.log(arrayNumeriDue)

    let contatore = 0;

    for(let i=0; i<5; i++)
    {
        for(let j=0; j<5; j++){
            if(arrayNumeri[i]==arrayNumeriDue[j]){
                contatore++
                let controllo = document.createElement('p')
                controllo.innerText=`il numero ${arrayNumeri[i]} è giusto`
                document.getElementById('divControllo').append(controllo)
            }
        }
    }

    let controllo = document.createElement('p')
    controllo.innerText=`hai azzeccato un totale di ${contatore} numeri`
    document.getElementById('divControllo').append(controllo)

    console.log(contatore)


}
