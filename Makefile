libsbml_include=/usr/local/include/sbml
all:
	node_modules/libclang/bin/ffi-generate-node.js -f headers.h -l libsbml -p Model -p SBML -p Reaction -p Parameter -p Species -p List > libsbml_out.js
	sed -e '/SBMLDocument_setLocationURI/d' \
	-e '/SBMLDocument_setConsistencyChecks/d' \
	-e '/SBMLDocument_validateSBML/d' \
	./libsbml_out.js > libsbml.js
	rm libsbml_out.js

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
