
const data = JSON.parse(localStorage.getItem('base-conhecimento'));
const answers = [];
const colors = ["deep-purple", "indigo", "blue", "amber", "red", "green", "blue", "teal", "deep-orange"];
let currentColor = 'red';

responseCard();

function question(ask) {
    const color = getColor();

    const carouselItem = document.getElementsByClassName('carousel-item');
    var numberAsk = carouselItem.length;

    const divAsk = "<div class=\"carousel-item " + color + " white-text center se-position-relative\" href=\"#" + (numberAsk + 1) + "\">" +
        "<h1 class=\"se-position-absolute se-question question\">" + ask + "</h1>" +
        "</div>"

    $("#question").append(divAsk);

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: false,
        dragged: true
    });

    addButton(numberAsk);
}

function responseCard() {
    const carouselItem = document.getElementsByClassName('carousel-item');
    const numberAsk = carouselItem.length;

    for (let i = 0; i < numberAsk; i++) {
        addButton(i);
    }
}

function addButton(number) {
    const id = "id=\"#" + number + "\""
    $("#response").append("<button class=\"btn-floating pulse se-btn-step grey lighten-5\"" + id + " value=\"\"></button>");
}

function next() {
    $('.carousel.carousel-slider').carousel('prev');
}

function set(position) {
    $('.carousel').carousel('set', position);
}

function chooseCard(e) {
    const idChoose = e.target.id;
    const numberChoose = idChoose.replace("#", "");
    set(numberChoose);
}

function getNextQuestion(answers) {
    let helper = data;
    let a = 0
    for (let index = 0; index < answers.length; index++) {
        if (helper.pergunta) {
            helper = helper[answers[index]];
            if (helper.resultado) {
                helper = helper.resultado;
                elementFound();
            }
        }
    }
    question(helper.pergunta || `Você pensou em ${helper}`);
}

function elementFound() {
    const sim = document.getElementById('sim');
    const nao = document.getElementById('nao');

    sim.style.display = 'none';
    nao.style.display = 'none';
}

function response(e) {
    const answer = e.target.id;
    answers.push(answer);

    const carouselItem = document.getElementsByClassName('carousel-item');
    const numberAsk = carouselItem.length;
    let view;

    for (let i = 0; i < numberAsk; i++) {
        if ((carouselItem[i].style.zIndex) == 0) {
            view = i;
        }
    }

    getNextQuestion(answers);
    set(numberAsk);
    answerCard(view, answer);
}

function answerCard(view, answer) {
    const carouselItem = document.getElementsByClassName('se-btn-step')[view];

    if (answer == "sim") {
        $(carouselItem).addClass("cyan lighten-2");
        $(carouselItem).removeClass("grey lighten-5");
        $(carouselItem).removeClass("red lighten-1");
        carouselItem.value = answer;
    }
    else {
        $(carouselItem).addClass("red lighten-1");
        $(carouselItem).removeClass("grey lighten-5");
        $(carouselItem).removeClass("cyan lighten-2");
        carouselItem.value = answer;
    }
}

function getColor() {
    let cor = currentColor;
    while (currentColor === cor) {
        cor = randomColor();
    }
    return cor;
}

function randomColor() {
    const min = 0;
    const max = colors.length;

    const number = randomNumber(min, max);

    return colors[number];
}

function randomNumber(min, max) {
    const random = Math.random() * (max - min) + min;
    const number = Math.trunc(random);
    return number;
}

$(document).ready(function () {

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: false,
        dragged: true,
    });

    $('.se-class-response').click(response);

    //$('.se-btn-step').click(chooseCard);
});

