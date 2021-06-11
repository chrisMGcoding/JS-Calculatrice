// création DIV principale

// let myDiv = document.createElement("div");
// document.body.appendChild(myDiv);
// myDiv.setAttribute("class", "mainDiv");

// création DIV +champ Input

// let myInput = myDiv.appendChild(document.createElement("input"));   
// myInput.setAttribute("class", "mainInput");
// myInput.setAttribute("type", "text");

// création DIV chiffre et opération
// myDiv.appendChild(document.createElement("div"));

// création DIV + bouton chiffre

// let myDivChiffre = myDivChiffreOpe.appendChild(document.createElement("div"));
// myDivChiffre.setAttribute("class", "divChiffre");

//création DIV + bouton opérations

// let myDivOpe = myDivChiffreOpe.appendChild(document.createElement("div"));
// myDivOpe.setAttribute("class", "divOperateur");







// création DIV principale

let divP = document.createElement("div");
document.body.appendChild(divP);
divP.setAttribute("class", "principale");

// création DIV input

let input = document.createElement("input");
divP.appendChild(input);
input.setAttribute("class", "calcul");
input.setAttribute("check", "ok");

// création DIV chiffre + opérateurs

let divGlob = document.createElement("div");
divP.appendChild(divGlob);
divGlob.setAttribute("class", 'globale');

// création DIV chiffre

let divNumber = document.createElement("div");
divGlob.appendChild(divNumber);
divNumber.setAttribute("class", "number");

// création DIV opérateur

let divOper = document.createElement("div");
divGlob.appendChild(divOper);
divOper.setAttribute("class", "operation");

// création DIV égal

let Equal = document.createElement("div");
divP.appendChild(Equal);
Equal.setAttribute("class", "equal");

// création des boutons chiffre

let tabChiffre = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "0", "."];

tabChiffre.forEach(element => {
    let chiffre = divNumber.appendChild(document.createElement("div"));
    chiffre.textContent = element;
    chiffre.setAttribute("class", "boutonChiffre");
})

// création des boutons opération

let tabOperation = ["+", "-", "*", "/"];

tabOperation.forEach(element => {
    let operation = divOper.appendChild(document.createElement("div"));
    operation.textContent = element;
    operation.style.height = "100px";
    operation.style.width = "100%";
    operation.style.display = "flex";
    operation.style.justifyContent = "center";
    operation.style.alignItems = "center";
})

// création de la mécanique d'action

let allButton = Array.from(document.querySelectorAll("div"));

// mise en place bouton chiffre dynamique

let chiffreButton = allButton.splice(3, 12);

let temp = "";
let temp2 = "";

chiffreButton.forEach(element => {
    element.addEventListener("click", () => {
        if (input.getAttribute("check") == "ok") {
            temp += element.textContent;
            input.value += element.textContent;
            console.log(typeof temp)
            console.log(temp);
        }
        else {
            input.value = "";
            temp2 += element.textContent;
            input.value += element.textContent;
            console.log(temp2);
        }
    });
});

// mise en place opérateur dynamique

let operationButton = allButton.splice(4, 4);

operationButton.forEach(element => {
    element.addEventListener("click", () => {
        input.setAttribute("check", "not ok");
        input.value = element.textContent;
    })
})

// mise en place résultat

