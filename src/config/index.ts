import dotenv from "dotenv";
import path from "path";

//Need to define path as the dotenv takes value from .env
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
};
