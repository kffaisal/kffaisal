// Generate an ImageCollection of Medoid images using a numbered prefix.
var regionName = 'Papua';
var year = 2024;
var nTiles = 204;
var assetPrefix =
    'projects/ee-fa-s1/assets/L89_' + regionName + '_' + year + '_Medoid_';

// Build a list of images using client-side string concatenation so that
// the asset IDs are constant values.
var images = [];
for (var i = 1; i <= nTiles; i++) {
  images.push(ee.Image(assetPrefix + i));
}

var medoidCollection = ee.ImageCollection(images);

// Example usage: print the size of the collection
print('Collection size:', medoidCollection.size());

// Mosaic all images together and scale
var image = medoidCollection
  .mosaic()
  .divide(10000);

// Example usage: add the mosaic to the map
Map.addLayer(image, {}, 'Medoid Mosaic');
