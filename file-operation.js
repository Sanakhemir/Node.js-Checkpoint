
const fs = require('fs');

// Créer le fichier welcome.txt

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully');

  // Lire et afficher le contenu du fichier
  
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

