const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then((con) => {
        console.log("DB Connection successful!");
    });

const app = require("./app");

const port = process.env.PORT || 3000; // if PORT not defined, 3000 is used
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
