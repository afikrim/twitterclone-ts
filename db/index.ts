import mongoose from "mongoose";
import { yellow, red, green } from "chalk";

import { Error } from "mongoose";

class Db {
  private DB_URL: string;

  constructor(DB_URL: string) {
    this.DB_URL = DB_URL;
  }

  public connect() {
    mongoose.connect(this.DB_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
      this.mongooseLog(
        "green",
        "Connection",
        `Connection to ${this.DB_URL} success`
      );
    });
    mongoose.connection.on("error", (err) => {
      this.mongooseLog("red", err.name, err.message);
    });
    mongoose.connection.on("disconnected", () => {
      this.mongooseLog(
        "yellow",
        "Connection",
        `Connection to ${this.DB_URL} closed`
      );
    });
    process.on("SIGINT", () => {
      this.mongooseLog(
        "yellow",
        "Connection",
        "Connection closed due application shutdown"
      );

      mongoose.connection.close();
      process.exit(0);
    });
  }

  private mongooseLog(color: string, name: string, message: string) {
    switch (color) {
      case "red":
        red(`[Mongoose] ${name}: ${message}`);
        break;
      case "yellow":
        yellow(`[Mongoose] ${name}: ${message}`);
        break;
      case "green":
        green(`[Mongoose] ${name}: ${message}`);
    }
  }
}

export default Db;
