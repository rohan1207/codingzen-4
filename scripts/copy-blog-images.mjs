import fs from "fs";
import path from "path";

const dest = path.resolve("public/images/blog");
fs.mkdirSync(dest, { recursive: true });

const assets = "C:/Users/rohan/.cursor/projects/c-Projects-CZ/assets";
const map = [
  ["blog-hero-girl.jpg", "hero-girl.jpg"],
  ["blog-featured-rocket.jpg", "featured-rocket.jpg"],
  ["blog-newsletter-envelope.jpg", "newsletter-envelope.jpg"],
];

for (const [srcName, destName] of map) {
  const from = path.join(assets, srcName);
  const to = path.join(dest, destName);
  if (!fs.existsSync(from)) {
    console.warn("missing", from);
    continue;
  }
  fs.copyFileSync(from, to);
  console.log("copied", destName);
}

console.log("done", fs.readdirSync(dest));
