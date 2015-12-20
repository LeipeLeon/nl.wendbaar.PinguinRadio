var resourceLoader;
var stations;

App.onLaunch = function(options) {
  var javascriptFiles = [
    `${options.BASEURL}js/ResourceLoader.js`,
    `${options.BASEURL}js/Presenter.js`,
    `${options.BASEURL}js/PinguinRadio.js`
  ];
  evaluateScripts(javascriptFiles, function(success) {
    if(success) {
      PinguinRadio.stations(function(foundStations){
        stations = foundStations;
        for(i = 0; i < stations.length; i++){
          station = stations[i]
          station["image_url"] = 'http://player.pinguinradio.com/' + station.logo
          station["stream_url"] = (station.streams["Default Quality"] || station.streams["High Quality (320kbs)"])["mp3"]
        }
        resourceLoader = new ResourceLoader(options.BASEURL);
        resourceLoader.loadResource(`${options.BASEURL}templates/stations.xml.js`, function(resource) {
          var doc = Presenter.makeDocument(resource);
          doc.addEventListener("select", Presenter.load.bind(Presenter));
          Presenter.pushDocument(doc);
        });
      }, createAlert)
      
    } else {
      var errorDoc = createAlert("Evaluate Scripts Error", "Error attempting to evaluate external JavaScript files.");
      navigationDocument.presentModal(errorDoc);
    }
  });
}

var createAlert = function(title, description) {
  var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <alertTemplate>
      <title>${title}</title>
      <description>${description}</description>
    </alertTemplate>
  </document>`
  var parser = new DOMParser();
  var alertDoc = parser.parseFromString(alertString, "application/xml");
  return alertDoc
}
