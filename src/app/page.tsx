import Image from "next/image";
import ImageGallery from "./components/imageGallery";
import ResponsiveAppBar from "./components/header";
import ParallaxMirror from "./components/parallaxMirror";

export default function Page() {
  return (
    <>
      <ParallaxMirror />
      <ResponsiveAppBar />
      <ImageGallery />
    </>
  );
}
