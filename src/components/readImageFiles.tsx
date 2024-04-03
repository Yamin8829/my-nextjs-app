import path from "path";
import fs from "fs/promises";
export default async function readImageFiles() {
  const directoryPath = path.join(process.cwd(), "public/images");
  try {
    const dirEntries = await fs.readdir(directoryPath);
    const imageFiles = dirEntries.filter(
      (entry) =>
        entry.endsWith(".jpg") ||
        entry.endsWith(".jpeg") ||
        entry.endsWith(".png")
    );
    return imageFiles;
  } catch (error) {
    console.error("Error reading image files:", error);
    return [];
  }
}
