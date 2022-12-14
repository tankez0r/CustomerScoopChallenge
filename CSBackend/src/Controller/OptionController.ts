import { Request, Response } from "express";
import { Option } from "../modelAndSchema/Options";

export function getAllOptions(_: Request, res: Response): void {
  Option.find({}).then((result) => {
    res.send(result).status(202);
  });
}
