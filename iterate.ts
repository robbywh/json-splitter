import { readdir, readFile } from 'fs';
import * as path from 'path';

const dirName = path.join(__dirname, 'data/output');
readdir(dirName, (err, fileList) => {
  if (err) {
    console.error(err);
    return;
  }

  for (let i = 0; i < fileList.length; i++) {
    const filename = fileList[i];
    if (!filename.toLowerCase().endsWith('.json')) continue;

    const fullFilename = path.join(dirName, filename);
    readFile(fullFilename, { encoding: 'utf-8' }, (err, data) => {
      try {
        const fileContent = JSON.parse(data);
        console.log(fileContent);
      } catch (err) {
        console.error(`error while parsing file: ${fullFilename}`);
      }
    });
  }
});