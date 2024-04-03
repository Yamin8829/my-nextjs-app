import path from "path";
import fs from "fs/promises";
import ImageList from "@/components/ImageList";
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");

export default async function readImageFiles() {
  //fetch data image in local
  const directoryPath = path.join(
    process.cwd(),
    "public/images/fotbarSMA/2023_2024/Kls_10_A"
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

  // console.log(imageMetadata);
  return (
    <div className="grid md:grid-cols-3 xs:grid-cols-2 gap-2">
      {imageMetadata.map((image) => {
        return (
          <div className="my-2" key={image.filename}>
            <ImageList
              key={image.filename}
              filename={image.filename}
              width={image.metadata.width}
              height={image.metadata.height}
              id={image.id}
            />
          </div>
        );
      })}
    </div>
  );
}
