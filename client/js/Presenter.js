var timer_id = null;
var nowPlaying;
var nowPlayingDoc;
var player;
var Presenter = {
  // 1
  makeDocument: function(resource) {
    if (!Presenter.parser) {
      Presenter.parser = new DOMParser();
    }
    var doc = Presenter.parser.parseFromString(resource, "application/xml");
    return doc;
  },
  // 2
  modalDialogPresenter: function(xml) {
    navigationDocument.presentModal(xml);
  },
 
  // 3
  pushDocument: function(xml) {
    navigationDocument.pushDocument(xml);
  },

  load: function(event) {
    element    = event.target

    view       = element.getAttribute("view")
    station_id = element.getAttribute("station_id")

    switch(view) {
      case "station":
        resourceLoader.loadResourceWithOptions(`${options.BASEURL}templates/product_bundle.xml.js`, station_id, function(resource) {
          nowPlayingDoc = Presenter.makeDocument(resource);
          Presenter.pushDocument(nowPlayingDoc);
        });
        nowPlaying = {station: stations[station_id].name, artist: "", title: "", image: "", timestamp: 0}
        if (timer_id) {
          clearInterval(timer_id)
        }
        timer_id = setInterval(PinguinRadio.getNowPlaying, 10000);
      break
    }
  },
}
