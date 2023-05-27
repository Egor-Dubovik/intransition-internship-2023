import crypto from "crypto";

class CryptoUtils {
  static generateRandomKey(): string {
    return crypto.randomBytes(32).toString("hex");
  }

  static calculateHMAC(message: string, key: string): string {
    const hmac = crypto.createHmac("sha256", key);
    hmac.update(message);
    return hmac.digest("hex");
  }
}

export default CryptoUtils;
