/**
 * Return the current layout mode of the WebViewer.
 * @method WebViewer#getLayoutMode
 * @return {CoreControls.ReaderControl#LayoutMode} Current layout mode
 * @example // 5.1 and after
WebViewer(...)
  .then(function(instance) {
    var docViewer = instance.docViewer;

    // you must have a document loaded when calling this api
    docViewer.on('documentLoaded', function() {
      console.log(instance.getLayoutMode());
    });
  });
 * @example // 4.0 ~ 5.0
var viewerElement = document.getElementById('viewer');
var viewer = new PDFTron.WebViewer(...);

viewerElement.addEventListener('ready', function() {
  var instance = viewer.getInstance();
  var docViewer = instance.docViewer;

  // you must have a document loaded when calling this api
  docViewer.on('documentLoaded', function() {
    console.log(instance.getLayoutMode());
  });
});
 */

import selectors from 'selectors';

export default store => () => selectors.getDisplayMode(store.getState());
