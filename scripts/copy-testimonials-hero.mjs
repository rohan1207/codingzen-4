import { copyFileSync, mkdirSync, statSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src =
  "C:/Users/rohan/.cursor/projects/c-Projects-CZ/assets/image-59401361-6d04-498a-b6ff-d2ba7c4d89da.png";
const dest = join(root, "public/images/testimonials/hero-family.png");

mkdirSync(dirname(dest), { recursive: true });
copyFileSync(src, dest);
console.log("ok", dest, statSync(dest).size);
