const Leaf = require('./components/Leaf');
const Composite = require('./components/Composite');

// Crear instancias de hojas (templates)
const template1 = new Leaf("Texto del template 1");
const template2 = new Leaf("Texto del template 2");

// Crear instancia de documento compuesto
const compositeDocument = new Composite();

// Agregar las hojas al documento compuesto
compositeDocument.add(template1);
compositeDocument.add(template2);

// Crear otra instancia de hoja (template)
const template3 = new Leaf("Texto del template 3");

// Crear otra instancia de documento compuesto
const finalDocument = new Composite();

// Agregar el documento compuesto anterior y la hoja al nuevo documento compuesto
finalDocument.add(compositeDocument);
finalDocument.add(template3);

// Imprimir el contenido del documento final
finalDocument.print();