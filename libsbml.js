var FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

var voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {
  '': {
      BQM_IS: 0,
      BQM_IS_DESCRIBED_BY: 1,
      BQM_IS_DERIVED_FROM: 2,
      BQM_UNKNOWN: 3,
      '0': 'BQM_IS',
      '1': 'BQM_IS_DESCRIBED_BY',
      '2': 'BQM_IS_DERIVED_FROM',
      '3': 'BQM_UNKNOWN',
  },
};

var List_t = exports.List_t = voidPtr;
var List_tPtr = exports.List_tPtr = ref.refType(List_t);
var ListNode_t = exports.ListNode_t = voidPtr;
var ListNode_tPtr = exports.ListNode_tPtr = ref.refType(ListNode_t);
var ListItemPredicate = exports.ListItemPredicate = FFI.Function(ref.types.int32, [
  voidPtr,
]);
var ListItemPredicatePtr = exports.ListItemPredicatePtr = ref.refType(ListItemPredicate);
var ListItemComparator = exports.ListItemComparator = FFI.Function(ref.types.int32, [
  voidPtr,
  voidPtr,
]);
var ListItemComparatorPtr = exports.ListItemComparatorPtr = ref.refType(ListItemComparator);
var ModelCreator_t = exports.ModelCreator_t = voidPtr;
var ModelCreator_tPtr = exports.ModelCreator_tPtr = ref.refType(ModelCreator_t);
var XMLNode_t = exports.XMLNode_t = voidPtr;
var XMLNode_tPtr = exports.XMLNode_tPtr = ref.refType(XMLNode_t);
var ModelHistory_t = exports.ModelHistory_t = voidPtr;
var ModelHistory_tPtr = exports.ModelHistory_tPtr = ref.refType(ModelHistory_t);
var Date_t = exports.Date_t = voidPtr;
var Date_tPtr = exports.Date_tPtr = ref.refType(Date_t);
var SBMLNamespaces_t = exports.SBMLNamespaces_t = voidPtr;
var SBMLNamespaces_tPtr = exports.SBMLNamespaces_tPtr = ref.refType(SBMLNamespaces_t);
var XMLNamespaces_t = exports.XMLNamespaces_t = voidPtr;
var XMLNamespaces_tPtr = exports.XMLNamespaces_tPtr = ref.refType(XMLNamespaces_t);
var ListOf_t = exports.ListOf_t = voidPtr;
var ListOf_tPtr = exports.ListOf_tPtr = ref.refType(ListOf_t);
var SBase_t = exports.SBase_t = voidPtr;
var SBase_tPtr = exports.SBase_tPtr = ref.refType(SBase_t);
var Parameter_t = exports.Parameter_t = voidPtr;
var Parameter_tPtr = exports.Parameter_tPtr = ref.refType(Parameter_t);
var UnitDefinition_t = exports.UnitDefinition_t = voidPtr;
var UnitDefinition_tPtr = exports.UnitDefinition_tPtr = ref.refType(UnitDefinition_t);
var ASTNode_t = exports.ASTNode_t = voidPtr;
var ASTNode_tPtr = exports.ASTNode_tPtr = ref.refType(ASTNode_t);
var FunctionDefinition_t = exports.FunctionDefinition_t = voidPtr;
var FunctionDefinition_tPtr = exports.FunctionDefinition_tPtr = ref.refType(FunctionDefinition_t);
var InitialAssignment_t = exports.InitialAssignment_t = voidPtr;
var InitialAssignment_tPtr = exports.InitialAssignment_tPtr = ref.refType(InitialAssignment_t);
var SpeciesReference_t = exports.SpeciesReference_t = voidPtr;
var SpeciesReference_tPtr = exports.SpeciesReference_tPtr = ref.refType(SpeciesReference_t);
var StoichiometryMath_t = exports.StoichiometryMath_t = voidPtr;
var StoichiometryMath_tPtr = exports.StoichiometryMath_tPtr = ref.refType(StoichiometryMath_t);
var SBMLDocument_t = exports.SBMLDocument_t = voidPtr;
var SBMLDocument_tPtr = exports.SBMLDocument_tPtr = ref.refType(SBMLDocument_t);
var Model_t = exports.Model_t = voidPtr;
var Model_tPtr = exports.Model_tPtr = ref.refType(Model_t);
var SBMLError_t = exports.SBMLError_t = voidPtr;
var SBMLError_tPtr = exports.SBMLError_tPtr = ref.refType(SBMLError_t);
var FILE = exports.FILE = voidPtr;
var FILEPtr = exports.FILEPtr = ref.refType(FILE);
var ConversionProperties_t = exports.ConversionProperties_t = voidPtr;
var ConversionProperties_tPtr = exports.ConversionProperties_tPtr = ref.refType(ConversionProperties_t);
var CompartmentType_t = exports.CompartmentType_t = voidPtr;
var CompartmentType_tPtr = exports.CompartmentType_tPtr = ref.refType(CompartmentType_t);
var SpeciesType_t = exports.SpeciesType_t = voidPtr;
var SpeciesType_tPtr = exports.SpeciesType_tPtr = ref.refType(SpeciesType_t);
var Compartment_t = exports.Compartment_t = voidPtr;
var Compartment_tPtr = exports.Compartment_tPtr = ref.refType(Compartment_t);
var Species_t = exports.Species_t = voidPtr;
var Species_tPtr = exports.Species_tPtr = ref.refType(Species_t);
var Rule_t = exports.Rule_t = voidPtr;
var Rule_tPtr = exports.Rule_tPtr = ref.refType(Rule_t);
var Constraint_t = exports.Constraint_t = voidPtr;
var Constraint_tPtr = exports.Constraint_tPtr = ref.refType(Constraint_t);
var Reaction_t = exports.Reaction_t = voidPtr;
var Reaction_tPtr = exports.Reaction_tPtr = ref.refType(Reaction_t);
var Event_t = exports.Event_t = voidPtr;
var Event_tPtr = exports.Event_tPtr = ref.refType(Event_t);
var Unit_t = exports.Unit_t = voidPtr;
var Unit_tPtr = exports.Unit_tPtr = ref.refType(Unit_t);
var KineticLaw_t = exports.KineticLaw_t = voidPtr;
var KineticLaw_tPtr = exports.KineticLaw_tPtr = ref.refType(KineticLaw_t);
var LocalParameter_t = exports.LocalParameter_t = voidPtr;
var LocalParameter_tPtr = exports.LocalParameter_tPtr = ref.refType(LocalParameter_t);
var EventAssignment_t = exports.EventAssignment_t = voidPtr;
var EventAssignment_tPtr = exports.EventAssignment_tPtr = ref.refType(EventAssignment_t);
var Trigger_t = exports.Trigger_t = voidPtr;
var Trigger_tPtr = exports.Trigger_tPtr = ref.refType(Trigger_t);
var Delay_t = exports.Delay_t = voidPtr;
var Delay_tPtr = exports.Delay_tPtr = ref.refType(Delay_t);
var SBMLReader_t = exports.SBMLReader_t = voidPtr;
var SBMLReader_tPtr = exports.SBMLReader_tPtr = ref.refType(SBMLReader_t);
var SBMLWriter_t = exports.SBMLWriter_t = voidPtr;
var SBMLWriter_tPtr = exports.SBMLWriter_tPtr = ref.refType(SBMLWriter_t);
var L3ParserSettings_t = exports.L3ParserSettings_t = voidPtr;
var L3ParserSettings_tPtr = exports.L3ParserSettings_tPtr = ref.refType(L3ParserSettings_t);

