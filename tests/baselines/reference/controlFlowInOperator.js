//// [tests/cases/conformance/controlFlow/controlFlowInOperator.ts] ////

//// [controlFlowInOperator.ts]
const a = 'a';
const b = 'b';
const d = 'd';

type A = { [a]: number; };
type B = { [b]: string; };

declare const c: A | B;

if ('a' in c) {
    c;      // A
    c['a']; // number;
}

if ('d' in c) {
    c; // never
}

if (a in c) {
    c;    // A
    c[a]; // number;
}

if (d in c) {
    c; // never
}


//// [controlFlowInOperator.js]
var a = 'a';
var b = 'b';
var d = 'd';
if ('a' in c) {
    c; // A
    c['a']; // number;
}
if ('d' in c) {
    c; // never
}
if (a in c) {
    c; // A
    c[a]; // number;
}
if (d in c) {
    c; // never
}
