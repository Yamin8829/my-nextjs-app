import path from "path";
import fs from "fs/promises";
import ImageList from "@/components/ImageList";
import ImageListOnly from "@/components/ImageList/imageOnly";
import MyImageGallery from "@/components/Utilities/ImageMedia";
import Link from "next/link";
import { NextResponse } from "next/server";
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");

export async function readImageFiles(request: NextResponse) {
  //fetch data image in local
  const directoryPath = path.join(process.cwd(), "public/images/fotbarSMA");
  const dirEntries = await fs.readdir(directoryPath);
  const imageFiles = dirEntries.filter(
    (entry) =>
      entry.endsWith(".jpg") ||
      entry.endsWith(".jpeg") ||
      entry.endsWith(".png")
  );
  const limitedImageFiles = imageFiles.slice(0, Infinity);
  const imageMetadata = await Promise.all(
    limitedImageFiles.map(async (file) => {
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
  return imageMetadata;
}

export async function GetData() {
  const res = await fetch("https://myschoolsite.vercel.app/api/image", {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function readLimitedImages() {
  const data = await GetData();
  return <></>;
}
export default async function readLimitedImage() {
  //fetch data image in local
  const directoryPath = path.join(process.cwd(), "public/images/fotbarSMA");

  const dirEntries = await fs.readdir(directoryPath);
  const imageFiles = dirEntries.filter(
    (entry) =>
      entry.endsWith(".jpg") ||
      entry.endsWith(".jpeg") ||
      entry.endsWith(".png")
  );
  const limitedImageFiles = imageFiles.slice(0, 9);
  const imageMetadata = await Promise.all(
    limitedImageFiles.map(async (file) => {
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
  //   return imageMetadata;
  return (
    <>
      {imageMetadata.map((image) => {
        return (
          <>
            <div id={image.id} key={image.filename}>
              <MyImageGallery
                key={image.filename}
                filename={image.filename}
                width={image.metadata.width}
                height={image.metadata.height}
                id={image.id}
              />
            </div>
          </>
        );
      })}
    </>
  );
}
