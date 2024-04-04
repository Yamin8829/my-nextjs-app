// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import axios from "axios";

// const ImgDrive: React.FC = () => {
//   const [imageUrls, setImageUrls] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchImageUrls = async () => {
//       try {
//         const response = await axios.get(
//           "/google-img?folderId=1ZMtWX9kGEVFhA91d-TUjgv-eC3J3Jh7l"
//         );
//         setImageUrls(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchImageUrls();
//   }, []);

//   return (
//     <div>
//       <h1>Image Drive Gallery</h1>
//       {imageUrls.map((url, index) => (
//         <div key={index}>
//           <Image
//             src={url}
//             alt={`Image ${index + 1}`}
//             width={300}
//             height={200}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImgDrive;
