let fruit = [
    "&#x1F95D;",
    "&#x1F96D;",
    "&#x1F353;",
    "&#x1F34B;",
    "&#x1F351;",
    "&#x1F348;",
    "&#x1F34A;",
    "&#x1F34D;",
    "&#x1F350;",
    "&#x1F347;",
    "&#x1F349;",
    "&#x1F34C;",
    "&#x1F352;",
    "&#x1F34F;",
    "&#x1F345;",
    "&#x1F34E;",
]

let knop = document.getElementById('knop');
let fruit1 = document.getElementById('kolom1');
let fruit2 = document.getElementById('kolom2');
let fruit3 = document.getElementById('kolom3');

knop.addEventListener('click', () => {
    let fruit1nummer = Math.floor(Math.random() * 16);
    let fruit2nummer = Math.floor(Math.random() * 16);
    let fruit3nummer = Math.floor(Math.random() * 16);
    fruit1.innerHTML = fruit[fruit1nummer];
    fruit2.innerHTML = fruit[fruit2nummer];
    fruit3.innerHTML = fruit[fruit3nummer];
});

var button = document.getElementById("knop"),
count = 0;
button.onclick = function() {
    count += 1;
    button.innerHTML = "KLIK HIER: " +count;
};
