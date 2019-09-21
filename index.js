const fe19 = [];
/* Fyll fe19 med strängvärden av de namn du vill ha,
exempelvis "Hans Andersson" */

var pair = [];
var arrLen, slumpTal, timer;

// DOM
document.addEventListener('DOMContentLoaded', function () {
    var startKnapp = document.getElementById('starter');
    startKnapp.addEventListener('click', function () {
        timer = setInterval(blanda, 1500);
    });

    var mainElement = document.getElementsByTagName('main');

    function blanda() {

        arrLen = fe19.length;

        // Kolla om det finns något i arrayen.
        if (arrLen != 0) {
            // Plocka första personen
            slumpTal = Math.floor(Math.random() * arrLen);
            pair.push(fe19.splice(slumpTal, 1)[0]);

            // Plocka andra personen
            arrLen = fe19.length;
            slumpTal = Math.floor(Math.random() * arrLen);
            pair.push(fe19.splice(slumpTal, 1)[0]);

            console.log(pair);
            var holder = document.createElement('section');
            holder.innerHTML = fixName();
            mainElement[0].appendChild(holder);
            pair = [];
        } else {
            clearInterval(timer);
            var sections = document.getElementsByTagName("section");
            sections[sections.length - 1].id = "sink";
        }

        function fixName() {
            let returString = "";
            // Om en person har fler än ett mellanslag i sitt namn...
            let sistaMellanslaget = pair[0].lastIndexOf(" ");
            let firstPersonFirstName = pair[0].slice(0, sistaMellanslaget);
            let firstPersonLastName = pair[0].slice(sistaMellanslaget);
            returString = `<div> ${firstPersonFirstName} ${firstPersonLastName.toUpperCase()}</div>`;
            if (pair[1] != undefined) {
                sistaMellanslaget = pair[1].lastIndexOf(" ");
                secondPersonFirstName = pair[1].slice(0, sistaMellanslaget);
                secondPersonLastName = pair[1].slice(sistaMellanslaget);
                returString += `<div>${secondPersonFirstName} ${secondPersonLastName.toUpperCase()}</div>`;

            }
            return returString;
        }

    }
});