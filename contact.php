<?php ?>
<!DOCTYPE html>
 <html lang="fr">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./public/liaisons/css/styles.css">
        <script src="./public/liaisons/js/navigation.js" defer></script>
        <script src="./public/liaisons/js/menu.js" defer></script>
        <script src="./public/liaisons/js/couleur.js" defer></script>
        <script src="public/liaisons/js/validationFormulaire.js" defer></script>
        <script src="public/liaisons/js/soumissionFormulaire.js" defer></script>
        <script src="https://kit.fontawesome.com/5482d63b2f.js" crossorigin="anonymous"></script>
    </head>
    <body class="bodyContact">
        <header class="headerContact" aria-roledescription="Deux ciseaux sur une table">
            <div class="ctn-navbar">
                <div>
                    <a href="index.php"><img src="public/liaisons/images/icones/mini_logo.svg" alt="accueil" width="44px"></a>
                </div>
                <nav>
                    <ul class=""><li><a href="index.php#histoire">Notre histoire</a></li>
                        <li><a href="index.php#services">Nos services</a></li>
                        <li><a href="index.php#trouver">Nous trouver</a></li></ul>
                </nav>
            </div>
            <span class="headerContact__source">© Photo de <a href="https://unsplash.com/fr/@dwireena?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">dwi rina</a> sur <a href="https://unsplash.com/fr/photos/lunettes-a-monture-noire-a-cote-dun-stylo-noir-sjjvyTFsnW8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </span>
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
                <img class="nosContacts__plan" src="./public/liaisons/images/images/maps.jpg" alt="Plan du quartier. Icone pour indiquer l'emplacement du salon.">
            </section>
            <section class="nousContacter">
                <h2 class="nousContacter__titre">Nous contacter</h2>
                <span class="nosContacts__indication">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Tous les champs sont obligatoires</span>
                <form class="formulaire" method="GET" action="contact.php">
                    <fieldset>
                        <fieldset class="champ nom">
                            <label class="nom__label" for="nom">Nom</label>
                            <input class="nom__input" type="text" name="nom" id="nom" value="" pattern="^[A-Za-zÄ-ÿ' \-]+$">
                            <p class="nom__retro"></p>
                        </fieldset>
                        <fieldset class="champ prenom">
                            <label class="prenom__label" for="prenom">Prénom</label>
                            <input class="prenom__input" type="text" name="prenom" id="prenom" value="" pattern="^[A-Za-zÄ-ÿ' \-]+$">
                            <p class="prenom__retro"></p>
                        </fieldset>
                        <fieldset class="champ courriel">
                            <label class="courriel__label" for="courriel">Courriel</label>
                            <input class="courriel__input" type="email" name="courriel" id="courriel" value="" pattern="^([A-Za-z]+)([@]{1})([a-z]+)([.]{1})([a-z]+)$">
                            <p class="courriel__retro"></p>
                        </fieldset>
                        <fieldset class="champ sujet">
                            <label class="sujet__label" for="sujet">Sujet</label>
                            <select class="sujet__select" name="sujet" id="sujet">
                                <option value="">Choisir un sujet</option>
                                <option value="Prise rdv">Prise de rendez-vous</option>
                                <option value="Modification rdv">Modification de rendez-vous</option>
                                <option value="Informations">Informations générales</option>
                                <option value="Autres">Autres</option>
                            </select>
                            <p class="sujet__retro"></p>
                        </fieldset>
                    </fieldset>
                    <fieldset class="champ message">
                        <label class="message__label" for="message">Message</label>
                        <textarea class="message_text" name="message" id="message"></textarea>
                        <p class="message__retro"></p>
                        <button class="btnEnvoyer" type="button">Envoyer</button>
                    </fieldset>
                </form>
            </section>
            <section hidden>

            </section>
        </main>
        <footer lang="fr">© 2022 - 2024 - Anaïs MB | Le barbershop du coin</footer>
    </body>
</html>
