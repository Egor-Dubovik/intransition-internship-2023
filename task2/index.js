import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1) SHA3-256 for wvry file in folder
const folderPath = path.resolve(__dirname, "files");
const fileNames = fs.readdirSync(folderPath);

const hashes = [];
for (const fileName of fileNames) {
  const filePath = folderPath + "/" + fileName;
  const fileData = fs.readFileSync(filePath);
  const hash = crypto.createHash("sha3-256").update(fileData).digest("hex");
  hashes.push(hash);
}

// 2) sort hashes in ascending order
hashes.sort();

// 3) pasting hashes without a separator
const concatenatedHashes = hashes.join("");

// 4) add e-mail
const result = concatenatedHashes + "egorka54896@gmail.com";

// 6) calculating SHA3-256 from received string
const finalHash = crypto.createHash("sha3-256").update(result).digest("hex");

// 7) output
console.log(finalHash);
