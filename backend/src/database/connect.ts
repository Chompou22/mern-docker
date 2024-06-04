import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

function connect() {
  mongoose
    .connect(process.env.DB_URL as any)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((err) => {
      console.log("database connection failed. exiting now...");
      console.error(err);
      process.exit(1);
    });
}

export default connect;
