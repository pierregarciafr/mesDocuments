//ajaxGet("http://localhost:8888/javascript-web-srv/data/films.json", function (reponse) {

    // Transforme la réponse en tableau d'objets JavaScript
    //var films = JSON.parse(reponse);
   // console.log(reponse);
    
    // Affiche le titre de chaque film
    //for (var compteurLigne = 0; compteurLigne<3; j++) {

       
        tableElt = document.createElement('table');
        document.body.appendChild(tableElt);

             ligneElt = document.createElement('tr');
        
                ligneElt.innerHTML = "<b><td> titre </td><td> annee </td><td> realisateur </td></b>";

            tableElt.appendChild(ligneElt);
                


        for (var i = 0; i<3; i++) {

                ligneElt = document.createElement('tr');
        
                ligneElt.innerHTML = "<td> titre </td><td> annee </td><td> realisateur </td>";

        /*
                document.querySelector('body').appendChild(ligneElt);
                caseElt0 = document.createElement('dd');
                caseElt0.textContent = "titre";
                caseElt1 = document.createElement('dd');
                caseElt1.textContent = "annee";
                caseElt2 = document.createElement('dd');
                caseElt2.textContent = "realisateur";
        


                ligneElt.appendChild(caseElt0);
                ligneElt.appendChild(caseElt1);
                ligneElt.appendChild(caseElt2);
        */
                tableElt.appendChild(ligneElt);
        /*
                console.log(film.titre);
                console.log(film.annee);
                console.log(film.realisateur);
          */      
            }

