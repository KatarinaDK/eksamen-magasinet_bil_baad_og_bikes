// ::INFO - VALIDERING AF KOMMENTARFORMULAR PÅ SERVERSIDE
// Hjælper brugeren til at udfylde felterne korrekt
// Vil give fejlbeskeder og sætte makøren i det berørte inputfelt ved fejl

// ::BEMÆRK - AT VED VALIDERING AF FORMULARER TIL ADMIN (LOGIN, OPRET PRODUKT M.M.) ER DER I STEDET ANVENDT HTML5 VALIDERING, DA MEGET AF VALIDERINGEN FORETAGES SERVERSIDE OG ADMIN MÅSKE ER MERE BEVANDRET I FORMULARUDFYLDNING. SOM EN EKSTRA SERVICE KUNNE DET GØRES ALLIGEVEL...

function formularValidering(form) {
    "use strict";

    var status = true; // som udgangspunkt er alt i orden

    if (form.navn.value.length === 0) { // Hvis feltet ikke er udfyldt
        document.querySelector('#navnHelp').innerHTML = "Udfyld dit navn"; // Indsæt tekst i fornavnHelp
        if (status == true) form.navn.focus(); //sætter markøren i det valgte felt
        status = false; // Sørger for at der ikke submittes
    } else {
        document.querySelector('#navnHelp').innerHTML = ""; // Sørger for at feltet er/bliver ryddet, da der ingen fejl er
    }

    if (form.email.value.length === 0) {
        document.querySelector('#emailHelp').innerHTML = "Udfyld din email adresse";
        if (status == true) form.email.focus();
        status = false;
    } else {
        if (checkEmail(form.email.value)) { // kalder på checkEmail og sender værdien med
            document.querySelector('#emailHelp').innerHTML = "Dette er ikke en mail adresse. Husk @ og .";
            if (status == true) form.email.focus();
            status = false;
        } else {
            document.querySelector('#emailHelp').innerHTML = ""
        };
    }

    if (form.besked.value.length === 0) {
        document.querySelector('#beskedHelp').innerHTML = "Udfyld besked feltet";
        if (status == true) form.besked.focus();
        status = false;
    } else {
        document.querySelector('#beskedHelp').innerHTML = "";
    }

    function checkEmail(email) { // tjekker regex - KODE UDLEVERET I UNDERVISNINGEN
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; // regex for en typisk mail
        if (filter.test(email)) {
            return false;
        }
        return true;
    }
    return status;
}