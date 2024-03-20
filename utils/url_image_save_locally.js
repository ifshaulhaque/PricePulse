import https from 'https';
import fs from 'fs';
import path from 'path';

// Function to download the image
const downloadImage = (url, destination) => {
    https.get(url, response => {
        // Create a writable stream to save the image
        const fileStream = fs.createWriteStream(destination);

        // Pipe the image data to the writable stream
        response.pipe(fileStream);

        // Handle events when the download is complete or if there's an error
        fileStream.on('finish', () => {
            console.log(`Image downloaded successfully to ${destination}`);
        });
        fileStream.on('error', err => {
            console.error(`Error downloading image: ${err}`);
        });
    });
};

// Destination directory where you want to save the image
const destinationDirectory = 'D:/pricepulse/assets/image';

// Ensure that the destination directory exists
if (!fs.existsSync(destinationDirectory)) {
    fs.mkdirSync(destinationDirectory, { recursive: true });
}

export default {
    downloadImage: (imageUrl, filename) => {
        // Destination path where you want to save the image
        const destinationPath = path.join(destinationDirectory, filename+'.png'); // Specify the filename and extension you want
        downloadImage(imageUrl, destinationPath);
    }
}