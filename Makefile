libsbml_include=/usr/local/include/sbml
all:
	node_modules/libclang/bin/ffi-generate-node.js -f headers.h -l libsbml -p Model -p SBML -p Reaction -p Parameter -p Species > libsbml.js

sbml:
	node_modules/libclang/bin/ffi-generate-node.js -f headers.h -l libsbml -p SBML > libsbml_sbml.js

model:
	node_modules/libclang/bin/ffi-generate-node.js -f headers.h -l libsbml -p Model > libsbml_model.js

reaction:
	node_modules/libclang/bin/ffi-generate-node.js -f headers.h -l libsbml -p Reaction > libsbml_reaction.js

parameter:
	node_modules/libclang/bin/ffi-generate-node.js -f headers.h -l libsbml -p Parameter > libsbml_reaction.js

headers:
	find $(libsbml_include) -name \*.h -maxdepth 1 -exec echo '#include "{}"' \; > headers.h
