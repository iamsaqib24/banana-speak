var btnTranslate = document.querySelector(".btn-translate");
var textInput = document.querySelector(".text").value;
var output = document.querySelector(".output");

var serverLink = "https://api.funtranslations.com/translate/navi.json";


function getTranslation(input){
    return serverLink + "?" + "text=" + input;
}


function errorHandler(error){
    alert("Something went wrong with the server!");
}

function clickHandler(){

    var inputText = textInput;

    fetch(getTranslation(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);
