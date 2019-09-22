const students = [{
        name: "Alexander Halldorsson",
        present: true
    },
    {
        name: "Brian Veliz",
        present: true
    },
    {
        name: "Dawid Czerniakowski",
        present: true
    },
    {
        name: "Diana Nilsson",
        present: true
    },
    {
        name: "Dimitris Adabugday",
        present: true
    },
    {
        name: "Ellinor Jonsson",
        present: true
    },
    {
        name: "Evi Ioannou",
        present: true
    },
    {
        name: "Josefin Lundén",
        present: true
    },
    {
        name: "Markus Wiland",
        present: true
    },
    {
        name: "Mary Björkman",
        present: true
    },
    {
        name: "Rebecca Sandelin",
        present: true
    },
    {
        name: "Shane Ahlbeck",
        present: true
    },
    {
        name: "Taulant Buqa",
        present: true
    },
    {
        name: "Tluang To Thuang",
        present: true
    },
    {
        name: "Vimbay Mandaza",
        present: true
    }
];
var presentStudents;
var pair = [];
var arrLen, slumpTal, timer;

// DOM
document.addEventListener('DOMContentLoaded', function () {
    var startKnapp = document.getElementById('starter');
    startKnapp.addEventListener('click', function () {

        // Remove non-present students
        presentStudents = students.filter(function (student) {
            return student.present;
        });
        timer = setInterval(blanda, 1500);
    });

    var fillArea = document.getElementsByClassName('halfs');

    // Rita upp alla studerande till vänster.
    students.forEach(function (student, index) {
        var nameHolder = document.createElement('section');
        var presentMarker = "<span data-here=" + index + ">&#9747;</span>";
        nameHolder.innerHTML = student.name + presentMarker;
        fillArea[0].appendChild(nameHolder);
    });

    // Kolla om någon klickar på ett kryss.
    fillArea[0].addEventListener('click', function (e) {
        if (e.target.nodeName == "SPAN") {
            e.target.parentNode.classList.toggle('notPresent');
            console.log(e.target.dataset.here);
            // Toggla värdet på present.
            students[e.target.dataset.here].present = !students[e.target.dataset.here].present;
        }
    });


    function blanda() {

        arrLen = presentStudents.length;

        // Kolla om det finns något i arrayen.
        if (arrLen != 0) {
            // Plocka första personen
            slumpTal = Math.floor(Math.random() * arrLen);
            pair.push(presentStudents.splice(slumpTal, 1)[0]);

            // Plocka andra personen
            arrLen = presentStudents.length;
            slumpTal = Math.floor(Math.random() * arrLen);
            pair.push(presentStudents.splice(slumpTal, 1)[0]);

            console.log(pair);
            var holder = document.createElement('section');
            holder.innerHTML = fixName();
            fillArea[1].appendChild(holder);
            pair = [];
        } else {
            clearInterval(timer);
            var sections = document.getElementsByTagName("section");
            // Lägg till id-värdet sink för att återställa "höjden" på elementet.
            sections[sections.length - 1].id = "sink";
        }

        function fixName() {
            let returString = "";
            // Om en person har fler än ett mellanslag i sitt namn...
            let sistaMellanslaget = pair[0].name.lastIndexOf(" ");
            let firstPersonFirstName = pair[0].name.slice(0, sistaMellanslaget);
            let firstPersonLastName = pair[0].name.slice(sistaMellanslaget);
            returString = `<div> ${firstPersonFirstName} ${firstPersonLastName.toUpperCase()}</div>`;
            if (pair[1] != undefined) {
                sistaMellanslaget = pair[1].name.lastIndexOf(" ");
                secondPersonFirstName = pair[1].name.slice(0, sistaMellanslaget);
                secondPersonLastName = pair[1].name.slice(sistaMellanslaget);
                returString += `<div>${secondPersonFirstName} ${secondPersonLastName.toUpperCase()}</div>`;

            }
            return returString;
        }

    }
});