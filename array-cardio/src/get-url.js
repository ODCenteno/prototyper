const removeAccents = (str) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const title = removeAccents('Curso de Manipulación de Arrays');

const urlFinal = title.split(' ').join('-').toLocaleLowerCase();
console.log(`url from title: /${urlFinal}`);
