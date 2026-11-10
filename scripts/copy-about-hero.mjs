import { copyFileSync, mkdirSync, existsSync, statSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src =
  "C:/Users/rohan/.cursor/projects/c-Projects-CZ/assets/image-290cb0a5-a28a-4060-b2d0-fa6b4a53b021.png";
const dest = join(root, "public/images/about/hero-duo.png");

mkdirSync(dirname(dest), { recursive: true });
copyFileSync(src, dest);
console.log("ok", dest, statSync(dest).size);
