const fs = require("node:fs/promises");
const posts = require("../store/posts.json");

async function readData() {
  return posts;
}

async function writeData(data) {
  await fs.writeFile(posts, JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;
