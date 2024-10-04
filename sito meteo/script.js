const nomePaese = document.getElementById("nomePaese");
const descrizione = document.getElementById("descrizione");
const temperatura = document.getElementById("temperatura");
const umidita = document.getElementById("umidita");
const vento = document.getElementById("vento");
const body = document.getElementById("body");

async function meteo() {
    try {
        const paese = document.getElementById("paese").value;
        const risposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${paese}&appid=&units=metric&lang=it`);
        if(!risposta.ok) {
            throw new Error("city is not found");
        }
        const dati = await risposta.json();

        nomePaese.innerHTML = paese;
        descrizione.innerHTML = dati.weather[0].description;
        temperatura.innerHTML = `${dati.main.temp}°`;
        umidita.innerHTML = `${dati.main.humidity}%`;
        vento.innerHTML = `${dati.wind.speed} m/s`;

        let descrizione2 = dati.weather[0].description;

        switch(descrizione2.toLowerCase()) {

            case "cielo sereno": case "soleggiato": case "sole":
                if(window.innerWidth <= 768) {
                    body.style.background = "url(immagini/soleggiato_telefono.jpg)";
                }
                else {
                    body.style.background = "url(immagini/soleggiatopc.jpg)";
                    body.style.backgroundSize = "cover";
                }
                break;

            case "pioggia": case "pioggerella": case "pioggia leggera": case "pioggia moderata": 
            case "forte pioggia":
                if(window.innerWidth <= 768) {
                    body.style.background = "url(immagini/pioggia_telefono.jpg)";
                }   
                else {
                    body.style.background = "url(immagini/pioggia_pc.jpg)";
                    body.style.backgroundSize = "cover";
                }
            break;

            case "temporale": case"temporale con pioggia":
                if(window.innerWidth <= 768) {
                    body.style.background = "url(immagini/temporale_relefono.jpg)";
                }
                else {
                    body.style.background = "url(immagini/temporale_pc.png)";
                    body.style.backgroundSize = "cover";
                }
                break;

            case "nubi sparse": case "cielo coperto": case "poche nuvole":
                if(window.innerWidth <= 768) {
                    body.style.background = "url(immagini/nuvoloso_telefono_nuovo.jpg)";
                }
                else {
                    body.style.background = "url(immagini/nuvoloso_pc.jpg)";
                    body.style.backgroundSize = "cover";
                }
            break;

            default:
        }
    } catch(error) {
        console.log("error");
    }
}