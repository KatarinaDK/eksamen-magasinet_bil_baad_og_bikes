// ::INFO - BEKRÆFT HANDLING
// Funktion som udelukkende bruges til at returne true eller false
// Bruges backend i adminpanelet -og sikrer at brugeren har intentioner om at slette eller rette data, inden handlingen udføres

function confirmAction(ok) {

    if (confirm(ok)) {
        return true;
    } else {
        return false;
    }
} 