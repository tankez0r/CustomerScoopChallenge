import { Schema, model } from "mongoose";

interface IOptions {
  name: string;
  churnRate: string;
  leadConvertion: string;
}

const schema = new Schema<IOptions>({
  churnRate: { type: String, required: true },
  leadConvertion: { type: String, required: true },
  name: { type: String, required: true },
});

export const Option = model("Option", schema,'options');


