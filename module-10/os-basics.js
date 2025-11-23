const os = require("os");

console.log('System info \n');
console.log("_".repeat(50));

console.log("platform details: ");

console.log("platform: ", os.platform);
console.log("Architecture: ", os.arch());
console.log("Os release: ", os.release());
console.log("Os hostname: ", os.hostname());

console.log("\nCPU info: ");

const cpus = os.cpus();
console.log("CPU model", cpus[0].model);
console.log("Number of cores: ", cpus.length);
console.log("CPU Speed: ", cpus[0].speed);

const totalMem = os.totalmem();
const freeMem = os.freemem();
console.log("Total memory:  ", (totalMem/1024/1024/1024).toFixed(2), "GB");
console.log("Free memory: ", (freeMem/1024/1024/1024).toFixed(2), "GB");


console.log("_".repeat(30));
console.log("Uptime: ", os.uptime());



