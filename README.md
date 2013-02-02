libsbml
=======

Bindings to use libsbml from node

# Installation

1. `libsbml` must be installed
2. Edit the `libsbml_include` variable to point to your `libsbml` header folder
3. Run `make` to generate the bindings
4. In `libsbml_model.js` you must comment out the following methods:
  * SBMLDocument_setLocationURI
  * SBMLDocument_setConsistencyChecks
  * SBMLDocument_setConsistencyChecksForConversion
  * SBMLDocument_validateSBML
  * SBMLDocument_getNumErrors
  * SBMLDocument_getNumErrorsWithSeverity
  * SBMLDocument_convert

