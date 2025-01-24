function colorer() {
  // selectionner tous les éléments .vert
  const elementsVert = document.querySelectorAll('.vert');
  // je vais appliquer un style avec color : green
  for(i = 0; i < elementsVert.length; i++) {
    elementsVert[i].style.color = 'green';
  }

  const elementsRouge = document.querySelectorAll('.rouge');
  elementsRouge.forEach(element => {
    element.style.color = 'red';
  });

  const elementsOrange = document.querySelectorAll('.orange');
  elementsOrange.forEach(element => {
    element.style.color = 'orange';
  });
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


function liensEnBoutons() {
  // replaceWith
  const aElements = document.querySelectorAll('#contenu > a');
  aElements.forEach((link) => {
    const btn = document.createElement('button');
    btn.textContent = link.textContent;
    link.replaceWith(btn);
  });
}

function dupliquerTexte() {
  const contenu = document.getElementById('contenu');
  const clone = contenu.cloneNode(true);
  contenu.parentNode.appendChild(clone);
}

function regrouperTitres() {
  const titres = document.querySelectorAll('.titre1, .titre2');
  const container = document.createElement('div');
  container.style.border = '1px solid #000';
  container.style.padding = '10px';
  container.style.margin = '10px 0';
  titres.forEach(titre => {
    container.appendChild(titre.cloneNode(true));
  });
  document.body.appendChild(container);
}

function regrouperLiens() {
  const links = document.querySelectorAll('a');
  const container = document.createElement('div');
  container.style.border = '1px solid #000';
  container.style.padding = '10px';
  container.style.margin = '10px 0';
  links.forEach(link => {
    const linkClone = link.cloneNode(true);
    container.appendChild(linkClone);
  });
  document.body.appendChild(container);
}

function viderBoutons() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.textContent = '';
  });
}

function enleverLiens() {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.replaceWith(document.createTextNode(link.textContent));
  });
}

function enleverGras() {
  const boldTexts = document.querySelectorAll('.gras');
  boldTexts.forEach(bold => {
    bold.style.fontWeight = 'normal';
  });
}

function mettreItalique() {
  const italicTexts = document.querySelectorAll('.italique');
  italicTexts.forEach(italic => {
    italic.style.fontStyle = 'italic';
  });
}

function enleverDecor() {
  const decoratedTexts = document.querySelectorAll('.souligne, .barre');
  decoratedTexts.forEach(decor => {
    decor.style.textDecoration = 'none';
  });
}

function voirCode() {
  const htmlCode = document.documentElement.outerHTML;
  const pre = document.createElement('pre');
  pre.textContent = htmlCode;
  document.body.appendChild(pre);
}