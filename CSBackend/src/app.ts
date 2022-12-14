import express from "express";
import { getAllOptions } from "./Controller/OptionController";
import { welcome } from "./utils/stringsHTMLandCSS";
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send(welcome(req)).status(202);
});

app.get("/options", getAllOptions);

export default app;
