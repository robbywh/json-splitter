// Javascript imports
// const split = require('split-json');
// const path = require('path');

// Typescript imports
import split from '@codetailor/split-json';
import * as path from 'path';

// Sample data, replace with your own
const inputFilePath = path.join('data', 'input', 'large-data.json'); // Path to the large JSON file
const outputFolder = path.join('data', 'output'); // Path to the folder for the part files
const outputPrefix = 'part-'; // Prefix for the part filenames
const maxItemsPerFile = 2; // (optional) Maximum number of items in each part file (default: 10000)
const minPartNumberLength = 3; // (optional) Minimum length of the part file number (ex: 4 -> 0001) (default: 4)

// Then/catch version
split(inputFilePath, outputFolder, outputPrefix, maxItemsPerFile, minPartNumberLength)
  .then(() => {
    // Insert your code here, part files have been created
  })
  .catch(console.error);

// Async/await version
(async () => {
  try {
    await split(inputFilePath, outputFolder, outputPrefix, maxItemsPerFile, minPartNumberLength);

    // Insert your code here, part files have been created
  }

  catch (error) {
    console.error(error);
  }
})();