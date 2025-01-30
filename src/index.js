import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();

app.listen(3004)
console.log('Puerto', 3004);