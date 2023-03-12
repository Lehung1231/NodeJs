
import express from "express"
import router from "./routes/product.js";

const app = express();
const port = 8000;

app.use(express.json());

app.use(router);


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// Step 1: tạo file db.json
// Step 2: cài đặt json-server.
// Step 3: cài đặt concurrently
// Step 4: config lại package.json
// Step 5: install axios
// Step 6: Code getlist, getdetails