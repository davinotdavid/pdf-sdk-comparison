const fs = require('fs-extra');

const copyFiles = async () => {
  try {
    console.log('Copying Apryse WebViewer files...');
    await fs.copy('./node_modules/@pdftron/webviewer/public', './public/webviewer/lib');
    console.log('Apryse WebViewer files copied over successfully! \n');

    console.log('Copying PSPDFKit files...');
    await fs.copy('./node_modules/pspdfkit/dist/pspdfkit-lib', './public/pspdfkit-lib');
    console.log('PSPDFKit files copied over successfully');
  } catch (err) {
    console.error(err);
  }
};

copyFiles();