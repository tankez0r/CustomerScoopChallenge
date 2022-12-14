import app from "./app";
import mongoose from "mongoose";

const startApp = async (): Promise<void> => {
  const PORT = process.env.PORT || 3040;
  mongoose.set("strictQuery", true);
  await mongoose
    .connect("mongodb://127.0.0.1:27017/customerScoope")
    .then(() => {
      console.log("conectado a la base de datos customerScoope");
    })
    .catch((e) => {
      console.log(e);
    });
  app.listen(PORT, () => {
    console.log(
      "El servidor esta listo para pedir peticiones en el puerto: " + PORT
    );
  });
};
startApp();
