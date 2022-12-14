"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    churnRate: { type: String, required: true },
    leadConvertion: { type: String, required: true },
    name: { type: String, required: true },
});
exports.Option = (0, mongoose_1.model)("Option", schema, 'options');
