import http from 'node:http';
import { readFile } from 'node:fs/promises';
const files = { '/': ['index.html','text/html'], '/index.html':['index.html','text/html'], '/styles.css':['styles.css','text/css'], '/app.js':['app.js','text/javascript'] };
const port = Number(process.env.PORT || 4173);
http.createServer(async(req,res)=>{
  const path = new URL(req.url, 'http://localhost').pathname;
  const entry=files[path];
  if(!entry){res.writeHead(404);res.end('No encontrado');return;}
  try {const content=await readFile(new URL(entry[0], import.meta.url));res.writeHead(200,{'Content-Type':`${entry[1]}; charset=utf-8`});res.end(content);}catch{res.writeHead(500);res.end('No se pudo abrir la página');}
}).listen(port,'127.0.0.1',()=>console.log(`Vista previa: http://localhost:${port}`));
