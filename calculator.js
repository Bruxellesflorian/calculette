const body = document.querySelector("body")
body.className = "body"
// // __________________________________________________
const boxPrincipale = document.createElement("div")
boxPrincipale.className = "flex"
// // __________________________________________________

const boxResult = document.createElement("div")
boxResult.className = "boxResult"
// boxResult.textContent = "0"
const calcBoxJournal = document.createElement("div")
calcBoxJournal.className = 'calculBasJournal'

const calcBox = document.createElement("div")
calcBox.className = "calculBas"



let tab = ["(", ")", "%", "AC", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"] // 20

let flexC

let button

// // __________________________________________________

let zoneDeCalcul = "";
let tabZoneDeCalcul = []
// // __________________________________________________

boxPrincipale.appendChild(boxResult)
boxResult.appendChild(calcBox)
boxResult.appendChild(calcBoxJournal)

for (let i = 0; i < tab.length; i++) {
    button = document.createElement('div')
    button.textContent = tab[i]
    button.className = "but"
    if (i <= 3) {
        button.className = "butS"
    }
    if (i % 4 === 3) {
        button.className = "butS"
    }
    if (i % 4 === 0) {
        flexC = document.createElement('div')
        flexC.className = "flexC"
    }
    
function test(){
    return  calcBox.textContent
}

    let cases = tab[i];
        switch(cases){
            
    
            case "AC":
            button.addEventListener("click", function () {
                calcBox.textContent = "";
                calcBoxJournal.textContent = "";})
            break;
    
            case "=":
            button.addEventListener("click", function (){
                calcBox.textContent = test()
                calcBoxJournal.textContent += " = "
                calcBoxJournal.textContent += calcBox.textContent=Function('return ' + calcBox.textContent)();
            });
            break;

            default:
            button.addEventListener("click", function () {
                calcBox.textContent += tab[i];
                calcBoxJournal.textContent += tab[i];
               
            }); 
            
            
        };   
  
        body.appendChild(boxPrincipale)
        boxPrincipale.appendChild(flexC)
        flexC.appendChild(button)

    
}




