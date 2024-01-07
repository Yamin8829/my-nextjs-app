'use client' 
import { useState , useEffect} from "react"; 
import readImagesFiles from './readImageFiles';

export default function loadImages(){
const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    // Fetch image files and update the state
    async function fetchImageFiles() {
      try {
        const files = await readImagesFiles;
        setImageFiles(files);
      } catch (error) {
        console.error('Error fetching image files:', error);
      }
    }

    fetchImageFiles();
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <ul>
        {imageFiles.map((fileName) => (
          <li key={fileName}>
            <img src={`/images/${fileName}`} alt={fileName} />
          </li>
        ))}
      </ul>
    </div>
  );
        }