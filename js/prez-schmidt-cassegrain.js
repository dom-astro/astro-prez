class SchmidtCassegrain {
    constructor() {
        this.class=".schmidt";
        this.references=
            ["Reconstruction de la lunette de Galilée qui fêta son 400e anniversaire en 2009. Document <a href='http://www.jimsugar.com/'>Jim Sugar</a>"
            ,"Observatoire de Paris-Meudon - B. Mollier"
            ];
        this.write();
    }
    
    /* Introduction */
    intro() {
        $(this.class).append("\
        <section style='text-align: center;'>\
            <div class='card border-dark mb-100'>\
                <div class='card-header'><h2 class='card-title'>Partie III</h2></div>\
                <div class='card-body text-dark'>\
                    <h3 class='card-title'>Télescopes réflecteurs</h3>\
                    <p class='card-text'>3) Le Schmidt-Cassegrain</p>\
                </div>\
            </div>\
        </section>"
        );

        $(this.class).append("\
        <section class='schmidt-intro'>\
            <span>\
                Dans la course au grossissement la lentille présente le désavantage d'être limitée par la taille et donc le poids. \
                <p class='fragment fade-in'>En effet un fort grosssissement ne sert à rien si le diamètre de l'objectif reste limité.</p>\
                <p class='fragment fade-in'>Avec l'utilisation par Newton d'un miroir, on a pu augmenter le diamètre de l'objectif. et donc utiliser un grossissment plus important.</p>\
                <p class='fragment fade-in' style='display: flex; justify-content: center;'>\
                    <img src='img/newton.jpg' class='rounded' width=350px'>\
                    <br>\
                    <span class='newton-figure'>Réplique du télescope de Newton</span>\
                </p>\
            </span>\
        </section>"
        );
    }

    write() {
        this.intro();
    }
}