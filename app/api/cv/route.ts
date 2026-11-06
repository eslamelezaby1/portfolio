import { readFile } from 'node:fs/promises';
import path from 'node:path';
export const runtime = 'nodejs';
export async function GET(){const file=await readFile(path.join(process.cwd(),'public','Eslam-Elezaby-CV.pdf'));return new Response(file,{headers:{'Content-Type':'application/pdf','Content-Disposition':'attachment; filename="Eslam-Elezaby-CV.pdf"','Cache-Control':'public, max-age=3600'}})}
