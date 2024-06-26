import { NextRequest, NextResponse } from "next/server";
import { readdir, writeFile } from "fs/promises"; // for file system operations
import path from "path";
import fs from "fs/promises";
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");
export async function GET(request: NextRequest) {
  // const dataFile = await readImageFiles();
  const directoryPath = path.join(
    process.cwd(),
    "public/images/fotbarSMA/2023_2024/Kls_11_C"
  );

  const dirEntries = await fs.readdir(directoryPath);
  const imageFiles = dirEntries.filter(
    (entry) =>
      entry.endsWith(".jpg") ||
      entry.endsWith(".jpeg") ||
      entry.endsWith(".png")
  );
  const imageMetadata = await Promise.all(
    imageFiles.map(async (file) => {
      const filePath = path.join(directoryPath, file);
      const metadata = await sharp(filePath).metadata();
      const id = uuidv4();
      return {
        id: id,
        filename: file,
        metadata: metadata,
      };
    })
  );
  const dataFile = imageMetadata;

  const data = dataFile.map((image) => {
    return {
      key: image.filename,
      url: `/images/fotbarSMA/2023_2024/Kls_11_C/${image.filename}`,
      alt: image.filename,
      album_id: "2023_2024/Kls_11_C",
      title: image.filename,
      id: image.id,
      filename: image.filename,
      width: image.metadata.width,
      height: image.metadata.height,
    };
  });
  const data2 = data.flat();
  const jsonData = JSON.stringify(data2, null, 2);

  // Define the file path where you want to save the file
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "2023_2024",
    "11_C.json"
  );
  // const filePath = path.join(process.cwd(), "public", "data", "imageData.json");

  // Write data to the file
  await writeFile(filePath, jsonData);

  return NextResponse.json({
    status: 200,
    message: "Hello World Kelas 11 C tai",
    data: data,
  });
}
