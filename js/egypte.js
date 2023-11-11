class Egypte {
    constructor() {
        this.class=".egypte";
        this.references=[];
        this.write();
    }

    /* Introduction */
    intro() {
        $(this.class).append("\
        <section style='text-align: center;'>\
            <span style='font-size: var(--r-heading1-size); position: relative; top: -200px;'>Partie II</span><br><br>\
            <span style='font-size: var(--r-heading2-size); position: relative; top: -200px;'>L'Egypte ancienne</span>\
        </section>"
        );
    }

    /* Nout divinité du ciel */
    nout() {
        $(this.class).append("\
        <section class='egypte-nout'>\
            <div class='row'>\
                <div class='col-4'>\
                    <figure class='figure'>\
                        <img src='img/nout.jpg' class='figure-img img-fluid rounded' width='100%' alt='Divinité Nout'>\
                        <figcaption class='figure-caption'>Nout, une représentation de la voie lactée?</figcaption>\
                    </figure>\
                </div>\
                <div class='col-8'>\
                    <span>En Egypte, la voûte céleste est représentée par la divinité Nout.</span><br>\
                    <span>Son rire est le tonnerre et ses larmes la pluie.</span><br>\
                    <span>Chaque soir elle avale le soleil pour le faire naître chaque matin.</span>\
                    </section>\
                </div>\
            </div>\
        </section>"
        );
    }    

    /* Sirius */
    sirius() {
        $(this.class).append("\
        <section class='egypte-sirius'>\
            <span style='font-size: 50px;'>Le calendrier égyptien est le premier calendrier solaire connu.\
            Les égyptiens le définissaient comme le temps nécessaire pour une récolte.\
            Ils se basaient sur le lever héliaque de l'étoile Sirius qui annonçait la crue du Nil.</span>\
            <figure class='figure'>\
                <img src='img/sirius.jpg' class='figure-img img-fluid rounded' width='100%' alt='Lever héliaque de Sirius'>\
                <figcaption class='figure-caption'>Simulation du lever héliaque de Sirius le 15 juillet 3000 avant J.C. Crédit - S&T, Stellarium</figcaption>\
            </figure>\
        </section>"
        );

        this.references.push({ page: 'sirius'
                             , url: ['https://www.pourlascience.fr/sd/archeologie/un-chemin-d-etoiles-pour-les-defunts-8993.php']
                            });
    }    

   /* Calendrier */
   calendrier() {
    $(this.class).append("\
    <section class='egypte-calendrier'>\
        <div class='row'>\
            <div class='col-7'>\
                <span>Pour définir leur calendrier, les egyptiens sont partis de Sirius\
                et ont sélectionnées d'autres étoiles semblables avec les propriétés ci-dessous:</span>\
                <p>\
                    <ul>\
                        <li>Chaque nuit une dizaine des ces étoiles sont visibles</li>\
                        <li>Tous les 10 jours, une étoile disparait pendant q'une autre apparait</li>\
                    </ul>\
                </p>\
            </div>\
            <div class='col-5'>\
                <table style='font-size: 20px'>\
                    <th>Saison</th><th>Mois</th>\
                    <tr><td rowspan='4' title='Saison de l’inondation des cultures par le Nil'>Akeht</td><td>19 juillet au 17 août: Thout</td></tr>\
                    <tr><td>18 août au 16 septembre: Phaoph</td></tr>\
                    <tr><td>17 septembre au 16 octobre: Athyr</td></tr>\
                    <tr><td>17 octobre au 15 novembre: Khoiak</td></tr>\
                    <tr><td rowspan='4' title='Saison de la décrue du Nil'>Peret</td><td>16 novembre au 15 décembre: Tybi</td></tr>\
                    <tr><td>16 décembre au 14 janvier: Méchir</td></tr>\
                    <tr><td>15 janvier au 13 février: Phaminoth</td></tr>\
                    <tr><td>14 février au 15 mars: Pharmouti</td></tr>\
                    <tr><td rowspan='4' title='Saison des moissons'>Chémou</td><td>16 mars au 14 avril: Pachon</td></tr>\
                    <tr><td>15 avril au 14 mai: Payni</td></tr>\
                    <tr><td>15 mai au 13 juin: Epiphi</td></tr>\
                    <tr><td>14 juin au 13 juillet: Mésori</td></tr>\
                    <tr><td></td></tr>\
                </table>\
            </div>\
        </div>\
        <span>Le calendrier était donc divisé en décade de 10 jours sur 12 mois. Soit 360 jours auxquels les egyptiens\
        ajoutent 5 jours dit épagomènes pour faire une année complète.</span>\
    </section>"
    );

    this.references.push({ page: 'calendrier'
                         , url: ['https://www.pourlascience.fr/sd/archeologie/un-chemin-d-etoiles-pour-les-defunts-8993.php'
                                ,'https://www.bbc.com/afrique/articles/ce9klpz577vo'
                                ,'https://fr.wikipedia.org/wiki/Horloge_stellaire_%C3%A9gyptienne']
                        });
}    

   /* Meshet */
   meshet() {
    $(this.class).append("\
    <section class='egypte-meshet'>\
        <span>Calendrier égyptien basée sur la table stellaire de Meshet</span>\
        <figure class='figure'>\
            <img src='img/table-stellaire-meshet.jpg' class='figure-img img-fluid rounded' width='100%' alt='Table stellaire de Meshet'>\
            <figcaption class='figure-caption'>Table stellaire égyptienne. Adaptation des tables de Neugebauer et Parker ('Egyptian Astronomical Texts') et de la table de Mesheh (d'après Pierre Lacau)</figcaption>\
        </figure>\
    </section>"
    );

    this.references.push({ page: 'calendrier'
                         , url: ['https://fr.wikipedia.org/wiki/Horloge_stellaire_%C3%A9gyptienne']
                        });
}    

write() {
        this.intro();
        this.nout();
        this.sirius();
        this.calendrier();
        this.meshet();
    }
}
