import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import path from 'path';

export async function POST(request: Request) {
  const body = await request.json(); // Récupère les infos du formulaire
  const jsonData = JSON.stringify(body);
  const scriptPath = path.join(process.cwd(), 'sentinel.py');

  // Cette ligne ordonne au serveur de lancer le script Python avec les données
  exec(`python3 ${scriptPath} '${jsonData.replace(/'/g, "'\\''")}'`);

  return NextResponse.json({ message: "Transmis à Python" });
}
