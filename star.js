let generateStar = (num) => {
    if (num < 1 || num == null) {
        console.log("Invalid Number");
        return;
    }
    let total = (num * 6) - 1;

    let fullRow = new Array(total).fill("*");
    for (i = 0; i < num; i++) {
        //ici on genere le 1er cone, donc la maniere avec laquele je procede et de créer un tableau qui contient le max de caractéres possibles
        //qui est X ( notre numero ) * 6 - 1 ( -1 a cause de la position du milieu ), on peut déduire ça depuis l'exemple donné, donc num*3 est le milieu, on utilise ses nombres
        //pour dessiner du milieu et partir vers les cotés pour générer le 1er cone
        //on utilise aussi cette 1ere boucle pour generer un "full row" qui est la partie qui contient beaucoup de '*' parceque on aura 2 utilisations pour celle-la
        let cone = new Array(total).fill(" ");
        cone[num*3-1 - i] = "*"; //num*3-1 etant le milieu - i pour avancer du milieu vers le début (0)
        cone[num*3-1 + i] = "*"; //num*3-1 etant le milieu + i pour avancer du milieu vers la fin (num*6)
        
        console.log(cone.join(""));
    }
    //sur la ligne horizontal on mets un " " au milieu pour le cas ou le numero est 1, car la boucle ci dessous ne s'executera pas
    fullRow[num*3-1] = " ";
    //on crée une boucle de 0 a numero -1 pour vider la ligne du milieu vers l'exterieur ( num -1 parceque il ya 2 etoiles superposé )
    for (let i = 0; i < num-1; i++) {
        fullRow[num*3-1 - i] = " ";
        fullRow[num*3-1 + i] = " ";
    }
    console.log(fullRow.join(""));
    for (i = 1; i < num; i++) {
        //ici on genere le 3eme partie qui commence des 2 bouts et va vers le centre
        //arr[i] pour le début et num[num*6 - i - 1] pour la fin ( num*6-1 étant le max)
        let arr = new Array(total).fill(" ");
        arr[i] = "*";
        arr[total - i - 1] = "*";
        console.log(arr.join(""));
    }
    for (i = 0; i < num; i++) {
        //meme logique que la 3eme partie mais ici on commence du centre et on part vers les cotés c'est pour ça
        // le num*5+i-1 parceque normalement c'est num*6-1 ( le max ) - num (pour arriver a x cases avant la fin) et +i pour avancer
        // vers les bouts donc ça devient num*5+i-1
        let arr = new Array(total).fill(" ");
        arr[num - i] = "*";
        arr[total - num + i - 1] = "*";
        console.log(arr.join(""));
    }
    // On redessine une ligne complete
    console.log(fullRow.join(""));
    for (i = num-1; i >= 0; i--) {
        //last represente le cone inversé donc c'est la meme logique que le 1er mais on commence de num-1 et on descend vers 0
        let last = new Array(total).fill(" ");
        last[num*3-1 - i] = "*";
        last[num*3-1 + i] = "*";
        console.log(last.join(""));
    }

}

generateStar(process.argv[2]);