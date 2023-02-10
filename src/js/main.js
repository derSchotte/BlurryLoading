import './../scss/style.scss'; // Importiert das SCSS-Stylesheet

const loadText = document.querySelector('.loadingText'); // Referenz auf die Element-Klasse "loadingText"
const bg = document.querySelector('.bg'); // Referenz auf die Element-Klasse "bg"

const scale = (num, in_min, in_max, out_min, out_max) => { // Funktion um Wert innerhalb einer Skala zu skalieren
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

let load = 0; // initialer Load-Wert

let int = setInterval(blurring, 30); // Intervall für die Funktion blurring

// Funktion die den angezeigten Load-Balken verschwinden lässt und die Filter zum Verschwimmen der Hintergrund-Grafik verwendet
function blurring() {
    load++; // Erhöht den Load-Wert

    if (load > 99) { // wenn Load-Wert größer als 99 ist stoppen
        clearInterval(int);
    }

    // Ändert den dargestellten Text der Klasse loadingText und die Opazität des Texts
    loadText.innerText = `${load} %`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    // Anwendung des Filter-Effekts auf die Klasse bg mit einer Skalierung zwischen 0 und 30px
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px`;
}
