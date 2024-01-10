<?php

?>

<!DOCTYPE html>
 <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./public/liaisons/css/styles.css">
        <script src="./public/liaisons/js/navigation.js" defer></script>
        <script src="https://kit.fontawesome.com/5482d63b2f.js" crossorigin="anonymous"></script>
    </head>
    <body class="bodyContact">
        <header class="headerContact">
            <nav>
                <img src="public/liaisons/images/icones/mini_logo.svg" alt="accueil" width="44px">
                <ul>
                    <li>Notre histoire</li>
                    <li>Nos services</li>
                    <li>Nous trouver</li>
                </ul>
            </nav>
        </header>
        <main class="mainContact">
            <section class="nosContacts">
                <h2 class="nosContacts__titre">Nos contacts</h2>
                <ul class="listeContacts">
                    <li class="adresse">
                        <img class="adresse_img" src="./public/liaisons/images/icones/location_pin.svg" alt="">
                        <p class="adresse__texte">Le Barbershop du coin<br>
                            3000  boulevard  Saint-Joseph Est<br>
                            Québec QC G1G 2V1<br>
                            Lundi-Vendredi: 10h-18h</p>
                    </li>
                    <li class="telephone">
                        <img class="telephone__img" src="./public/liaisons/images/icones/phone.svg" alt="">
                        <p class="telephone__numero">+ 1-514-345-9876</p>
                    </li>
                    <li class="courriel">
                        <img class="courriel__img" src="./public/liaisons/images/icones/email.svg" alt="">
                        <a class="courriel__lien" href="mailto:lebabershopducoin@coiffure.com">lebabershopducoin@coiffure.com</a>
                    </li>
                </ul>
                <img class="nosContacts__plan" src="./public/liaisons/images/images/maps.jpg" alt="plan">
            </section>
            <section class="nousContacter">
                <h2 class="nousContacter__titre">Nous contacter</h2>
                <span class="nosContacts__indication">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Tous les champs sont obligatoires</span>
                <form class="formulaire" method="get" action="contact.php">
                    <fieldset>
                        <fieldset class="nom">
                            <label class="nom__label" for="nom">Nom</label>
                            <input class="nom__input" type="text" name="nom" id="nom" value="">
                        </fieldset>
                        <fieldset class="prenom">
                            <label class="prenom__label" for="prenom">Prénom</label>
                            <input class="prenom__input" type="text" name="prenom" id="prenom" value="">
                        </fieldset>
                        <fieldset class="courriel">
                            <label class="courriel__label" for="courriel">Courriel</label>
                            <input class="courriel__input" type="email" name="courriel" id="courriel" value="">
                        </fieldset>
                        <fieldset class="sujet">
                            <label class="sujet__label" for="sujet">Sujet</label>
                            <select class="sujet__select" id="sujet">
                                <option label="">Choisir un sujet</option>
                                <option value="Prise rdv">Prise de rendez-vous</option>
                                <option value="Modification rdv">Modification de rendez-vous</option>
                                <option value="Informations">Informations générales</option>
                                <option value="Autres">Autres</option>
                            </select>
                        </fieldset>
                    </fieldset>
                    <fieldset class="message">
                        <label class="message__label" for="message">Message</label>
                        <textarea class="message_text" id="message"></textarea>
                        <button type="button">Envoyer</button>
                    </fieldset>
                </form>
            </section>
        </main>
        <footer>© 2022 - 2024 - Anaïs MB | Le barbershop du coin</footer>
    </body>
</html>
