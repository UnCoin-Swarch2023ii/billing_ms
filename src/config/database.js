import mongoose from "mongoose";

class Database {
  constructor() {
    this.uri = process.env.MONGO_URI || "";
  }

  async connect() {
    try {
      await mongoose.connect(this.uri);
      console.log("Db connected!");
    } catch (err) {
      console.log(err);
      process.exit(0);
    }
  }
}

export default Database;
