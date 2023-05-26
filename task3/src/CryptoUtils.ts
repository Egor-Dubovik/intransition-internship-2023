import crypto from "crypto";

class CryptoUtils {
  static generateRandomKey(length: number): string {
    // return crypto.randomBytes(32).toString("hex");
    const buffer = crypto.randomBytes(length / 8);
    return buffer.toString("hex");
  }

  static computeHMAC(message: string, key: string): string {
    const hmac = crypto.createHmac("sha256", key);
    hmac.update(message);
    return hmac.digest("hex");
  }
}

export default CryptoUtils;
