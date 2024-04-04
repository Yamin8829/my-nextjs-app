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
