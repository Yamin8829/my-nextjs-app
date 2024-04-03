import Image from "next/image";

export default function ImageListOnly({ api }: any) {
  return (
    <div>
      {api.map((item: any) => (
        <div key={item.id}>
          <Image src={item.url} alt={item.alt} width={500} height={500} />
        </div>
      ))}
    </div>
  );
}
