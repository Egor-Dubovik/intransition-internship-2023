import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = path.resolve(__dirname, "files");
const fileNames = fs.readdirSync(folderPath);
const hashes = [];

for (const fileName of fileNames) {
  const filePath = folderPath + "/" + fileName;
  const fileData = fs.readFileSync(filePath);
  const hash = crypto.createHash("sha3-256").update(fileData).digest("hex");
  hashes.push(hash);
}

hashes.sort();
const concatenatedHashes = hashes.join("");
const result = concatenatedHashes + "egorka54896@gmail.com";
const finalHash = crypto.createHash("sha3-256").update(result).digest("hex");
console.log(finalHash);
