define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.outer = void 0;
    var outer;
    (function (outer) {
        var inner;
        (function (inner) {
            var local = 1;
            inner.a = local;
        })(inner = outer.inner || (outer.inner = {}));
    })(outer || (exports.outer = outer = {}));
});
