const fs = require("fs");
const path = require("path");

// Carpeta de origen con los archivos .scss
const srcDir = path.join(__dirname, "src/styles/button");

// Prefijo que quieres añadir
const prefix = "tw";

// Función para procesar cada archivo
function prefixifyFile(filePath) {
  const originalContent = fs.readFileSync(filePath, "utf8");

  // RegEx: busca clases ".clase" y antepone ".tw\:clase"
  let newContent = originalContent.replace(/(^|\s)\.([\w-]+)/g, `$1.${prefix}\\:$2`);

  // Nombre del nuevo archivo
  const baseName = path.basename(filePath, ".scss");  // "buttons"
  const newFileName = baseName + "-prefix.scss";      // "buttons-prefix.scss"
  const newFilePath = path.join(path.dirname(filePath), newFileName);

  // Guardamos el archivo
  fs.writeFileSync(newFilePath, newContent, "utf8");
  console.log(`Creado: ${newFilePath}`);
}

// Leer la carpeta y procesar cada archivo SCSS
fs.readdirSync(srcDir).forEach((file) => {
  if (file.endsWith(".scss")) {
    const filePath = path.join(srcDir, file);
    prefixifyFile(filePath);
  }
});
