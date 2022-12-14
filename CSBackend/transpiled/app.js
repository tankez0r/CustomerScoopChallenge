"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OptionController_1 = require("./Controller/OptionController");
const stringsHTMLandCSS_1 = require("./utils/stringsHTMLandCSS");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send((0, stringsHTMLandCSS_1.welcome)(req)).status(202);
});
app.get("/options", OptionController_1.getAllOptions);
exports.default = app;
