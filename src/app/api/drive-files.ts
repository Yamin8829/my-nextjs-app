// import type { NextApiRequest, NextApiResponse } from "next";
// import { google } from "googleapis";

// export type DriveFile = {
//   kind: string;
//   id: string;
//   name: string;
//   mimeType: "image/jpeg";
// };

// export type Data = {
//   files: DriveFile[];
// };

// const CLIENT_ID =
//   "522559441441-abp60hcpnqe3t7962vbjetfgt1n3r4k.apps.googleusercontent.com";
// const CLIENT_SECRET = "GOCSPX-YNyOYJbxBPUBK60IZYjX5agcvfe";
// const REDIRECT_URI = "https://developers.google.com/oauthplayground";

// export default async function handler(
//   _req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   try {
//     const oauth2Client = new google.auth.OAuth2(
//       CLIENT_ID,
//       CLIENT_SECRET,
//       REDIRECT_URI
//     );

//     oauth2Client.setCredentials({
//       refresh_token:
//         "1//04rY5fFH0FlFlCgYIARAAGAQSNwF-L9Irs698cHcblPX7eZeDTPATx2nij6oH-r1Cutp8ceNgxNkyNMupvHHtUzkYxCJaEE4PWc",
//     });

//     const drive = google.drive({
//       version: "v3",
//       auth: oauth2Client,
//     });

//     const response = await drive.files.list();

//     res.status(200).json({ files: response.data.files as DriveFile[] });
//   } catch (error) {
//     console.error("Error fetching Google Drive files:");
//   }
// }
