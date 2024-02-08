# json-splitter


## How to install
```
npm install
```

## How to user
1. put your large JSON file into data/input folder
2. set the the count of items for each of file using :
```
const maxItemsPerFile = 2;
```
For example if you have 100 array of objects, it will split into 50 files, and have 2 items for each of file
3. Split the large JSON file using this command :
```
npx ts-node split.ts 
```
4. Check in the data/output folder for the result