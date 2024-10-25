/**
 * 
 * Manage fetching Profile Pictures from GitHub!
 * 
**/

// Get modules
const axios = require('axios');
const sharp = require('sharp');

export async function downloadAndResizeGitHubImage(githubUsername, outputPath, width, height) {
  try {
    // Fetch the profile picture
    const response = await axios.get(`https://github.com/${githubUsername}.png`, { responseType: 'arraybuffer' });

    // Resize the image using sharp
    await sharp(response.data)
      .resize(width, height)
      .toFile(outputPath);

    console.log('Profile picture downloaded and resized successfully!');
  } catch (error) {
    console.error('Error downloading or resizing image:', error);
  }
}

// Example usage:
// downloadAndResize('your-github-username', 'resized_profile.jpg', 200, 200);

module.exports = { downloadAndResizeGitHubImage };
