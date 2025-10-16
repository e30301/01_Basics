import { readdir, readFile, stat } from 'fs/promises';
import path from 'path';

async function readAllFiles(dir = __dirname) {
    const entries = await readdir(dir);
    const files = [];

    for (const name of entries) {
        const fullPath = path.join(dir, name);
        const info = await stat(fullPath);
        if (info.isFile()) {
            const content = await readFile(fullPath, 'utf8');
            files.push({ name, content });
        }
    }

    return files;
}

const files = await readAllFiles();
for (const f of files) {
    console.log('── ' + f.name + ' ──');
    console.log(f.content);
}
