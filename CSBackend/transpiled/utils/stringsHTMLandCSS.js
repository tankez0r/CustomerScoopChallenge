"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = void 0;
const welcome = (req) => {
    return (`<style>
    code {
      font-family: Consolas,"courier new";
      color: green;
      background-color: #f1f1f1;
      padding: 2px 40px;
      font-size: 90%;
      text-align: left;
    }
    </style>` +
        "<h1>Bienvenidos a la API del Challenge de Customer Scoope </h1>" +
        `<code style={}>
        <a href="http://${req.headers.host}/options" target="_blank">/options</a> Para obtener todos los datos
        </code> `);
};
exports.welcome = welcome;
