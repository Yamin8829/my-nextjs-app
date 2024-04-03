import path from "path";
import fs from "fs/promises";

export async function readImageFiles() {
  const directoryPath = path.join(process.cwd(), "public/images/fotbarSMA");
  try {
    const dirEntries = await fs.readdir(directoryPath);
    const imageFiles = dirEntries.filter(
      (entry) =>
        entry.endsWith(".jpg") ||
        entry.endsWith(".jpeg") ||
        entry.endsWith(".png")
    );
    return imageFiles.map((fileName) => (
      <div className="my-2" key={fileName}>
        <figure>
          <img src={`/images/fotbarSMA/${fileName}`} alt={fileName} />
        </figure>
      </div>
    ));
  } catch (error) {
    console.error("Error reading image files:", error);
    return [];
  }
}
function ImageGallery() {
  const imageFiles = readImageFiles();

  return (
    <>
      <div className="lg:columns-4 xs:columns-2">{imageFiles}</div>
    </>
  );
}

export default ImageGallery;
