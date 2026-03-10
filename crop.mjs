import sharp from 'sharp';

sharp('public/assets/background-image.png')
  .extract({ left: 130, top: 120, width: 440, height: 480 })
  .toFile('public/assets/logo.png')
  .then(info => console.log('Crop successful:', info))
  .catch(err => console.error(err));
