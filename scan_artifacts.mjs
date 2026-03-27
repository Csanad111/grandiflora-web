import sharp from 'sharp';

async function scanArtifacts() {
  const inputPath = '/Users/kerteszcsanad/.gemini/antigravity/brain/c506aaaa-d1c4-4107-ab1f-5b9be8425fae/media__1773948719461.png';
  const outputPath = 'right_edge_scan.png';
  
  try {
    const metadata = await sharp(inputPath).metadata();
    // Extract a strip of the right edge to see all artifacts
    await sharp(inputPath)
      .extract({ left: metadata.width - 200, top: 0, width: 200, height: metadata.height })
      .toFile(outputPath);
    console.log("✅ Right edge scan saved to " + outputPath);
  } catch (error) {
    console.error(error);
  }
}

scanArtifacts();
