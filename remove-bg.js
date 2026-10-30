const sharp = require('sharp');

const inputPath = 'C:/Users/hp/.gemini/antigravity/brain/16d20905-98a6-481a-8600-44125c64bd56/.user_uploaded/media_1792129508712.png';
const outputPath = 'c:/Users/hp/OneDrive/Desktop/KaK/client/public/logo.png';

async function processCleanLogo() {
  const image = sharp(inputPath);
  const { width, height } = await image.metadata();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  const outBuffer = Buffer.alloc(width * height * 4);

  let minX = width, maxX = 0, minY = height, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * info.channels;
      const dstIdx = (y * width + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      // In the background:
      // Red is extremely low: 0 - 3 across the entire image!
      // Green is <= 45 everywhere in the background.
      // Blue is <= 100 in the background gradient.
      // Foregrounds have either:
      // 1. White/chrome text: r > 50, g > 60, b > 90
      // 2. Cyan wireframe & dots: g >= 70, b >= 140, or bright dots (g > 150, b > 200)
      // 3. Faint cyan connector lines: (g > 50 && b > 110 && (g > 1.2 * (b * 0.35)))

      let isForeground = false;
      let alpha = 0;

      // Check for White/Silver/Metallic text (KAK, INSTANT SOLUTIONS, Tagline)
      if (r > 40 || (r > 20 && g > 50 && b > 80)) {
        // Text or metallic highlight
        alpha = Math.min(255, Math.max(r * 2.5, g * 2.2, b * 1.5));
        isForeground = true;
      } 
      // Check for Cyan/Blue AI Brain nodes and lines
      else if (g > 55 && b > 115) {
        // Foreground cyan/blue line or glow
        const cyanStrength = (g - 35) * 2.5 + (b - 80) * 1.5;
        alpha = Math.min(255, Math.max(0, cyanStrength));
        if (alpha > 20) isForeground = true;
      }
      // Bright neon nodes
      else if (b > 160 && g > 70) {
        alpha = 255;
        isForeground = true;
      }

      // Filter out pure background noise
      if (isForeground && alpha > 15) {
        // Keep track of bounding box of actual logo
        // Constrain to reasonable logo region (y between 120 and 550, x between 80 and 950)
        if (y >= 140 && y <= 520 && x >= 90 && x <= 920) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;

          outBuffer[dstIdx] = r;
          outBuffer[dstIdx + 1] = g;
          outBuffer[dstIdx + 2] = b;
          outBuffer[dstIdx + 3] = Math.round(alpha);
          continue;
        }
      }

      outBuffer[dstIdx] = 0;
      outBuffer[dstIdx + 1] = 0;
      outBuffer[dstIdx + 2] = 0;
      outBuffer[dstIdx + 3] = 0;
    }
  }

  console.log(`Clean Logo Bounding box: x=[${minX}, ${maxX}], y=[${minY}, ${maxY}]`);

  const padX = 30;
  const padY = 25;
  const cropX = Math.max(0, minX - padX);
  const cropY = Math.max(0, minY - padY);
  const cropW = Math.min(width - cropX, (maxX - minX) + padX * 2);
  const cropH = Math.min(height - cropY, (maxY - minY) + padY * 2);

  await sharp(outBuffer, {
    raw: { width, height, channels: 4 }
  })
  .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
  .png()
  .toFile(outputPath);

  console.log(`Clean cropped logo saved: ${cropW}x${cropH} at ${outputPath}`);
}

processCleanLogo().catch(console.error);
