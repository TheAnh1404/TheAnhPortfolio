import { copyFile, mkdir, readdir } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";

const source = resolve("Infor");
const destination = resolve("dist", "Infor");
const imageExtensions = new Set([".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);

const copyImages = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });

  await Promise.all(entries.map(async (entry) => {
    const sourcePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      await copyImages(sourcePath);
      return;
    }

    if (!imageExtensions.has(extname(entry.name).toLowerCase())) return;

    const destinationPath = join(destination, relative(source, sourcePath));
    await mkdir(dirname(destinationPath), { recursive: true });
    await copyFile(sourcePath, destinationPath);
  }));
};

await mkdir(destination, { recursive: true });
await copyImages(source);
