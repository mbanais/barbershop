<?php

?>

<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./public/liaisons/css/styles.css">
        <script src="./public/liaisons/js/navigation.js" defer></script>
    </head>
    <body class="bodyIndex">
        <header class="headerIndex">
            <nav>
                <div>
                    <a href="index.php">
                        <img src="public/liaisons/images/icones/mini_logo.svg" alt="accueil" width="44px">
                    </a>
                </div>
                <ul>
                    <li><a href="#histoire">Notre histoire</a></li>
                    <li><a href="#services">Nos services</a></li>
                    <li><a href="#trouver">Nous trouver</a></li>
                </ul>
            </nav>
            <h1><span>Le</span> barbershop <span>du coin</span></h1>
        </header>
        <main class="mainIndex">
            <section class="notreHistoire" id="histoire">
                <h2 class="notreHistoire__titre">Notre histoire</h2>
                <div class="histoire">
                    <p class="histoire__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dui ut sem iaculis tempus vel ullamcorper tellus.
                        Suspendisse pretium, sem non auctor ultricies, nunc orci ornare velit, sit amet ornare nisl massa vel lectus. Sed semper venenatis leo eget fermentum.
                        Vivamus eget egestas nunc, sit amet lacinia risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras aliquam vitae velit nec faucibus. Etiam nec sapien eros.
                        Praesent tempus nulla et orci malesuada, non fermentum felis viverra. Aliquam semper nibh nibh, sed suscipit nunc lobortis sit amet.</p>
                    <figure class="ctnImages">
                        <img class="ctnImages__img" src="./public/liaisons/images/images/image_notreHistoire2.jpg" alt="">
                        <figcaption class="ctnImages__reference">© Unsplash</figcaption>
                    </figure>
                </div>
            </section>
            <section class="nosServices" id="services">
                <div class="ctnImages">
                    <div class="ctnImages__filtre"></div>
                    <figure hidden class="illustration">
                        <img class="illustration__img" src="" alt="">
                        <figcaption class="illustration__legende"></figcaption>
                    </figure>
                </div>
                <div class="ctnTexte">
                    <h2 class="ctnTexte__titre">Nos services</h2>
                    <p class="ctnTexte__p">Jetez un coup d’oeil sur l’étendue de nos services.</p>
                    <a href="./public/liaisons/pdf" class="ctnTexte__bouton button">Télécharger la liste</a>
                </div>
            </section>
            <section class="nousTrouver" id="trouver">
                <div class="ctnTexte">
                    <h2 class="ctnTexte__titre">Nous trouver</h2>
                    <p class="ctnTexte__p">Vous souhaitez nous rencontrer ou nous écrire?
                        N’hésitez pas il nous fera plaisir de vous répondre.</p>
                    <a href="./contact.php" class="ctnTexte__bouton button">Trouver nos informations</a>
                </div>
                <div class="ctnImages">
                    <div class="ctnImages__filtre"></div>
                    <figure hidden class="illustration">
                        <img class="illustration__img" src="" alt="">
                        <figcaption class="illustration__legende"></figcaption>
                    </figure>
                </div>
            </section>
        </main>
        <footer>© 2022 - 2024 - Anaïs MB | Le barbershop du coin</footer>
    </body>
</html>