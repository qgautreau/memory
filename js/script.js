var boardElement = document.getElementById('board');
var cardsNumber = 12;

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
