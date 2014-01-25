# `libsbml`

Bindings to use `libsbml` from node.js

## Original project: https://github.com/stanley-gu/libsbmljs

Main diff from original fork:

- Use [ffi-generate](https://github.com/tjfontaine/node-ffi-generate)
- Use npm post-install script to create the binding
- Upgrade the this readme with requirements for OSX


## Requirements (Notes for OSX)

- Install `libsbml`: See [installation guide](http://sbml.org/Software/libSBML/docs/cpp-api/libsbml-installation.html)
- Up to date XCode with developer tools (`xcode-select --install`)
- A valid `LD_LIBRARY_PATH` (`/Library/Developer/CommandLineTools/usr/lib` on recent OSX)
