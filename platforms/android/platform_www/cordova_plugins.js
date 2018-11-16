cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "blinkid-cordova.BlinkIDScanner",
    "file": "plugins/blinkid-cordova/www/blinkIdScanner.js",
    "pluginId": "blinkid-cordova",
    "clobbers": [
      "cordova.plugins.BlinkID"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "blinkid-cordova": "4.3.0",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});