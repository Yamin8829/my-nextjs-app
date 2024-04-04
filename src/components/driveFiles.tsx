// "use client";
// import { useEffect, useState } from "react";
// import type { NextPage } from "next";
// import axios from "axios";
// import { DriveFile } from "../api/drive-files";
// import Image from "next/image";

// const DriveFiles: NextPage = () => {
//   const [files, setFiles] = useState<DriveFile[]>();

//   useEffect(() => {
//     axios
//       .get("/api/drive-files")
//       .then((res) => {
//         setFiles(res.data.files);
//       })
//       .catch((err) => {
//         console.log("error gadak");
//       });
//   }, []);

//   useEffect(() => {
//     console.log(files);
//   }, [files]);

//   return (
//     <>
//       <h1>Google Drive Files</h1>
//       {files &&
//         files.map((file, i) => {
//           return (
//             <div key={i}>
//               <p>{file.name}</p>
//               <Image
//                 width={200}
//                 height={300}
//                 src={`https://drive.google.com/uc?export=view&id=${file.id}`}
//                 alt={file.name}
//               />
//             </div>
//           );
//         })}
//     </>
//   );
// };

// export default DriveFiles;