exports.libsbml = new FFI.Library('libsbml', {
  SBMLTypeCode_toString: [ref.types.CString, [
    ref.types.int32,
    ref.types.CString,
  ]],
  List_create: [List_t, [
  ]],
  ListNode_create: [ListNode_t, [
    voidPtr,
  ]],
  List_free: [ref.types.void, [
    List_tPtr,
  ]],
  ListNode_free: [ref.types.void, [
    ListNode_tPtr,
  ]],
  List_add: [ref.types.void, [
    List_tPtr,
    voidPtr,
  ]],
  List_countIf: [ref.types.uint32, [
    List_tPtr,
    ListItemPredicate,
  ]],
  List_find: [voidPtr, [
    List_tPtr,
    voidPtr,
    ListItemComparator,
  ]],
  List_findIf: [List_tPtr, [
    List_tPtr,
    ListItemPredicate,
  ]],
  List_get: [voidPtr, [
    List_tPtr,
    ref.types.uint32,
  ]],
  List_prepend: [ref.types.void, [
    List_tPtr,
    voidPtr,
  ]],
  List_remove: [voidPtr, [
    List_tPtr,
    ref.types.uint32,
  ]],
  List_size: [ref.types.uint32, [
    List_tPtr,
  ]],
  ModelCreator_create: [ModelCreator_t, [
  ]],
  ModelCreator_createFromNode: [ModelCreator_tPtr, [
    XMLNode_t,
  ]],
  ModelCreator_free: [ref.types.void, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_clone: [ModelCreator_tPtr, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_getFamilyName: [ref.types.CString, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_getGivenName: [ref.types.CString, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_getEmail: [ref.types.CString, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_getOrganisation: [ref.types.CString, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_getOrganization: [ref.types.CString, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_isSetFamilyName: [ref.types.int32, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_isSetGivenName: [ref.types.int32, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_isSetEmail: [ref.types.int32, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_isSetOrganisation: [ref.types.int32, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_isSetOrganization: [ref.types.int32, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_setFamilyName: [ref.types.int32, [
    ModelCreator_tPtr,
    ref.types.CString,
  ]],
  ModelCreator_setGivenName: [ref.types.int32, [
    ModelCreator_tPtr,
    ref.types.CString,
  ]],
  ModelCreator_setEmail: [ref.types.int32, [
    ModelCreator_tPtr,
    ref.types.CString,
  ]],
  ModelCreator_setOrganisation: [ref.types.int32, [
    ModelCreator_tPtr,
    ref.types.CString,
  ]],
  ModelCreator_setOrganization: [ref.types.int32, [
    ModelCreator_tPtr,
    ref.types.CString,
  ]],
  ModelCreator_unsetFamilyName: [ref.types.int32, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_unsetGivenName: [ref.types.int32, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_unsetEmail: [ref.types.int32, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_unsetOrganisation: [ref.types.int32, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_unsetOrganization: [ref.types.int32, [
    ModelCreator_tPtr,
  ]],
  ModelCreator_hasRequiredAttributes: [ref.types.int32, [
    ModelCreator_tPtr,
  ]],
  ModelHistory_create: [ModelHistory_t, [
  ]],
  ModelHistory_free: [ref.types.void, [
    ModelHistory_tPtr,
  ]],
  ModelHistory_clone: [ModelHistory_tPtr, [
    ModelHistory_tPtr,
  ]],
  ModelHistory_addCreator: [ref.types.int32, [
    ModelHistory_tPtr,
    ModelCreator_tPtr,
  ]],
  ModelHistory_setCreatedDate: [ref.types.int32, [
    ModelHistory_tPtr,
    Date_t,
  ]],
  ModelHistory_setModifiedDate: [ref.types.int32, [
    ModelHistory_tPtr,
    Date_tPtr,
  ]],
  ModelHistory_getListCreators: [List_tPtr, [
    ModelHistory_tPtr,
  ]],
  ModelHistory_getCreatedDate: [Date_tPtr, [
    ModelHistory_tPtr,
  ]],
  ModelHistory_getModifiedDate: [Date_tPtr, [
    ModelHistory_tPtr,
  ]],
  ModelHistory_getNumCreators: [ref.types.uint32, [
    ModelHistory_tPtr,
  ]],
  ModelHistory_getCreator: [ModelCreator_tPtr, [
    ModelHistory_tPtr,
    ref.types.uint32,
  ]],
  ModelHistory_isSetCreatedDate: [ref.types.int32, [
    ModelHistory_tPtr,
  ]],
  ModelHistory_isSetModifiedDate: [ref.types.int32, [
    ModelHistory_tPtr,
  ]],
  ModelHistory_addModifiedDate: [ref.types.int32, [
    ModelHistory_tPtr,
    Date_tPtr,
  ]],
  ModelHistory_getListModifiedDates: [List_tPtr, [
    ModelHistory_tPtr,
  ]],
  ModelHistory_getNumModifiedDates: [ref.types.uint32, [
    ModelHistory_tPtr,
  ]],
  ModelHistory_getModifiedDateFromList: [Date_tPtr, [
    ModelHistory_tPtr,
    ref.types.uint32,
  ]],
  ModelHistory_hasRequiredAttributes: [ref.types.int32, [
    ModelHistory_tPtr,
  ]],
  ModelQualifierType_toString: [ref.types.CString, [
    ref.types.uint32,
  ]],
  ModelQualifierType_fromString: [ref.types.uint32, [
    ref.types.CString,
  ]],
  SBMLNamespaces_create: [SBMLNamespaces_t, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  SBMLNamespaces_getLevel: [ref.types.uint32, [
    SBMLNamespaces_tPtr,
  ]],
  SBMLNamespaces_getVersion: [ref.types.uint32, [
    SBMLNamespaces_tPtr,
  ]],
  SBMLNamespaces_getNamespaces: [XMLNamespaces_t, [
    SBMLNamespaces_tPtr,
  ]],
  SBMLNamespaces_getSBMLNamespaceURI: [ref.types.CString, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  SBMLNamespaces_addNamespaces: [ref.types.int32, [
    SBMLNamespaces_tPtr,
    XMLNamespaces_tPtr,
  ]],
  SBMLNamespaces_getSupportedNamespaces: [voidPtr, [
    ref.refType(ref.types.int32),
  ]],
  ListOf_create: [ListOf_t, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  ListOf_free: [ref.types.void, [
    ListOf_tPtr,
  ]],
  ListOf_clone: [ListOf_tPtr, [
    ListOf_tPtr,
  ]],
  ListOf_append: [ref.types.int32, [
    ListOf_tPtr,
    SBase_t,
  ]],
  ListOf_appendAndOwn: [ref.types.int32, [
    ListOf_tPtr,
    SBase_tPtr,
  ]],
  ListOf_appendFrom: [ref.types.int32, [
    ListOf_tPtr,
    ListOf_tPtr,
  ]],
  ListOf_insert: [ref.types.int32, [
    ListOf_tPtr,
    ref.types.int32,
    SBase_tPtr,
  ]],
  ListOf_insertAndOwn: [ref.types.int32, [
    ListOf_tPtr,
    ref.types.int32,
    SBase_tPtr,
  ]],
  ListOf_get: [SBase_tPtr, [
    ListOf_tPtr,
    ref.types.uint32,
  ]],
  ListOf_clear: [ref.types.void, [
    ListOf_tPtr,
    ref.types.int32,
  ]],
  ListOf_remove: [SBase_tPtr, [
    ListOf_tPtr,
    ref.types.uint32,
  ]],
  ListOf_size: [ref.types.uint32, [
    ListOf_tPtr,
  ]],
  ListOf_getItemTypeCode: [ref.types.int32, [
    ListOf_tPtr,
  ]],
  Parameter_create: [Parameter_t, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  Parameter_createWithNS: [Parameter_tPtr, [
    SBMLNamespaces_tPtr,
  ]],
  Parameter_free: [ref.types.void, [
    Parameter_tPtr,
  ]],
  Parameter_clone: [Parameter_tPtr, [
    Parameter_tPtr,
  ]],
  Parameter_initDefaults: [ref.types.void, [
    Parameter_tPtr,
  ]],
  Parameter_getNamespaces: [XMLNamespaces_tPtr, [
    Parameter_tPtr,
  ]],
  Parameter_getId: [ref.types.CString, [
    Parameter_tPtr,
  ]],
  Parameter_getName: [ref.types.CString, [
    Parameter_tPtr,
  ]],
  Parameter_getValue: [ref.types.double, [
    Parameter_tPtr,
  ]],
  Parameter_getUnits: [ref.types.CString, [
    Parameter_tPtr,
  ]],
  Parameter_getConstant: [ref.types.int32, [
    Parameter_tPtr,
  ]],
  Parameter_isSetId: [ref.types.int32, [
    Parameter_tPtr,
  ]],
  Parameter_isSetName: [ref.types.int32, [
    Parameter_tPtr,
  ]],
  Parameter_isSetValue: [ref.types.int32, [
    Parameter_tPtr,
  ]],
  Parameter_isSetUnits: [ref.types.int32, [
    Parameter_tPtr,
  ]],
  Parameter_isSetConstant: [ref.types.int32, [
    Parameter_tPtr,
  ]],
  Parameter_setId: [ref.types.int32, [
    Parameter_tPtr,
    ref.types.CString,
  ]],
  Parameter_setName: [ref.types.int32, [
    Parameter_tPtr,
    ref.types.CString,
  ]],
  Parameter_setValue: [ref.types.int32, [
    Parameter_tPtr,
    ref.types.double,
  ]],
  Parameter_setUnits: [ref.types.int32, [
    Parameter_tPtr,
    ref.types.CString,
  ]],
  Parameter_setConstant: [ref.types.int32, [
    Parameter_tPtr,
    ref.types.int32,
  ]],
  Parameter_unsetName: [ref.types.int32, [
    Parameter_tPtr,
  ]],
  Parameter_unsetValue: [ref.types.int32, [
    Parameter_tPtr,
  ]],
  Parameter_unsetUnits: [ref.types.int32, [
    Parameter_tPtr,
  ]],
  Parameter_getDerivedUnitDefinition: [UnitDefinition_t, [
    Parameter_tPtr,
  ]],
  Parameter_hasRequiredAttributes: [ref.types.int32, [
    Parameter_tPtr,
  ]],
  ListOfParameters_getById: [Parameter_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfParameters_removeById: [Parameter_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  SBML_formulaToString: [ref.types.CString, [
    ASTNode_t,
  ]],
  SBML_parseFormula: [ASTNode_tPtr, [
    ref.types.CString,
  ]],
  ListOfFunctionDefinitions_getById: [FunctionDefinition_t, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfFunctionDefinitions_removeById: [FunctionDefinition_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfInitialAssignments_getById: [InitialAssignment_t, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfInitialAssignments_removeById: [InitialAssignment_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  SpeciesReference_create: [SpeciesReference_t, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  SpeciesReference_createWithNS: [SpeciesReference_tPtr, [
    SBMLNamespaces_tPtr,
  ]],
  SpeciesReference_createModifier: [SpeciesReference_tPtr, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  SpeciesReference_createModifierWithNS: [SpeciesReference_tPtr, [
    SBMLNamespaces_tPtr,
  ]],
  SpeciesReference_free: [ref.types.void, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_clone: [SpeciesReference_tPtr, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_initDefaults: [ref.types.void, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_getNamespaces: [XMLNamespaces_tPtr, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_isModifier: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_getId: [ref.types.CString, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_getName: [ref.types.CString, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_getSpecies: [ref.types.CString, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_getStoichiometry: [ref.types.double, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_getStoichiometryMath: [StoichiometryMath_t, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_getDenominator: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_getConstant: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_isSetId: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_isSetName: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_isSetSpecies: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_isSetStoichiometryMath: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_isSetStoichiometry: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_isSetConstant: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_setId: [ref.types.int32, [
    SpeciesReference_tPtr,
    ref.types.CString,
  ]],
  SpeciesReference_setName: [ref.types.int32, [
    SpeciesReference_tPtr,
    ref.types.CString,
  ]],
  SpeciesReference_setSpecies: [ref.types.int32, [
    SpeciesReference_tPtr,
    ref.types.CString,
  ]],
  SpeciesReference_setStoichiometry: [ref.types.int32, [
    SpeciesReference_tPtr,
    ref.types.double,
  ]],
  SpeciesReference_setStoichiometryMath: [ref.types.int32, [
    SpeciesReference_tPtr,
    StoichiometryMath_tPtr,
  ]],
  SpeciesReference_setDenominator: [ref.types.int32, [
    SpeciesReference_tPtr,
    ref.types.int32,
  ]],
  SpeciesReference_setConstant: [ref.types.int32, [
    SpeciesReference_tPtr,
    ref.types.int32,
  ]],
  SpeciesReference_unsetId: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_unsetName: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_unsetStoichiometryMath: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_unsetStoichiometry: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_hasRequiredAttributes: [ref.types.int32, [
    SpeciesReference_tPtr,
  ]],
  SpeciesReference_createStoichiometryMath: [StoichiometryMath_tPtr, [
    SpeciesReference_tPtr,
  ]],
  ListOfSpeciesReferences_getById: [SpeciesReference_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfSpeciesReferences_removeById: [SpeciesReference_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  SBMLDocument_create: [SBMLDocument_t, [
  ]],
  SBMLDocument_createWithLevelAndVersion: [SBMLDocument_tPtr, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  SBMLDocument_createWithSBMLNamespaces: [SBMLDocument_tPtr, [
    SBMLNamespaces_tPtr,
  ]],
  SBMLDocument_free: [ref.types.void, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_clone: [SBMLDocument_tPtr, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_getLevel: [ref.types.uint32, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_getVersion: [ref.types.uint32, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_getModel: [Model_t, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_expandFunctionDefintions: [ref.types.int32, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_expandInitialAssignments: [ref.types.int32, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_setLevelAndVersion: [ref.types.int32, [
    SBMLDocument_tPtr,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  SBMLDocument_setLevelAndVersionStrict: [ref.types.int32, [
    SBMLDocument_tPtr,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  SBMLDocument_setLevelAndVersionNonStrict: [ref.types.int32, [
    SBMLDocument_tPtr,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  SBMLDocument_setModel: [ref.types.int32, [
    SBMLDocument_tPtr,
    Model_tPtr,
  ]],
  SBMLDocument_createModel: [Model_tPtr, [
    SBMLDocument_tPtr,
  ]],
  // REMOVED: SBMLDocument_setLocationURI

  SBMLDocument_getLocationURI: [ref.types.CString, [
    SBMLDocument_tPtr,
  ]],
  // REMOVED: SBMLDocument_setConsistencyChecks

  SBMLDocument_setConsistencyChecksForConversion: [ref.types.void, [
    SBMLDocument_tPtr,
    ref.types.int32,
    ref.types.int32,
  ]],
  SBMLDocument_checkConsistency: [ref.types.uint32, [
    SBMLDocument_tPtr,
  ]],
  // REMOVED: SBMLDocument_validateSBML

  SBMLDocument_checkInternalConsistency: [ref.types.uint32, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_checkL1Compatibility: [ref.types.uint32, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_checkL2v1Compatibility: [ref.types.uint32, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_checkL2v2Compatibility: [ref.types.uint32, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_checkL2v3Compatibility: [ref.types.uint32, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_checkL2v4Compatibility: [ref.types.uint32, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_getError: [SBMLError_t, [
    SBMLDocument_tPtr,
    ref.types.uint32,
  ]],
  SBMLDocument_getNumErrors: [ref.types.uint32, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_getNumErrorsWithSeverity: [ref.types.uint32, [
    SBMLDocument_tPtr,
    ref.types.uint32,
  ]],
  SBMLDocument_printErrors: [ref.types.void, [
    SBMLDocument_tPtr,
    FILE,
  ]],
  SBMLDocument_getDefaultLevel: [ref.types.uint32, [
  ]],
  SBMLDocument_getDefaultVersion: [ref.types.uint32, [
  ]],
  SBMLDocument_getNamespaces: [XMLNamespaces_tPtr, [
    SBMLDocument_tPtr,
  ]],
  SBMLDocument_setSBMLNamespaces: [ref.types.int32, [
    SBMLDocument_tPtr,
    SBMLNamespaces_tPtr,
  ]],
  SBMLDocument_getPkgRequired: [ref.types.int32, [
    SBMLDocument_tPtr,
    ref.types.CString,
  ]],
  SBMLDocument_getPackageRequired: [ref.types.int32, [
    SBMLDocument_tPtr,
    ref.types.CString,
  ]],
  SBMLDocument_setPkgRequired: [ref.types.int32, [
    SBMLDocument_tPtr,
    ref.types.CString,
    ref.types.int32,
  ]],
  SBMLDocument_setPackageRequired: [ref.types.int32, [
    SBMLDocument_tPtr,
    ref.types.CString,
    ref.types.int32,
  ]],
  SBMLDocument_isSetPkgRequired: [ref.types.int32, [
    SBMLDocument_tPtr,
    ref.types.CString,
  ]],
  SBMLDocument_isSetPackageRequired: [ref.types.int32, [
    SBMLDocument_tPtr,
    ref.types.CString,
  ]],
  SBMLDocument_convert: [ref.types.int32, [
    SBMLDocument_tPtr,
    ConversionProperties_t,
  ]],
  Model_create: [Model_tPtr, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  Model_createWithNS: [Model_tPtr, [
    SBMLNamespaces_tPtr,
  ]],
  Model_free: [ref.types.void, [
    Model_tPtr,
  ]],
  Model_clone: [Model_tPtr, [
    Model_tPtr,
  ]],
  Model_getNamespaces: [XMLNamespaces_tPtr, [
    Model_tPtr,
  ]],
  Model_getId: [ref.types.CString, [
    Model_tPtr,
  ]],
  Model_getName: [ref.types.CString, [
    Model_tPtr,
  ]],
  Model_getSubstanceUnits: [ref.types.CString, [
    Model_tPtr,
  ]],
  Model_getTimeUnits: [ref.types.CString, [
    Model_tPtr,
  ]],
  Model_getVolumeUnits: [ref.types.CString, [
    Model_tPtr,
  ]],
  Model_getAreaUnits: [ref.types.CString, [
    Model_tPtr,
  ]],
  Model_getLengthUnits: [ref.types.CString, [
    Model_tPtr,
  ]],
  Model_getExtentUnits: [ref.types.CString, [
    Model_tPtr,
  ]],
  Model_getConversionFactor: [ref.types.CString, [
    Model_tPtr,
  ]],
  Model_isSetId: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_isSetName: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_isSetSubstanceUnits: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_isSetTimeUnits: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_isSetVolumeUnits: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_isSetAreaUnits: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_isSetLengthUnits: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_isSetExtentUnits: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_isSetConversionFactor: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_setId: [ref.types.int32, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_setName: [ref.types.int32, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_setSubstanceUnits: [ref.types.int32, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_setTimeUnits: [ref.types.int32, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_setVolumeUnits: [ref.types.int32, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_setAreaUnits: [ref.types.int32, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_setLengthUnits: [ref.types.int32, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_setExtentUnits: [ref.types.int32, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_setConversionFactor: [ref.types.int32, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_unsetId: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_unsetName: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_unsetSubstanceUnits: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_unsetTimeUnits: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_unsetVolumeUnits: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_unsetAreaUnits: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_unsetLengthUnits: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_unsetExtentUnits: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_unsetConversionFactor: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_getModelHistory: [ModelHistory_tPtr, [
    Model_tPtr,
  ]],
  Model_isSetModelHistory: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_setModelHistory: [ref.types.int32, [
    Model_tPtr,
    ModelHistory_tPtr,
  ]],
  Model_unsetModelHistory: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_addFunctionDefinition: [ref.types.int32, [
    Model_tPtr,
    FunctionDefinition_tPtr,
  ]],
  Model_addUnitDefinition: [ref.types.int32, [
    Model_tPtr,
    UnitDefinition_tPtr,
  ]],
  Model_addCompartmentType: [ref.types.int32, [
    Model_tPtr,
    CompartmentType_t,
  ]],
  Model_addSpeciesType: [ref.types.int32, [
    Model_tPtr,
    SpeciesType_t,
  ]],
  Model_addCompartment: [ref.types.int32, [
    Model_tPtr,
    Compartment_t,
  ]],
  Model_addSpecies: [ref.types.int32, [
    Model_tPtr,
    Species_t,
  ]],
  Model_addParameter: [ref.types.int32, [
    Model_tPtr,
    Parameter_tPtr,
  ]],
  Model_addInitialAssignment: [ref.types.int32, [
    Model_tPtr,
    InitialAssignment_tPtr,
  ]],
  Model_addRule: [ref.types.int32, [
    Model_tPtr,
    Rule_t,
  ]],
  Model_addConstraint: [ref.types.int32, [
    Model_tPtr,
    Constraint_t,
  ]],
  Model_addReaction: [ref.types.int32, [
    Model_tPtr,
    Reaction_t,
  ]],
  Model_addEvent: [ref.types.int32, [
    Model_tPtr,
    Event_t,
  ]],
  Model_createFunctionDefinition: [FunctionDefinition_tPtr, [
    Model_tPtr,
  ]],
  Model_createUnitDefinition: [UnitDefinition_tPtr, [
    Model_tPtr,
  ]],
  Model_createUnit: [Unit_t, [
    Model_tPtr,
  ]],
  Model_createCompartmentType: [CompartmentType_tPtr, [
    Model_tPtr,
  ]],
  Model_createSpeciesType: [SpeciesType_tPtr, [
    Model_tPtr,
  ]],
  Model_createCompartment: [Compartment_tPtr, [
    Model_tPtr,
  ]],
  Model_createSpecies: [Species_tPtr, [
    Model_tPtr,
  ]],
  Model_createParameter: [Parameter_tPtr, [
    Model_tPtr,
  ]],
  Model_createInitialAssignment: [InitialAssignment_tPtr, [
    Model_tPtr,
  ]],
  Model_createAlgebraicRule: [Rule_tPtr, [
    Model_tPtr,
  ]],
  Model_createAssignmentRule: [Rule_tPtr, [
    Model_tPtr,
  ]],
  Model_createRateRule: [Rule_tPtr, [
    Model_tPtr,
  ]],
  Model_createConstraint: [Constraint_tPtr, [
    Model_tPtr,
  ]],
  Model_createReaction: [Reaction_tPtr, [
    Model_tPtr,
  ]],
  Model_createReactant: [SpeciesReference_tPtr, [
    Model_tPtr,
  ]],
  Model_createProduct: [SpeciesReference_tPtr, [
    Model_tPtr,
  ]],
  Model_createModifier: [SpeciesReference_tPtr, [
    Model_tPtr,
  ]],
  Model_createKineticLaw: [KineticLaw_t, [
    Model_tPtr,
  ]],
  Model_createKineticLawParameter: [Parameter_tPtr, [
    Model_tPtr,
  ]],
  Model_createKineticLawLocalParameter: [LocalParameter_t, [
    Model_tPtr,
  ]],
  Model_createEvent: [Event_tPtr, [
    Model_tPtr,
  ]],
  Model_createEventAssignment: [EventAssignment_t, [
    Model_tPtr,
  ]],
  Model_createTrigger: [Trigger_t, [
    Model_tPtr,
  ]],
  Model_createDelay: [Delay_t, [
    Model_tPtr,
  ]],
  Model_getListOfFunctionDefinitions: [ListOf_tPtr, [
    Model_tPtr,
  ]],
  Model_getListOfUnitDefinitions: [ListOf_tPtr, [
    Model_tPtr,
  ]],
  Model_getListOfCompartmentTypes: [ListOf_tPtr, [
    Model_tPtr,
  ]],
  Model_getListOfSpeciesTypes: [ListOf_tPtr, [
    Model_tPtr,
  ]],
  Model_getListOfCompartments: [ListOf_tPtr, [
    Model_tPtr,
  ]],
  Model_getListOfSpecies: [ListOf_tPtr, [
    Model_tPtr,
  ]],
  Model_getListOfParameters: [ListOf_tPtr, [
    Model_tPtr,
  ]],
  Model_getListOfInitialAssignments: [ListOf_tPtr, [
    Model_tPtr,
  ]],
  Model_getListOfRules: [ListOf_tPtr, [
    Model_tPtr,
  ]],
  Model_getListOfConstraints: [ListOf_tPtr, [
    Model_tPtr,
  ]],
  Model_getListOfReactions: [ListOf_tPtr, [
    Model_tPtr,
  ]],
  Model_getListOfEvents: [ListOf_tPtr, [
    Model_tPtr,
  ]],
  Model_getFunctionDefinition: [FunctionDefinition_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_getFunctionDefinitionById: [FunctionDefinition_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_getUnitDefinition: [UnitDefinition_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_getUnitDefinitionById: [UnitDefinition_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_getCompartmentType: [CompartmentType_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_getCompartmentTypeById: [CompartmentType_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_getSpeciesType: [SpeciesType_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_getSpeciesTypeById: [SpeciesType_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_getCompartment: [Compartment_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_getCompartmentById: [Compartment_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_getSpecies: [Species_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_getSpeciesById: [Species_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_getParameter: [Parameter_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_getParameterById: [Parameter_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_getInitialAssignment: [InitialAssignment_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_getInitialAssignmentBySym: [InitialAssignment_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_getRule: [Rule_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_getRuleByVar: [Rule_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_getConstraint: [Constraint_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_getReaction: [Reaction_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_getReactionById: [Reaction_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_getSpeciesReferenceById: [SpeciesReference_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_getEvent: [Event_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_getEventById: [Event_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_getNumFunctionDefinitions: [ref.types.uint32, [
    Model_tPtr,
  ]],
  Model_getNumUnitDefinitions: [ref.types.uint32, [
    Model_tPtr,
  ]],
  Model_getNumCompartmentTypes: [ref.types.uint32, [
    Model_tPtr,
  ]],
  Model_getNumSpeciesTypes: [ref.types.uint32, [
    Model_tPtr,
  ]],
  Model_getNumCompartments: [ref.types.uint32, [
    Model_tPtr,
  ]],
  Model_getNumSpecies: [ref.types.uint32, [
    Model_tPtr,
  ]],
  Model_getNumSpeciesWithBoundaryCondition: [ref.types.uint32, [
    Model_tPtr,
  ]],
  Model_getNumParameters: [ref.types.uint32, [
    Model_tPtr,
  ]],
  Model_getNumInitialAssignments: [ref.types.uint32, [
    Model_tPtr,
  ]],
  Model_getNumRules: [ref.types.uint32, [
    Model_tPtr,
  ]],
  Model_getNumConstraints: [ref.types.uint32, [
    Model_tPtr,
  ]],
  Model_getNumReactions: [ref.types.uint32, [
    Model_tPtr,
  ]],
  Model_getNumEvents: [ref.types.uint32, [
    Model_tPtr,
  ]],
  Model_populateListFormulaUnitsData: [ref.types.void, [
    Model_tPtr,
  ]],
  Model_populateListFormulaUnitsData: [ref.types.void, [
    Model_tPtr,
  ]],
  Model_isPopulatedListFormulaUnitsData: [ref.types.int32, [
    Model_tPtr,
  ]],
  Model_removeFunctionDefinition: [FunctionDefinition_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_removeFunctionDefinitionById: [FunctionDefinition_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_removeUnitDefinition: [UnitDefinition_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_removeUnitDefinitionById: [UnitDefinition_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_removeCompartmentType: [CompartmentType_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_removeCompartmentTypeById: [CompartmentType_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_removeSpeciesType: [SpeciesType_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_removeSpeciesTypeById: [SpeciesType_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_removeCompartment: [Compartment_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_removeCompartmentById: [Compartment_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_removeSpecies: [Species_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_removeSpeciesById: [Species_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_removeParameter: [Parameter_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_removeParameterById: [Parameter_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_removeInitialAssignment: [InitialAssignment_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_removeInitialAssignmentBySym: [InitialAssignment_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_removeRule: [Rule_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_removeRuleByVar: [Rule_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_removeConstraint: [Constraint_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_removeReaction: [Reaction_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_removeReactionById: [Reaction_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  Model_removeEvent: [Event_tPtr, [
    Model_tPtr,
    ref.types.uint32,
  ]],
  Model_removeEventById: [Event_tPtr, [
    Model_tPtr,
    ref.types.CString,
  ]],
  ListOfUnitDefinitions_getById: [UnitDefinition_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfUnitDefinitions_removeById: [UnitDefinition_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfCompartmentTypes_getById: [CompartmentType_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfCompartmentTypes_removeById: [CompartmentType_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  SpeciesType_create: [SpeciesType_tPtr, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  SpeciesType_createWithNS: [SpeciesType_tPtr, [
    SBMLNamespaces_tPtr,
  ]],
  SpeciesType_free: [ref.types.void, [
    SpeciesType_tPtr,
  ]],
  SpeciesType_clone: [SpeciesType_tPtr, [
    SpeciesType_tPtr,
  ]],
  SpeciesType_getNamespaces: [XMLNamespaces_tPtr, [
    SpeciesType_tPtr,
  ]],
  SpeciesType_getId: [ref.types.CString, [
    SpeciesType_tPtr,
  ]],
  SpeciesType_getName: [ref.types.CString, [
    SpeciesType_tPtr,
  ]],
  SpeciesType_isSetId: [ref.types.int32, [
    SpeciesType_tPtr,
  ]],
  SpeciesType_isSetName: [ref.types.int32, [
    SpeciesType_tPtr,
  ]],
  SpeciesType_setId: [ref.types.int32, [
    SpeciesType_tPtr,
    ref.types.CString,
  ]],
  SpeciesType_setName: [ref.types.int32, [
    SpeciesType_tPtr,
    ref.types.CString,
  ]],
  SpeciesType_unsetName: [ref.types.int32, [
    SpeciesType_tPtr,
  ]],
  ListOfSpeciesTypes_getById: [SpeciesType_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfSpeciesTypes_removeById: [SpeciesType_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfCompartments_getById: [Compartment_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfCompartments_removeById: [Compartment_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  Species_create: [Species_tPtr, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  Species_createWithNS: [Species_tPtr, [
    SBMLNamespaces_tPtr,
  ]],
  Species_free: [ref.types.void, [
    Species_tPtr,
  ]],
  Species_clone: [Species_tPtr, [
    Species_tPtr,
  ]],
  Species_initDefaults: [ref.types.void, [
    Species_tPtr,
  ]],
  Species_getNamespaces: [XMLNamespaces_tPtr, [
    Species_tPtr,
  ]],
  Species_getId: [ref.types.CString, [
    Species_tPtr,
  ]],
  Species_getName: [ref.types.CString, [
    Species_tPtr,
  ]],
  Species_getSpeciesType: [ref.types.CString, [
    Species_tPtr,
  ]],
  Species_getCompartment: [ref.types.CString, [
    Species_tPtr,
  ]],
  Species_getInitialAmount: [ref.types.double, [
    Species_tPtr,
  ]],
  Species_getInitialConcentration: [ref.types.double, [
    Species_tPtr,
  ]],
  Species_getSubstanceUnits: [ref.types.CString, [
    Species_tPtr,
  ]],
  Species_getSpatialSizeUnits: [ref.types.CString, [
    Species_tPtr,
  ]],
  Species_getUnits: [ref.types.CString, [
    Species_tPtr,
  ]],
  Species_getHasOnlySubstanceUnits: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_getBoundaryCondition: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_getCharge: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_getConstant: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_getConversionFactor: [ref.types.CString, [
    Species_tPtr,
  ]],
  Species_isSetId: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_isSetName: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_isSetSpeciesType: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_isSetCompartment: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_isSetInitialAmount: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_isSetInitialConcentration: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_isSetSubstanceUnits: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_isSetSpatialSizeUnits: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_isSetUnits: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_isSetCharge: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_isSetConversionFactor: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_isSetConstant: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_isSetBoundaryCondition: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_isSetHasOnlySubstanceUnits: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_setId: [ref.types.int32, [
    Species_tPtr,
    ref.types.CString,
  ]],
  Species_setName: [ref.types.int32, [
    Species_tPtr,
    ref.types.CString,
  ]],
  Species_setSpeciesType: [ref.types.int32, [
    Species_tPtr,
    ref.types.CString,
  ]],
  Species_setCompartment: [ref.types.int32, [
    Species_tPtr,
    ref.types.CString,
  ]],
  Species_setInitialAmount: [ref.types.int32, [
    Species_tPtr,
    ref.types.double,
  ]],
  Species_setInitialConcentration: [ref.types.int32, [
    Species_tPtr,
    ref.types.double,
  ]],
  Species_setSubstanceUnits: [ref.types.int32, [
    Species_tPtr,
    ref.types.CString,
  ]],
  Species_setSpatialSizeUnits: [ref.types.int32, [
    Species_tPtr,
    ref.types.CString,
  ]],
  Species_setUnits: [ref.types.int32, [
    Species_tPtr,
    ref.types.CString,
  ]],
  Species_setHasOnlySubstanceUnits: [ref.types.int32, [
    Species_tPtr,
    ref.types.int32,
  ]],
  Species_setBoundaryCondition: [ref.types.int32, [
    Species_tPtr,
    ref.types.int32,
  ]],
  Species_setCharge: [ref.types.int32, [
    Species_tPtr,
    ref.types.int32,
  ]],
  Species_setConstant: [ref.types.int32, [
    Species_tPtr,
    ref.types.int32,
  ]],
  Species_setConversionFactor: [ref.types.int32, [
    Species_tPtr,
    ref.types.CString,
  ]],
  Species_unsetName: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_unsetSpeciesType: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_unsetInitialAmount: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_unsetInitialConcentration: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_unsetSubstanceUnits: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_unsetSpatialSizeUnits: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_unsetUnits: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_unsetCharge: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_unsetConversionFactor: [ref.types.int32, [
    Species_tPtr,
  ]],
  Species_getDerivedUnitDefinition: [UnitDefinition_tPtr, [
    Species_tPtr,
  ]],
  Species_hasRequiredAttributes: [ref.types.int32, [
    Species_tPtr,
  ]],
  ListOfSpecies_getById: [Species_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfSpecies_removeById: [Species_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfLocalParameters_getById: [LocalParameter_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfLocalParameters_removeById: [LocalParameter_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  Reaction_create: [Reaction_tPtr, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  Reaction_createWithNS: [Reaction_tPtr, [
    SBMLNamespaces_tPtr,
  ]],
  Reaction_free: [ref.types.void, [
    Reaction_tPtr,
  ]],
  Reaction_clone: [Reaction_tPtr, [
    Reaction_tPtr,
  ]],
  Reaction_initDefaults: [ref.types.void, [
    Reaction_tPtr,
  ]],
  Reaction_getNamespaces: [XMLNamespaces_tPtr, [
    Reaction_tPtr,
  ]],
  Reaction_getId: [ref.types.CString, [
    Reaction_tPtr,
  ]],
  Reaction_getName: [ref.types.CString, [
    Reaction_tPtr,
  ]],
  Reaction_getKineticLaw: [KineticLaw_tPtr, [
    Reaction_tPtr,
  ]],
  Reaction_getReversible: [ref.types.int32, [
    Reaction_tPtr,
  ]],
  Reaction_getFast: [ref.types.int32, [
    Reaction_tPtr,
  ]],
  Reaction_getCompartment: [ref.types.CString, [
    Reaction_tPtr,
  ]],
  Reaction_isSetId: [ref.types.int32, [
    Reaction_tPtr,
  ]],
  Reaction_isSetName: [ref.types.int32, [
    Reaction_tPtr,
  ]],
  Reaction_isSetKineticLaw: [ref.types.int32, [
    Reaction_tPtr,
  ]],
  Reaction_isSetCompartment: [ref.types.int32, [
    Reaction_tPtr,
  ]],
  Reaction_isSetReversible: [ref.types.int32, [
    Reaction_tPtr,
  ]],
  Reaction_isSetFast: [ref.types.int32, [
    Reaction_tPtr,
  ]],
  Reaction_setId: [ref.types.int32, [
    Reaction_tPtr,
    ref.types.CString,
  ]],
  Reaction_setName: [ref.types.int32, [
    Reaction_tPtr,
    ref.types.CString,
  ]],
  Reaction_setKineticLaw: [ref.types.int32, [
    Reaction_tPtr,
    KineticLaw_tPtr,
  ]],
  Reaction_setReversible: [ref.types.int32, [
    Reaction_tPtr,
    ref.types.int32,
  ]],
  Reaction_setFast: [ref.types.int32, [
    Reaction_tPtr,
    ref.types.int32,
  ]],
  Reaction_setCompartment: [ref.types.int32, [
    Reaction_tPtr,
    ref.types.CString,
  ]],
  Reaction_unsetName: [ref.types.int32, [
    Reaction_tPtr,
  ]],
  Reaction_unsetKineticLaw: [ref.types.int32, [
    Reaction_tPtr,
  ]],
  Reaction_unsetFast: [ref.types.int32, [
    Reaction_tPtr,
  ]],
  Reaction_unsetCompartment: [ref.types.int32, [
    Reaction_tPtr,
  ]],
  Reaction_hasRequiredAttributes: [ref.types.int32, [
    Reaction_tPtr,
  ]],
  Reaction_addReactant: [ref.types.int32, [
    Reaction_tPtr,
    SpeciesReference_tPtr,
  ]],
  Reaction_addProduct: [ref.types.int32, [
    Reaction_tPtr,
    SpeciesReference_tPtr,
  ]],
  Reaction_addModifier: [ref.types.int32, [
    Reaction_tPtr,
    SpeciesReference_tPtr,
  ]],
  Reaction_createReactant: [SpeciesReference_tPtr, [
    Reaction_tPtr,
  ]],
  Reaction_createProduct: [SpeciesReference_tPtr, [
    Reaction_tPtr,
  ]],
  Reaction_createModifier: [SpeciesReference_tPtr, [
    Reaction_tPtr,
  ]],
  Reaction_createKineticLaw: [KineticLaw_tPtr, [
    Reaction_tPtr,
  ]],
  Reaction_getListOfReactants: [ListOf_tPtr, [
    Reaction_tPtr,
  ]],
  Reaction_getListOfProducts: [ListOf_tPtr, [
    Reaction_tPtr,
  ]],
  Reaction_getListOfModifiers: [ListOf_tPtr, [
    Reaction_tPtr,
  ]],
  Reaction_getReactant: [SpeciesReference_tPtr, [
    Reaction_tPtr,
    ref.types.uint32,
  ]],
  Reaction_getReactantBySpecies: [SpeciesReference_tPtr, [
    Reaction_tPtr,
    ref.types.CString,
  ]],
  Reaction_getProduct: [SpeciesReference_tPtr, [
    Reaction_tPtr,
    ref.types.uint32,
  ]],
  Reaction_getProductBySpecies: [SpeciesReference_tPtr, [
    Reaction_tPtr,
    ref.types.CString,
  ]],
  Reaction_getModifier: [SpeciesReference_tPtr, [
    Reaction_tPtr,
    ref.types.uint32,
  ]],
  Reaction_getModifierBySpecies: [SpeciesReference_tPtr, [
    Reaction_tPtr,
    ref.types.CString,
  ]],
  Reaction_getNumReactants: [ref.types.uint32, [
    Reaction_tPtr,
  ]],
  Reaction_getNumProducts: [ref.types.uint32, [
    Reaction_tPtr,
  ]],
  Reaction_getNumModifiers: [ref.types.uint32, [
    Reaction_tPtr,
  ]],
  Reaction_removeReactant: [SpeciesReference_tPtr, [
    Reaction_tPtr,
    ref.types.uint32,
  ]],
  Reaction_removeReactantBySpecies: [SpeciesReference_tPtr, [
    Reaction_tPtr,
    ref.types.CString,
  ]],
  Reaction_removeProduct: [SpeciesReference_tPtr, [
    Reaction_tPtr,
    ref.types.uint32,
  ]],
  Reaction_removeProductBySpecies: [SpeciesReference_tPtr, [
    Reaction_tPtr,
    ref.types.CString,
  ]],
  Reaction_removeModifier: [SpeciesReference_tPtr, [
    Reaction_tPtr,
    ref.types.uint32,
  ]],
  Reaction_removeModifierBySpecies: [SpeciesReference_tPtr, [
    Reaction_tPtr,
    ref.types.CString,
  ]],
  ListOfReactions_getById: [Reaction_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfReactions_removeById: [Reaction_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfRules_getById: [Rule_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfRules_removeById: [Rule_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfEvents_getById: [Event_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfEvents_removeById: [Event_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfEventAssignments_getById: [EventAssignment_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  ListOfEventAssignments_removeById: [EventAssignment_tPtr, [
    ListOf_tPtr,
    ref.types.CString,
  ]],
  SBMLReader_create: [SBMLReader_t, [
  ]],
  SBMLReader_free: [ref.types.void, [
    SBMLReader_tPtr,
  ]],
  SBMLReader_readSBML: [SBMLDocument_tPtr, [
    SBMLReader_tPtr,
    ref.types.CString,
  ]],
  SBMLReader_readSBMLFromFile: [SBMLDocument_tPtr, [
    SBMLReader_tPtr,
    ref.types.CString,
  ]],
  SBMLReader_readSBMLFromString: [SBMLDocument_tPtr, [
    SBMLReader_tPtr,
    ref.types.CString,
  ]],
  SBMLReader_hasZlib: [ref.types.int32, [
  ]],
  SBMLReader_hasBzip2: [ref.types.int32, [
  ]],
  SBMLWriter_create: [SBMLWriter_t, [
  ]],
  SBMLWriter_free: [ref.types.void, [
    SBMLWriter_tPtr,
  ]],
  SBMLWriter_setProgramName: [ref.types.int32, [
    SBMLWriter_tPtr,
    ref.types.CString,
  ]],
  SBMLWriter_setProgramVersion: [ref.types.int32, [
    SBMLWriter_tPtr,
    ref.types.CString,
  ]],
  SBMLWriter_writeSBML: [ref.types.int32, [
    SBMLWriter_tPtr,
    SBMLDocument_tPtr,
    ref.types.CString,
  ]],
  SBMLWriter_writeSBMLToFile: [ref.types.int32, [
    SBMLWriter_tPtr,
    SBMLDocument_tPtr,
    ref.types.CString,
  ]],
  SBMLWriter_writeSBMLToString: [ref.types.CString, [
    SBMLWriter_tPtr,
    SBMLDocument_tPtr,
  ]],
  SBMLWriter_hasZlib: [ref.types.int32, [
  ]],
  SBMLWriter_hasBzip2: [ref.types.int32, [
  ]],
  SBML_parseL3Formula: [ASTNode_tPtr, [
    ref.types.CString,
  ]],
  SBML_parseL3FormulaWithModel: [ASTNode_tPtr, [
    ref.types.CString,
    Model_tPtr,
  ]],
  SBML_parseL3FormulaWithSettings: [ASTNode_tPtr, [
    ref.types.CString,
    L3ParserSettings_t,
  ]],
  SBML_getDefaultL3ParserSettings: [L3ParserSettings_tPtr, [
  ]],
  SBML_getLastParseL3Error: [ref.types.CString, [
  ]],
});
