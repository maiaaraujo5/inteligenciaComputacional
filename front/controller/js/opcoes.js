const ANIMAIS = [
    'Baleia', 'Golfinho', 'Elefante', 'Girafa', 'Hipopótamo', 'Leao', 'Chipanzé', 'Morcego', 'Onça-pintada',
    'Lobo', 'Urso', 'Cavalo', 'Porco', 'Vaca', 'Cachorro', 'Gato', 'Hamster', 'Águia', 'Coruja', 'Pinguim',
    'Galinha', 'Papagaio', 'Jacaré', 'Cobra', 'Sapo', 'Bagre', 'Tubarao', 'Joaninha', 'Formiga', 'Aranha'
]

const data = [
    {
        title: 'Animais',
        values: ANIMAIS
    }
]

create();

function create() {

    data.map(item => {
        let opcao = `
            <h1>${item.title}</h1>
            <hr>
            <div class="row">`
        item.values.sort();
        item.values.map(subItem => {
            console.log('qwe')
            const valor = `
            <div class="col s4">
                <h4>${subItem}</h4>
            </div> `
            opcao += valor;
        });
        // opcao += opcao + '</div>'
        $("#opcoes").append(opcao);
    });
}

function goTo() {
  location.href = 'file:///C:/Users/Leonardo%20Goncalves/Desktop/Projetos/inteligenciaComputacional/perguntas.html';
}

$(document).ready(function () {
    $('#goto').click(goTo);
});

