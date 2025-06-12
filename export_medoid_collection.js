// Export Medoid images into an ImageCollection asset.

var regionName = 'Papua';
var year = 2024;
var inputPrefix =
    'projects/ee-fa-s1/assets/L89_' + regionName + '_' + year + '_Medoid_';
var outputCollection = 'projects/ee-fa-s1/assets/L89_Papua_2024_Medoid';

// Collect the images as done in `medoid_collection.js`.
var nTiles = 204;
var images = [];
for (var i = 1; i <= nTiles; i++) {
  var img = ee.Image(inputPrefix + i);
  images.push(img);

  // Start an export task for each image so the output asset is
  // projects/ee-fa-s1/assets/L89_Papua_2024_Medoid/<image number>.
  Export.image.toAsset({
    image: img,
    description: 'medoid_export_' + i,
    assetId: outputCollection + '/' +
        ('L89_' + regionName + '_' + year + '_Medoid_' + i),
    region: img.geometry(),
    scale: 30,
    maxPixels: 1e13
  });
}

// Optional: create an ImageCollection object for verification.
var medoidCollection = ee.ImageCollection(images);
print('Number of images queued for export:', medoidCollection.size());
