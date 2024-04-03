import Image from "next/image";
import Link from "next/link";

export default function ImageList({ width, height, id, filename }: any) {
  return (
    <div id="imageList">
      <Link href={`/album/${id}`}>
        <figure>
          <Image
            src={`/images/fotbarSMA/${filename}`}
            alt={`${filename}`}
            width={width}
            height={height}
          />
        </figure>
      </Link>
    </div>
  );
}
