//// [tests/cases/conformance/es6/unicodeExtendedEscapes/unicodeExtendedEscapesInTemplates14_ES5.ts] ////

//// [unicodeExtendedEscapesInTemplates14_ES5.ts]
// Shouldn't work, negatives are not allowed.
var x = `\u{-DDDD}`;


//// [unicodeExtendedEscapesInTemplates14_ES5.js]
// Shouldn't work, negatives are not allowed.
var x = "\\u{-DDDD}";
