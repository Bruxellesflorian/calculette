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
const grosJournal = document.createElement("div")
grosJournal.className = "putaHistorica"
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
boxResult.appendChild(calcBoxJournal)
let pointKiller = false;

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


    function leCalculDelaCalculetteDeFloDeLaJournee() {
        return calcBox.textContent
    }
    let cases = tab[i];

    switch (cases) {
        case "AC":
            button.addEventListener("click", function () {

                calcBox.textContent = "";
                calcBoxJournal.textContent = "";
                pointKiller = false
            })
            break;
        case ".":
            button.addEventListener("click", function () {
                if (!pointKiller) {
                    pointKiller = true
                    calcBox.textContent += '.'
                }
            })
            break;
        case "/":
            button.addEventListener("click", function () {
                calcBox.textContent += '/'
                calcBoxJournal.textContent += "/"
                grosJournal.textContent += "/"
                if (!pointKiller) {
                    pointKiller = true
                }
                pointKiller = false
            })
            break;
        case "*":
            button.addEventListener("click", function () {
                calcBox.textContent += '*'
                calcBoxJournal.textContent += "*"
                grosJournal.textContent += "*"
                if (!pointKiller) {
                    pointKiller = true
                }
                pointKiller = false
            })
            break;
        case "-":
            button.addEventListener("click", function () {
                calcBox.textContent += '-'
                calcBoxJournal.textContent += "-"
                grosJournal.textContent += "-"
                if (!pointKiller) {
                    pointKiller = true
                }
                pointKiller = false
            })
            break;
        case "+":
            button.addEventListener("click", function () {
                calcBox.textContent += '+'
                calcBoxJournal.textContent += "+"
                grosJournal.textContent += "+"
                if (!pointKiller) {
                    pointKiller = true
                }
                pointKiller = false
            })
            break;
        case "=":
            button.addEventListener("click", function () {
                calcBox.textContent = leCalculDelaCalculetteDeFloDeLaJournee()
                calcBoxJournal.textContent += " = "
                calcBoxJournal.textContent += calcBox.textContent = Function('return ' + calcBox.textContent)();
                grosJournal.textContent += " = "
                grosJournal.textContent += calcBox.textContent = Function('return ' + calcBox.textContent)();
            });
            break;
        default:
            button.addEventListener("click", function () {
                calcBox.textContent += tab[i];
                calcBoxJournal.textContent += tab[i];
                grosJournal.textContent += tab[i];
            });

    };

    body.appendChild(boxPrincipale)
    boxPrincipale.appendChild(flexC)
    flexC.appendChild(button)

}
body.addEventListener("keypress", function (e) {

    if (e.code === "Enter") {
        calcBox.textContent = leCalculDelaCalculetteDeFloDeLaJournee()
        calcBoxJournal.textContent += " = "
        calcBoxJournal.textContent += calcBox.textContent = Function('return ' + calcBox.textContent)();
        grosJournal.textContent += " = "
        grosJournal.textContent += calcBox.textContent = Function('return ' + calcBox.textContent)();
    }
})
let NumPadd = ["Numpad0","Numpad1", "Numpad2", "Numpad3", "Numpad4", "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9","NumpadAdd","NumpadSubtract","NumpadDivide","NumpadDecimal"];
for (let k = 0; k < 10; k++) {
    body.addEventListener("keypress", function (e) {
        if (e.code === NumPadd[k]) {
            calcBox.textContent += k
            calcBoxJournal.textContent += k
            grosJournal.textContent +=  k
        }
        
    })

}
// for (let z = 10; z < 14; z++) {
//     body.addEventListener("keypress", function (a) {
//         console.log(a.code)
//         if (a.code === NumPadd[12]) {
//             calcBox.textContent += "+"
//         }
//         if (a.code === NumPadd[12]) {
//             calcBox.textContent += "-"
//         }
//         if (a.code === NumPadd[13]) {
//             calcBox.textContent += "/"
//         }
//         if (a.code === NumPadd[14]) {
//             calcBox.textContent += "*"
//         }
//     })

// }