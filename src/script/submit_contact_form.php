<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Empfänger-E-Mail-Adresse
    $empfaenger = "jannik.oz@web.de";

    // Betreff der E-Mail
    $betreff = "Neue Kontaktanfrage von " . $_POST["name"];

    // Inhalt der E-Mail
    $nachricht = "Name: " . $_POST["name"] . "\n";
    $nachricht .= "E-Mail: " . $_POST["email"] . "\n";
    $nachricht .= "Nachricht: " . $_POST["message"];

    // E-Mail-Header
    $header = "From: " . $_POST["email"];

    // E-Mail senden
    if (mail($empfaenger, $betreff, $nachricht, $header)) {
        echo "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.";
    } else {
        echo "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.";
    }
}
?>