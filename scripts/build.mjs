import {readFile, writeFile, mkdir, copyFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
const manifest = JSON.parse(await readFile(new URL('./manifest.json', import.meta.url)));
await mkdir('dist', {recursive: true});
for (const [output, sources] of Object.entries(manifest)) {
  const chunks = await Promise.all(sources.map(async path => `// Source: ${path}\n${await readFile(path, 'utf8')}`));
  await writeFile(`dist/${output}`, chunks.join('\n'));
  execFileSync(process.execPath, ['--check', `dist/${output}`]);
}
for (const file of ['styles.css', 'experience.css']) await copyFile(`src/styles/${file}`, `dist/${file}`);
await copyFile('public/index.html', 'dist/index.html');
console.log('Built Bimi: source features → dist (JavaScript syntax checked).');
