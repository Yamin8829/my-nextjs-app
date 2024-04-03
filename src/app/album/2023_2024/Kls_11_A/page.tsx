import ImagePaging from "@/components/ImagePaging";
import Link from "next/link";

export default async function Page() {
  const res11A = await fetch("http://localhost:3000/data/2023_2024/11_A.json", {
    cache: "no-store",
  });
  const imageLists11A = await res11A.json();
  const imageList10A = await imageLists11A.slice(0, Infinity);
  const album_id10A = await imageList10A[0].album_id;
  return (
    <div>
      <h1>Kelas 11 A</h1>
      <div className="card bg-green-500   card-compact md:w-100 xs:w-25   w-86 xs:text-size-sm h-100 glass">
        <div className="card-body">
          <ImagePaging api={imageList10A} />
          <h2 className="mt-4 card-title">Album Kelas 11 A - 2023/2024</h2>
          <p>Album Edisi Ramadan 1445 H</p>
          <div className="card-actions justify-end mt-[-30px]">
            <Link href={`/album`}>
              <button className="btn xs:btn-sm btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="lg:columns-4 xs:columns-2">
        <ImageListOnly api={imageList10A} />
      </div> */}
    </div>
  );
}
