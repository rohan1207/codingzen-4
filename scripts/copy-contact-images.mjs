import fs from "fs";
import path from "path";

const dest = path.resolve("public/images/contact");
fs.mkdirSync(dest, { recursive: true });
const assets = "C:/Users/rohan/.cursor/projects/c-Projects-CZ/assets";
const map = [
  ["contact-hero-boy.jpg", "hero-boy.jpg"],
  ["contact-map.jpg", "map.jpg"],
];
for (const [s, d] of map) {
  fs.copyFileSync(path.join(assets, s), path.join(dest, d));
  console.log("copied", d);
}
console.log(fs.readdirSync(dest));
