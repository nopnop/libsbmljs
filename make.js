var join     = require('path').join;
var fs       = require('fs');
var generate = require('ffi-generate/lib/generateffi').generate;

var result = generate({
  filename:      join(__dirname,'headers.h'),
  library:       'libsbml',
  module:        undefined,
  prefix:        [
    'Model',
    'SBML',
    'Reaction',
    'Parameter',
    'Species',
    'List'
  ],
  compiler_args: [],
  strict_type:   false,
  single_file:   false
});

var result = result.serialized
  .replace(/(SBMLDocument_setLocationURI)[^\]]+\]\]\,/m, '// REMOVED: $1\n')
  .replace(/(SBMLDocument_setConsistencyChecks)[^\]]+\]\]\,/m, '// REMOVED: $1\n')
  .replace(/(SBMLDocument_validateSBML)[^\]]+\]\]\,/m, '// REMOVED: $1\n');

fs.writeFileSync(join(__dirname, 'libsbml.js'), result);
