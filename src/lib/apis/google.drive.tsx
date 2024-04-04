// // pages/api/google-drive-images.ts

// import { NextApiRequest, NextApiResponse } from "next";
// import { google, drive_v3 } from "googleapis";
// import axios from "axios";

// const drive = google.drive({
//   version: "v3",
//   auth: "AIzaSyCLk4oK1oHRoccIifESp3XFQpsHvHGAQgE",
// });

// const folderId = "1ZMtWX9kGEVFhA91d-TUjgv-eC3J3Jh7l";

// const getImageUrls = async () => {
//   try {
//     const response = await drive.files.list({
//       q: `'${folderId}' in parents`,
//     });

//     const files: drive_v3.Schema$File[] | undefined = response.data.files;

//     if (files) {
//       const imageUrls = files.map((file) => {
//         return `https://drive.google.com/uc?export=download&id=${file.id}`;
//       });

//       return imageUrls;
//     } else {
//       console.error("Files list is undefined");
//       return [];
//     }
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const imageUrls = await getImageUrls();
//   res.status(200).json(imageUrls);
// };
// // import React from "react";
// // import Image from "next/image";

// // interface ImgDriveProps {
// //   imageUrls: string[] | undefined;
// // }

// // const ImgDrive: React.FC<ImgDriveProps> = ({ imageUrls }) => {
// //   if (!imageUrls) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <h1>Image Gallery</h1>
// //       {imageUrls.map((url, index) => (
// //         <div key={index}>
// //           <Image
// //             src={url}
// //             alt={`Image ${index + 1}`}
// //             width={300}
// //             height={200}
// //           />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ImgDrive;
