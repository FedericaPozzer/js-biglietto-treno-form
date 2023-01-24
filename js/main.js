// Scrivere un programma che chieda all'utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km)
// Va applicato uno sconto del 20 % per i minorenni
// Va applicato uno sconto del 40 % per gli over 65.



const button = document.getElementById("calc");




button.addEventListener("click",
    function () {
        const travel_km = parseFloat(document.getElementById("km").value);
        const passenger_age = parseInt(document.getElementById("age").value);

        console.log("km: " + travel_km);
        console.log("age: " + passenger_age);

        let ticket_cost = parseFloat((travel_km * 0.21));
        console.log(ticket_cost);

        // CALCOLO SCONTI
            // calcolo il 20%
            const discount_20 = (ticket_cost * 20) / 100;
            // console.log("sconto 20% " + discount_20);
            // calcolo il 40%
            const discount_40 = (ticket_cost * 40) / 100;
            // console.log("sconto 40% " + discount_40);

        if (!isNaN(passenger_age) && !isNaN(travel_km)) {
            if (passenger_age < 18) {
            let discount_under18 = (ticket_cost -= discount_20).toFixed(2);
            console.log("siccome sei minorenne, paghi: " + discount_under18 + " €");
                document.getElementById("price").innerHTML = discount_under18;
            }
            else if (passenger_age >= 65) {
            let discount_over65 = (ticket_cost -= discount_40).toFixed(2);
            console.log("siccome sei over 65, paghi: " + discount_over65 + " €");
                document.getElementById("price").innerHTML = discount_over65;
            }
            else {
            console.log("non hai diritto a nessuno sconto, paghi: " + ticket_cost.toFixed(2) + " €");
                document.getElementById("price").innerHTML = ticket_cost.toFixed(2);
            };

        } 
        else {
            console.log("Uno o più valori inseriti non sono validi, ricarica la pagina per riprovare.");
        };
    }
)