const crypto =require("crypto");

console.log("\n MD5 Hash: ");
const md5Hash = crypto.createHash("md5").update("Password123").digest("hex");
console.log("input: Password123");
console.log("MD5 HasedPassword: ", md5Hash);


