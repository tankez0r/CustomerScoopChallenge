import { Request } from "express";

export const welcome = (req: Request) => {
  return (
    `<style>
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
        </code> `
  );
};
