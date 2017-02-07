var boardElement = document.getElementById('board');
var cardsNumber = 12;
var firstCard = null;
var secondCard = null;

for (var i = 0; i < cardsNumber/2; i++) {
    for (var j = 0; j < 2;j++) {
        var cardElement = document.createElement("div");
        cardElement.className = "card";

        var valueElement = document.createElement("div");
        valueElement.className = "value";
        valueElement.innerHTML = i;

        var hiddenElement = document.createElement("div");
        hiddenElement.className = "hidden";

        cardElement.appendChild(valueElement);
        cardElement.appendChild(hiddenElement);
        boardElement.appendChild(cardElement);

        hiddenElement.addEventListener("click", function(){
            this.style.display = "none";
        });
    }
}
function twoCards(element){
    element.style.display = "none";
    if(firstCard == null){
        firstCard = element;
    }
    else if (secondCard == null) {
        secondCard = element;
    }
    else {
        if(firstCard.previousSibling.nodeValue != secondCard.previousSibling.nodeValue){
            firstCard.style.display = "block";
            secondCard.style.display = "block";
        }
        firstCard = element;
        secondCard = null;
    }
}
