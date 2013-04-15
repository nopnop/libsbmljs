var libsbml = require('../libsbml').libsbml;

var reader = libsbml.SBMLReader_create();
var doc = libsbml.SBMLReader_readSBMLFromFile(reader, './feedback.xml');
var mod = libsbml.SBMLDocument_getModel(doc);

var parameters = libsbml.Model_getListOfParameters(mod);
var species = libsbml.Model_getListOfSpecies(mod);

console.log('# of parameters in model: ' + libsbml.ListOf_size(parameters));
console.log('# of species in model: ' + libsbml.ListOf_size(species));

var i;

console.log('All parameter IDs');
console.log('-----------------');
for (i = 0; i < libsbml.ListOf_size(parameters); i += 1) {
	var parameter = libsbml.Model_getParameter(mod, i);
	console.log(libsbml.Parameter_getId(parameter));
}

console.log('All species IDs');
console.log('---------------');
for (i = 0; i < libsbml.ListOf_size(species); i += 1) {
	var specie = libsbml.Model_getSpecies(mod, i);
	console.log(libsbml.Species_getId(specie));
}
