import { readdir } from "fs/promises" 
import {join} from "path";

export default async function imageFiles() {
    const files = await readdir(join(process.cwd(), "/public/images/")) 
    const file = files.filter((entry)=>entry.endsWith('.jpg')||entry.endsWith('.png'))
    return file
  }