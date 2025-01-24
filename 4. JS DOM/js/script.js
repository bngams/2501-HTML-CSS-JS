function colorer() {
  // selectionner tous les éléments .vert
  const elementsVert = document.querySelectorAll('.vert');
  // je vais appliquer un style avec color : green
  for(i = 0; i < elementsVert.length; i++) {
    elementsVert[i].style.color = 'green';
  }
}

function mettreTitres() {
  // 1ere possibilité avec la prop. style
  /* const elementsTitre1 = document.querySelectorAll('.titre1');
  elementsTitre1.forEach((item) => {
    item.style.fontSize = '20px';
    item.style.fontWeight = 'bold';
  }); */

  // 2 eme possibillité 
  /* const elementsTitre2 = document.querySelectorAll('.titre2');
  elementsTitre2.forEach((item) => {
    // creer un objet
    const title = document.createElement("h1");
    title.textContent = item.textContent;
    item.replaceWith(title);
  }); */

  // 3eme possibilité => ajouter des balises autour du span
  const elementTitre2 = document.querySelector('.titre2');
  elementTitre2.innerHTML = '<h2>' + elementTitre2.innerHTML + '</h2>';
}