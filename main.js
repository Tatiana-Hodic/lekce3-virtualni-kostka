// tady je místo pro náš program

function cislo() {
    let cislo = Math.ceil(Math.random() * 6);
    document.querySelector('#kostka').src = 'obrazky/' + cislo + '.png';

    if (cislo === 6) {
        document.querySelector('#zprava').innerHTML = 'Vyhrála si. Hodila si číslo ' + cislo;
    } else {
        document.querySelector('#zprava').innerHTML = 'Hodila si číslo ' + cislo;
    } 
}


