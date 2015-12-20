var resourceLoader;
var stations;
var options;

App.onLaunch = function(passed_options) {
  options = passed_options;
  var javascriptFiles = [
    `${options.BASEURL}js/ResourceLoader.js`,
    `${options.BASEURL}js/Presenter.js`,
    `${options.BASEURL}js/PinguinRadio.js`
  ];
  evaluateScripts(javascriptFiles, function(success) {
    if(success) {
      PinguinRadio.stations(function(foundStations){
        stations = foundStations;
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
