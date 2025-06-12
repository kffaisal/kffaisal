// Delete the standalone Medoid image assets now that they
// have been copied into an ImageCollection.

var regionName = 'Papua';
var year = 2024;
var nTiles = 204;

// The asset IDs follow the pattern
// projects/ee-fa-s1/assets/L89_<region>_<year>_Medoid_<index>
var assetPrefix =
    'projects/ee-fa-s1/assets/L89_' + regionName + '_' + year + '_Medoid_';

// Remove each asset individually. This will prompt for confirmation
// repeatedly in the Code Editor, but it matches the original behavior.
for (var i = 1; i <= nTiles; i++) {
  ee.data.deleteAsset(assetPrefix + i);
}

print('Deletion requests sent for', nTiles, 'assets.');
