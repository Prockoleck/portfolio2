const sharp = require('sharp');
const { join } = require('path');

const input = join(__dirname, '..', 'public', 'pfp.jpg');
const output = join(__dirname, '..', 'public', 'favicon.png');
const size = 256;

const svgCircle = Buffer.from(
  `<svg width="${size}" height="${size}">
  <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white"/>
</svg>`
);

sharp(input)
  .resize(size, size, { fit: 'cover' })
  .png()
  .toBuffer()
  .then(buf =>
    sharp(buf)
      .composite([{ input: svgCircle, blend: 'dest-in' }])
      .png()
      .toFile(output)
  )
  .then(() => console.log('circular favicon created'))
  .catch(e => console.error(e));
