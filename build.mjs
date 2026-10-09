import { mkdir, copyFile } from 'node:fs/promises';
await mkdir(new URL('./dist/', import.meta.url), { recursive: true });
for (const name of ['index.html', 'styles.css', 'app.js']) {
  await copyFile(new URL(name, import.meta.url), new URL(`dist/${name}`, import.meta.url));
}
console.log('Web lista en dist.');
