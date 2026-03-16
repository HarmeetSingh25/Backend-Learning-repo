import app from "./src/app.js";
import ConnectToDB  from "./src/db/db.js";
import { config } from "dotenv";
config()

ConnectToDB();

app.listen(3000, () => {
  console.log("Server is running ");
});
