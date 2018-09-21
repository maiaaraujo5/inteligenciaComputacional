responseCard();

function question(ask){

     // Used like so
    var color = ["deep-purple","indigo","blue","amber","red","green","blue","teal","deep-orange"];
    color = shuffle(color);

    var carouselItem = document.getElementsByClassName('carousel-item');
    var numberAsk = carouselItem.length;
    
    var divAsk =  "<div class=\"carousel-item "+ color[0] +" white-text center se-position-relative\" href=\"#"+(numberAsk+1)+"\">"+
                        "<h1 class=\"se-position-absolute se-question\">"+ask+"</h1>"+
                  "</div>"

    $("#question").append(divAsk);

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: false,
        // dragged: false
    });

    addButton(numberAsk);
}

function responseCard(){
    var carouselItem = document.getElementsByClassName('carousel-item');
    var numberAsk = carouselItem.length;

    for(i=0; i < numberAsk; i++){
        addButton(i);
    }
}

function addButton(number){
    var id = "id=\"#"+number+"\""

    $("#response").append("<button class=\"btn-floating pulse se-btn-step grey lighten-5\""+id+" value=\"\"></button>");
}

function next(){
    $('.carousel.carousel-slider').carousel('next');
}

function set(position){
    console.log(position);
    $('.carousel').carousel('set',position);
}

function chooseCard(e){
    var idChoose = e.target.id;

    var numberChoose = idChoose.replace("#","");

    set(numberChoose);
}

function getNextQuestion(){

    var ask = "bolo"

    question(ask);
}

function response(e){
    var answer = e.target.id;
    var carouselItem = document.getElementsByClassName('carousel-item');
    var numberAsk = carouselItem.length;
    var view;
    
    for(i=0; i < numberAsk; i++){
        if((carouselItem[i].style.zIndex)==0){
            view = i;
        }
    }
    
    getNextQuestion();
    set(numberAsk);
    answerCard(view,answer);
}

function answerCard(view,answer){
    var carouselItem = document.getElementsByClassName('se-btn-step')[view];

    if(answer == "sim"){
        $(carouselItem).addClass("cyan lighten-2");
        $(carouselItem).removeClass("grey lighten-5");
        $(carouselItem).removeClass("red lighten-1");
        carouselItem.value = answer
    }
    else{
        $(carouselItem).addClass("red lighten-1");
        $(carouselItem).removeClass("grey lighten-5");
        $(carouselItem).removeClass("cyan lighten-2");
        carouselItem.value = answer
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

$(document).ready(function(){

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: false,
        // dragged: false
    });

    $('.se-class-response').click(response);

    //$('.se-btn-step').click(chooseCard);
});

