libsbml_include=/usr/local/include/sbml
all:
	find $(libsbml_include) -name \*.h -exec echo '#include "{}"' \; > headers.h
	node_modules/libclang/bin/ffi-generate-node.js -f headers.h -l libsbml -p SBML > libsbml_sbml.js
	node_modules/libclang/bin/ffi-generate-node.js -f headers.h -l libsbml -p Model > libsbml_model.js
	node_modules/libclang/bin/ffi-generate-node.js -f headers.h -l libsbml -p Reaction > libsbml_reaction.js
