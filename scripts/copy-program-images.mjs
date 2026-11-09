import fs from "fs";
import path from "path";

const dest = path.resolve("public/images/programs-page");
fs.mkdirSync(dest, { recursive: true });

const assets =
  "C:/Users/rohan/.cursor/projects/c-Projects-CZ/assets";

const map = [
  ["programs-hero-boy.jpg", "hero-boy.jpg"],
  ["program-junior-girl.jpg", "junior.jpg"],
  ["program-learner-boy.jpg", "learner.jpg"],
  ["program-explorer-girl.jpg", "explorer.jpg"],
  ["program-creator-boy.jpg", "creator.jpg"],
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
