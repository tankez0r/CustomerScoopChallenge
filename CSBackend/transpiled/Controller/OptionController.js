"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOptions = void 0;
const Options_1 = require("../modelAndSchema/Options");
function getAllOptions(_, res) {
    Options_1.Option.find({}).then((result) => {
        res.send(result).status(202);
    });
}
exports.getAllOptions = getAllOptions;
