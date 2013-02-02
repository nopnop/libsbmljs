var FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');
var voidPtr = ref.refType(ref.types.void);
exports.CONSTANTS = {};
var SBMLNamespaces_t = exports.SBMLNamespaces_t = voidPtr;
var SBMLNamespaces_tPtr = exports.SBMLNamespaces_tPtr = ref.refType(SBMLNamespaces_t);
var XMLNamespaces_t = exports.XMLNamespaces_t = voidPtr;
var XMLNamespaces_tPtr = exports.XMLNamespaces_tPtr = ref.refType(XMLNamespaces_t);
var ASTNode_t = exports.ASTNode_t = voidPtr;
var ASTNode_tPtr = exports.ASTNode_tPtr = ref.refType(ASTNode_t);
var SBMLReader_t = exports.SBMLReader_t = voidPtr;
var SBMLReader_tPtr = exports.SBMLReader_tPtr = ref.refType(SBMLReader_t);
var SBMLDocument_t = exports.SBMLDocument_t = voidPtr;
var SBMLDocument_tPtr = exports.SBMLDocument_tPtr = ref.refType(SBMLDocument_t);
var SBMLWriter_t = exports.SBMLWriter_t = voidPtr;
var SBMLWriter_tPtr = exports.SBMLWriter_tPtr = ref.refType(SBMLWriter_t);
var Model_t = exports.Model_t = voidPtr;
var Model_tPtr = exports.Model_tPtr = ref.refType(Model_t);
var L3ParserSettings_t = exports.L3ParserSettings_t = voidPtr;
var L3ParserSettings_tPtr = exports.L3ParserSettings_tPtr = ref.refType(L3ParserSettings_t);
var SBMLError_t = exports.SBMLError_t = voidPtr;
var SBMLError_tPtr = exports.SBMLError_tPtr = ref.refType(SBMLError_t);
var FILE = exports.FILE = voidPtr;
var FILEPtr = exports.FILEPtr = ref.refType(FILE);
var ConversionProperties_t = exports.ConversionProperties_t = voidPtr;
var ConversionProperties_tPtr = exports.ConversionProperties_tPtr = ref.refType(ConversionProperties_t);
exports.libsbml = new FFI.Library('libsbml', {
    SBMLTypeCode_toString: [ref.types.CString, [ref.types.int32, ref.types.CString]],
    SBMLNamespaces_create: [SBMLNamespaces_t, [ref.types.uint32, ref.types.uint32]],
    SBMLNamespaces_getLevel: [ref.types.uint32, [SBMLNamespaces_tPtr]],
    SBMLNamespaces_getVersion: [ref.types.uint32, [SBMLNamespaces_tPtr]],
    SBMLNamespaces_getNamespaces: [XMLNamespaces_t, [SBMLNamespaces_tPtr]],
    SBMLNamespaces_getSBMLNamespaceURI: [ref.types.CString, [ref.types.uint32, ref.types.uint32]],
    SBMLNamespaces_addNamespaces: [ref.types.int32, [SBMLNamespaces_tPtr, XMLNamespaces_tPtr]],
    SBMLNamespaces_getSupportedNamespaces: [voidPtr, [voidPtr]],
    SBML_formulaToString: [ref.types.CString, [ASTNode_t]],
    SBML_parseFormula: [ASTNode_tPtr, [ref.types.CString]],
    SBMLReader_create: [SBMLReader_t, []],
    SBMLReader_free: [ref.types.void, [SBMLReader_tPtr]],
    SBMLReader_readSBML: [SBMLDocument_t, [SBMLReader_tPtr, ref.types.CString]],
    SBMLReader_readSBMLFromFile: [SBMLDocument_tPtr, [SBMLReader_tPtr, ref.types.CString]],
    SBMLReader_readSBMLFromString: [SBMLDocument_tPtr, [SBMLReader_tPtr, ref.types.CString]],
    SBMLReader_hasZlib: [ref.types.int32, []],
    SBMLReader_hasBzip2: [ref.types.int32, []],
    SBMLWriter_create: [SBMLWriter_t, []],
    SBMLWriter_free: [ref.types.void, [SBMLWriter_tPtr]],
    SBMLWriter_setProgramName: [ref.types.int32, [SBMLWriter_tPtr, ref.types.CString]],
    SBMLWriter_setProgramVersion: [ref.types.int32, [SBMLWriter_tPtr, ref.types.CString]],
    SBMLWriter_writeSBML: [ref.types.int32, [SBMLWriter_tPtr, SBMLDocument_tPtr, ref.types.CString]],
    SBMLWriter_writeSBMLToFile: [ref.types.int32, [SBMLWriter_tPtr, SBMLDocument_tPtr, ref.types.CString]],
    SBMLWriter_writeSBMLToString: [ref.types.CString, [SBMLWriter_tPtr, SBMLDocument_tPtr]],
    SBMLWriter_hasZlib: [ref.types.int32, []],
    SBMLWriter_hasBzip2: [ref.types.int32, []],
    SBML_parseL3Formula: [ASTNode_tPtr, [ref.types.CString]],
    SBML_parseL3FormulaWithModel: [ASTNode_tPtr, [ref.types.CString, Model_t]],
    SBML_parseL3FormulaWithSettings: [ASTNode_tPtr, [ref.types.CString, L3ParserSettings_t]],
    SBML_getDefaultL3ParserSettings: [L3ParserSettings_tPtr, []],
    SBML_getLastParseL3Error: [ref.types.CString, []],
    SBMLDocument_create: [SBMLDocument_tPtr, []],
    SBMLDocument_createWithLevelAndVersion: [SBMLDocument_tPtr, [ref.types.uint32, ref.types.uint32]],
    SBMLDocument_createWithSBMLNamespaces: [SBMLDocument_tPtr, [SBMLNamespaces_tPtr]],
    SBMLDocument_free: [ref.types.void, [SBMLDocument_tPtr]],
    SBMLDocument_clone: [SBMLDocument_tPtr, [SBMLDocument_tPtr]],
    SBMLDocument_getLevel: [ref.types.uint32, [SBMLDocument_tPtr]],
    SBMLDocument_getVersion: [ref.types.uint32, [SBMLDocument_tPtr]],
    SBMLDocument_getModel: [Model_tPtr, [SBMLDocument_tPtr]],
    SBMLDocument_expandFunctionDefintions: [ref.types.int32, [SBMLDocument_tPtr]],
    SBMLDocument_expandInitialAssignments: [ref.types.int32, [SBMLDocument_tPtr]],
    SBMLDocument_setLevelAndVersion: [ref.types.int32, [SBMLDocument_tPtr, ref.types.uint32, ref.types.uint32]],
    SBMLDocument_setLevelAndVersionStrict: [ref.types.int32, [SBMLDocument_tPtr, ref.types.uint32, ref.types.uint32]],
    SBMLDocument_setLevelAndVersionNonStrict: [ref.types.int32, [SBMLDocument_tPtr, ref.types.uint32, ref.types.uint32]],
    SBMLDocument_setModel: [ref.types.int32, [SBMLDocument_tPtr, Model_tPtr]],
    SBMLDocument_createModel: [Model_tPtr, [SBMLDocument_tPtr]],
    //SBMLDocument_setLocationURI: [ref.types.void, [SBMLDocument_tPtr, ref.types.CString]],
    SBMLDocument_getLocationURI: [ref.types.CString, [SBMLDocument_tPtr]],
    //SBMLDocument_setConsistencyChecks: [ref.types.void, [SBMLDocument_tPtr, ref.types.int32, ref.types.int32]],
    //SBMLDocument_setConsistencyChecksForConversion: [ref.types.void, [SBMLDocument_tPtr, ref.types.int32, ref.types.int32]],
    SBMLDocument_checkConsistency: [ref.types.uint32, [SBMLDocument_tPtr]],
    //SBMLDocument_validateSBML: [ref.types.uint32, [SBMLDocument_tPtr]],
    SBMLDocument_checkInternalConsistency: [ref.types.uint32, [SBMLDocument_tPtr]],
    SBMLDocument_checkL1Compatibility: [ref.types.uint32, [SBMLDocument_tPtr]],
    SBMLDocument_checkL2v1Compatibility: [ref.types.uint32, [SBMLDocument_tPtr]],
    SBMLDocument_checkL2v2Compatibility: [ref.types.uint32, [SBMLDocument_tPtr]],
    SBMLDocument_checkL2v3Compatibility: [ref.types.uint32, [SBMLDocument_tPtr]],
    SBMLDocument_checkL2v4Compatibility: [ref.types.uint32, [SBMLDocument_tPtr]],
    SBMLDocument_getError: [SBMLError_t, [SBMLDocument_tPtr, ref.types.uint32]],
    //SBMLDocument_getNumErrors: [ref.types.uint32, [SBMLDocument_tPtr]],
    //SBMLDocument_getNumErrorsWithSeverity: [ref.types.uint32, [SBMLDocument_tPtr, ref.types.uint32]],
    SBMLDocument_printErrors: [ref.types.void, [SBMLDocument_tPtr, FILE]],
    SBMLDocument_getDefaultLevel: [ref.types.uint32, []],
    SBMLDocument_getDefaultVersion: [ref.types.uint32, []],
    SBMLDocument_getNamespaces: [XMLNamespaces_tPtr, [SBMLDocument_tPtr]],
    SBMLDocument_setSBMLNamespaces: [ref.types.int32, [SBMLDocument_tPtr, SBMLNamespaces_tPtr]],
    SBMLDocument_getPkgRequired: [ref.types.int32, [SBMLDocument_tPtr, ref.types.CString]],
    SBMLDocument_getPackageRequired: [ref.types.int32, [SBMLDocument_tPtr, ref.types.CString]],
    SBMLDocument_setPkgRequired: [ref.types.int32, [SBMLDocument_tPtr, ref.types.CString, ref.types.int32]],
    SBMLDocument_setPackageRequired: [ref.types.int32, [SBMLDocument_tPtr, ref.types.CString, ref.types.int32]],
    SBMLDocument_isSetPkgRequired: [ref.types.int32, [SBMLDocument_tPtr, ref.types.CString]],
    SBMLDocument_isSetPackageRequired: [ref.types.int32, [SBMLDocument_tPtr, ref.types.CString]],
    //SBMLDocument_convert: [ref.types.int32, [SBMLDocument_tPtr, ConversionProperties_t]],
});
