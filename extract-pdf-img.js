const fs = require('fs');

const pdfPath = 'C:/Users/hp/.gemini/antigravity/brain/16d20905-98a6-481a-8600-44125c64bd56/.user_uploaded/media_1792156990440.pdf';
const buf = fs.readFileSync(pdfPath);
console.log('PDF size:', buf.length);

// Look for JPEG start \xFF\xD8\xFF
let jpegStarts = [];
for (let i = 0; i < buf.length - 3; i++) {
  if (buf[i] === 0xFF && buf[i+1] === 0xD8 && buf[i+2] === 0xFF) {
    jpegStarts.push(i);
  }
}
console.log('Found JPEG markers at:', jpegStarts);

if (jpegStarts.length > 0) {
  const start = jpegStarts[0];
  // Find JPEG end \xFF\xD9
  let end = -1;
  for (let i = start + 2; i < buf.length - 1; i++) {
    if (buf[i] === 0xFF && buf[i+1] === 0xD9) {
      end = i + 2;
    }
  }
  console.log(`JPEG range: ${start} to ${end} (${end - start} bytes)`);
  if (end > start) {
    fs.writeFileSync('c:/Users/hp/OneDrive/Desktop/KaK/extracted_logo.jpg', buf.subarray(start, end));
    console.log('Saved extracted_logo.jpg!');
  }
}
