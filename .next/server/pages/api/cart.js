"use strict";
(() => {
var exports = {};
exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 2311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
let cart = [];
function handler(req, res) {
    if (req.method === "GET") {
        return res.status(200).json(cart);
    } else if (req.method === "PUT") {
        cart = req.body;
        return res.status(200).json(cart);
    } else {
        return res.sendStatus(404);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2311));
module.exports = __webpack_exports__;

})();