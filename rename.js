const fs = require("fs");
const path = require("path");

// The directory containing the images
const directoryPath = "./public/videos/sequance_pink";

// The new file name pattern
const newFileNamePattern = "pink_";

// Read the contents of the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log("Error reading directory:", err);
    return;
  }

  // Sort the files by name
  files.sort();

  // Loop through the files and rename them
  for (let i = 0; i < files.length; i++) {
    const oldFilePath = path.join(directoryPath, files[i]);
    const newFilePath = path.join(
      directoryPath,
      newFileNamePattern + i + path.extname(files[i])
    );
    fs.rename(oldFilePath, newFilePath, (err) => {
      if (err) {
        console.log(`Error renaming ${oldFilePath} to ${newFilePath}:`, err);
        return;
      }
      console.log(`Renamed ${oldFilePath} to ${newFilePath}`);
    });
  }
});
