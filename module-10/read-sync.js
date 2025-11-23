const fs = require("fs")

console.log("start reading...");

try {
    const data = fs.readFileSync("./data/diary.txt", "utf-8");
    console.log(data);
} catch (err) {
    console.err(err.message);
}



