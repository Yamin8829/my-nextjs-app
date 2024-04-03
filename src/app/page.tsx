import Image from "next/image";
import ImageGallery from "@/app/album/readImageFiles";
import ParallaxMirror from "@/components/parallaxMirror";

export default async function Page() {
  return (
    <>
      <ParallaxMirror />
      <div></div>
    </>
  );
}
