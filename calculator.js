const body = document.querySelector("body")
body.className = "body"
// // __________________________________________________
const boxPrincipale = document.createElement("div")
boxPrincipale.className = "flex"
// // __________________________________________________
const boxResult = document.createElement("div")
boxResult.className = "boxResult"
const calcBoxJournal = document.createElement("div")
calcBoxJournal.className = 'calculBasJournal'
const calcBox = document.createElement("div")
calcBox.className = "calculBas"
const boxTransparente = document.createElement("div")
boxTransparente.className = "calculBasTransparent"
const grosJournal = document.createElement("div")
grosJournal.className = "Historica"
let tab = ["(", ")", "%", "AC", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"] // 20
let flexC
let button
// // __________________________________________________

let zoneDeCalcul = "";
let tabZoneDeCalcul = []
// // __________________________________________________
body.appendChild(grosJournal)
boxPrincipale.appendChild(boxResult)
boxResult.appendChild(calcBox)
boxResult.appendChild(boxTransparente)
boxResult.appendChild(calcBoxJournal)
let pointKiller = false;
let adKiller = false;
let minusKiller = false
let diviKiller = false
let multikiller = false
let inter = false;


let resultat = "";

for (let i = 0; i < tab.length; i++) {
    button = document.createElement('div')
    button.innerHTML = tab[i]
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


    function calcuResult() {
        return calcBoxJournal.innerHTML
    }
    let cases = tab[i];

    switch (cases) {

        case "AC":
            button.addEventListener("click", function () {
                let linebreak = "<br>";
                boxTransparente.innerHTML = ""
                calcBox.innerHTML = "";
                calcBoxJournal.innerHTML = "";
                pointKiller = false
                grosJournal.innerHTML += linebreak;
            })
            inter = false;
            
            break;
        case ".":
            button.addEventListener("click", function () {
                if (!pointKiller) {
                    pointKiller = true
                    calcBox.innerHTML += '.'
                    calcBoxJournal.innerHTML += '.'
                }
            })
            break;
        case "/":
            button.addEventListener("click", function () {
                if (diviKiller === false) {
                    diviKiller = true
                    calcBox.innerHTML = ''
                    calcBoxJournal.innerHTML += "/"
                    grosJournal.innerHTML += "/"
                }

                if (!pointKiller) {
                    pointKiller = true
                }
                minusKiller = false
                multikiller = false
                pointKiller = false
                adKiller = false
                inter = false;
                
            })

            break;

        case "*":

            button.addEventListener("click", function () {
         
                    if (multikiller === false) {
                        multikiller = true
                        resultat * calcBox.innerHTML
                        console.log(resultat)
                        calcBox.innerHTML = ''
                        calcBoxJournal.innerHTML += "*"
                        grosJournal.innerHTML += "*"
                    }
   

                if (!pointKiller) {
                    pointKiller = true
                }
                minusKiller = false
                pointKiller = false
                adKiller = false
                inter = false;
                
            })
            break;
        case "-":
            button.addEventListener("click", function () {
                if (minusKiller === false) {
                    minusKiller = true
                    calcBox.innerHTML = ''
                    calcBoxJournal.innerHTML += "-"
                    grosJournal.innerHTML += "-"
                }

                if (!pointKiller) {
                    pointKiller = true
                }
                diviKiller = false
                multikiller = false
                pointKiller = false
                inter = false;
                adKiller = false
                
            })
            break;
        case "+":
            button.addEventListener("click", function () {
                if (adKiller === false) {
                    adKiller = true
                    calcBox.innerHTML = ""
                    calcBoxJournal.innerHTML += "+"
                    grosJournal.innerHTML += "+"
                }
                if (!pointKiller) {
                    pointKiller = true
                }
                diviKiller = false
                multikiller = false
                minusKiller = false
                pointKiller = false
                inter = false;
                
            })
            break;
        case "=":
            button.addEventListener("click", function () {
                let linebreak = "<br>";
                calcBox.innerHTML = Function('return ' + calcBoxJournal.innerHTML)();
                boxTransparente.innerHTML = calcBox.innerHTML
                calcBox.innerHTML = ""
                grosJournal.innerHTML += "=" + boxTransparente.innerHTML + linebreak;
                inter = true;
                adKiller = false
                minusKiller = false
                diviKiller = false
                multikiller = false
                resultat = boxTransparente.innerHTML
                console.log(resultat)
            
            });
            break;
        default:
            button.addEventListener("click", function () {

                if (inter === true) {
                    calcBoxJournal.innerHTML = ""
                    calcBox.innerHTML = ""
                }
                inter = false;
                if (inter === false) {
                    calcBox.innerHTML += tab[i];
                    calcBoxJournal.innerHTML += tab[i];
                    grosJournal.innerHTML += tab[i];
                    boxTransparente.innerHTML = ""
                    multikiller = false
                    minusKiller = false
                    diviKiller = false
                    adKiller = false
                }

            });


    };

    body.appendChild(boxPrincipale)
    boxPrincipale.appendChild(flexC)
    flexC.appendChild(button)

}
body.addEventListener("keypress", function (e) {

    if (e.code === "Enter") {
        let linebreak = "<br>";
        calcBox.innerHTML = Function('return ' + calcBoxJournal.innerHTML)();
        boxTransparente.innerHTML = calcBox.innerHTML
        calcBox.innerHTML = ""
        grosJournal.innerHTML += "=" + boxTransparente.innerHTML + linebreak;
        inter = true;
        adKiller = false
        minusKiller = false
        diviKiller = false
        multikiller = false
    }
})
// let NumPadd = ["Numpad0","Numpad1", "Numpad2", "Numpad3", "Numpad4", "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9","+","NumpadSubtract","NumpadDivide","NumpadDecimal"];
// for (let k = 0; k < 10; k++) {
//     body.addEventListener("keypress", function (e) {
//         if (e.code === NumPadd[k] || e.key == i || e.code == undefined) {
//             calcBox.innerHTML = ""
//             calcBox.innerHTML += k
//             calcBoxJournal.innerHTML += k
//             grosJournal.innerHTML +=  k
//         }

//     })

// }