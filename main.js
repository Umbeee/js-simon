function numRandom(min, max){
    return Math.floor(Math.random() * max) + min
}

let btnGioca = document.getElementById('gioca')
btnGioca.addEventListener('click', function(){
    memoryNumeri();
})

function memoryNumeri(){

    let arrayNumeri = []

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

    setTimeout(secondaParte, 300);
}


function secondaParte(){
    
}
