import ImageCarousel from "@/components/Carousel/myCaro";
import Link from "next/link";

export default async function Page() {
  const res10A = await fetch(
    "https://myschoolsite.vercel.app/data/2023_2024/10_A.json",
    {
      cache: "no-store",
    }
  );
  const res10B = await fetch(
    "https://myschoolsite.vercel.app/data/2023_2024/10_B.json",
    {
      cache: "no-store",
    }
  );
  const res10C = await fetch(
    "https://myschoolsite.vercel.app/data/2023_2024/10_C.json",
    {
      cache: "no-store",
    }
  );
  const imageLists10A = await res10A.json();
  const imageList10A = await imageLists10A.slice(0, 4);
  const album_id10A = await imageList10A[0].album_id;

  const imageLists10B = await res10B.json();
  const imageList10B = await imageLists10B.slice(0, 4);
  const album_id10B = await imageList10B[0].album_id;

  const imageLists10C = await res10C.json();
  const imageList10C = await imageLists10C.slice(0, 4);
  const album_id10C = await imageList10C[0].album_id;

  const res11A = await fetch(
    "https://myschoolsite.vercel.app/data/2023_2024/11_A.json",
    {
      cache: "no-store",
    }
  );
  const res11B = await fetch(
    "https://myschoolsite.vercel.app/data/2023_2024/11_B.json",
    {
      cache: "no-store",
    }
  );
  const res11C = await fetch(
    "https://myschoolsite.vercel.app/data/2023_2024/11_C.json",
    {
      cache: "no-store",
    }
  );
  const imageLists11A = await res11A.json();
  const imageList11A = await imageLists11A.slice(0, 4);
  const album_id11A = await imageList11A[0].album_id;

  const imageLists11B = await res11B.json();
  const imageList11B = await imageLists11B.slice(0, 4);
  const album_id11B = await imageList11B[0].album_id;

  const imageLists11C = await res11C.json();
  const imageList11C = await imageLists11C.slice(0, 4);
  const album_id11C = await imageList11C[0].album_id;
  // console.log(imageList.data);
  return (
    <>
      <div className=" md:pt-6 md:mx-4 pt-4 mx-2">
        <div className="prose prose-sm md:prose-base w-full max-w-4xl flex-grow">
          <h1 className="md:text-3xl xs:text-lg font-semibold text-[#3451a3]">
            Semua Albums
          </h1>
        </div>
        <div className="md:flex flex-wrap ">
          <div className="card m-4 bg-indigo-500  card-compact md:w-65 xs:w-25  lg:w-96 xs:text-size-sm h-96 glass">
            <div className="card-body">
              <ImageCarousel api={imageList10A} />
              <h2 className="mt-4 card-title">Album Kelas 10 A - 2023/2024</h2>
              <p>Album Edisi Ramadan 1445 H</p>
              <div className="card-actions justify-end mt-[-30px]">
                <Link href={`/album/${album_id10A}`}>
                  <button className="btn xs:btn-sm btn-secondary">
                    Learn now!
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card m-4  bg-amber-500 card-compact xs:w-25 lg:w-96 md:w-96 h-96 glass">
            <div className="card-body">
              <ImageCarousel api={imageList10B} />
              <h2 className="mt-5 card-title">Album Kelas 10 B - 2023/2024</h2>
              <p>Album Edisi Ramadan 1445 H</p>
              <div className="card-actions justify-end mt-[-30px]">
                <Link href={`/album/${album_id10B}`}>
                  <button className="btn xs:btn-sm btn-primary">
                    Learn now!
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card m-4 bg-fuchsia-500 card-compact xs:w-25 lg:w-96 md:w-96 h-96 glass">
            <div className="card-body">
              <ImageCarousel api={imageList10C} />
              <h2 className="mt-4 card-title">Album Kelas 10 C - 2023/2024</h2>
              <p>Album Edisi Ramadan 1445 H</p>
              <div className="card-actions justify-end mt-[-30px]">
                <Link href={`/album/${album_id10C}`}>
                  <button className="btn xs:btn-sm btn-neutral bg-fuchsia-800">
                    Learn now!
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card m-4 bg-green-500 card-compact md:w-65 xs:w-25  lg:w-96 xs:text-size-sm h-96 glass">
            <div className="card-body">
              <ImageCarousel api={imageList11A} />
              <h2 className="mt-4 card-title">Album Kelas 11 A - 2023/2024</h2>
              <p>Album Edisi Ramadan 1445 H</p>
              <div className="card-actions justify-end mt-[-30px]">
                <Link href={`/album/${album_id11A}`}>
                  <button className="btn xs:btn-sm btn-primary">
                    Learn now!
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card m-4 bg-orange-500  card-compact xs:w-25 lg:w-96 md:w-96 h-96 glass">
            <div className="card-body">
              <ImageCarousel api={imageList11B} />
              <h2 className="mt-5 card-title">Album Kelas 11 B - 2023/2024</h2>
              <p>Album Edisi Ramadan 1445 H</p>
              <div className="card-actions justify-end mt-[-30px]">
                <Link href={`/album/${album_id11B}`}>
                  <button className="btn xs:btn-sm btn-warning bg-violet-500">
                    Learn now!
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card m-4 bg-yellow-500 card-compact xs:w-25 lg:w-96 md:w-96 h-96 glass">
            <div className="card-body">
              <ImageCarousel api={imageList11C} />
              <h2 className="mt-4 card-title">Album Kelas 11 C - 2023/2024</h2>
              <p>Album Edisi Ramadan 1445 H</p>
              <div className="card-actions justify-end mt-[-30px]">
                <Link href={`/album/${album_id11C}`}>
                  <button className="btn xs:btn-sm bg-lime-500 btn-success">
                    Learn now!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
