/**
 * Sets the maximum zoom level allowed by the UI. Default is 9999%.
 * @method WebViewer#setMaxZoomLevel
 * @param {(string|number)} zoomLevel Zoom level in either number or percentage.
 * @example // 5.1 and after
WebViewer(...)
  .then(function(instance) {
    instance.setMaxZoomLevel('150%'); // or setMaxZoomLevel(1.5)
  });
 * @example // 4.0 ~ 5.0
var viewerElement = document.getElementById('viewer');
var viewer = new PDFTron.WebViewer(...);

viewerElement.addEventListener('ready', function() {
  var instance = viewer.getInstance();
  instance.setMaxZoomLevel('150%'); // or setMaxZoomLevel(1.5)
});
 */

import actions from 'actions';
import selectors from 'selectors';
import zoomFactors from 'constants/zoomFactors';
import getActualZoomLevel from 'helpers/getActualZoomLevel';

export default store => zoomLevel => {
  zoomLevel = getActualZoomLevel(zoomLevel);
  const zoomList = selectors.getZoomList(store.getState()).filter(zoom => zoom <= zoomLevel);

  if (zoomLevel) {
    zoomFactors.setMaxZoomLevel(zoomLevel);
    store.dispatch(actions.setZoomList(zoomList));
    try {
      window.Tools.MarqueeZoomTool.setMaxZoomLevel(zoomLevel);
    } catch (e) {
      console.warn('Tools.MarqueeZoomTool.setMaxZoomLevel is not a function. To fix this issue, download the latest package from http://www.pdftron.com/downloads/WebViewer.zip and replace your CoreControls.js with the one in the package');
    }
  } else {
    console.warn('Type of the argument for setMaxZoomLevel must be either string or number');
  }
};