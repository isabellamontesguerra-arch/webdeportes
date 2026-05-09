// SCROLL SUAVE

function scrollGaleria(){

    document.getElementById("galeria").scrollIntoView({
        behavior:"smooth"
    });

}


// GRAFICA ESTADISTICA

const ctx = document.getElementById('grafica');

new Chart(ctx, {

    type: 'bar',

    data: {

        labels: [
            'Fútbol',
            'Basquetbol',
            'Tenis'
        ],

        datasets: [{

            label: 'Popularidad Mundial',

            data: [
                98,
                85,
                75
            ],

            borderWidth: 2

        }]
    },

    options: {

        responsive: true,

        animation: {
            duration: 2500
        },

        scales: {

            y: {
                beginAtZero: true
            }

        }

    }

});



// ANIMACION AL HACER SCROLL

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', ()=>{

    cards.forEach(card=>{

        const posicion = card.getBoundingClientRect().top;

        const pantalla = window.innerHeight / 1.2;

        if(posicion < pantalla){

            card.style.opacity = 1;

            card.style.transform = 'translateY(0px)';

        }

    });

});


cards.forEach(card=>{

    card.style.opacity = 0;

    card.style.transform = 'translateY(100px)';

    card.style.transition = '1s';

});