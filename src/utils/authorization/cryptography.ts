import { createHash } from "crypto";

export const generateSHA256Hash = (password: string): string => {
    return createHash("sha256").update(password).digest("hex");
};

export const generateSHA512Hash = (password: string): string => {
    return createHash("sha512").update(password).digest("hex");
};

export const generateMD5Hash = (password: string): string => {
    return createHash("md5").update(password).digest("hex");
};
