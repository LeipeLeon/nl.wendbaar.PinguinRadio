var timer_id = null;
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
        player = new Player();
        var playlist = new Playlist();
        var mediaItem = new MediaItem('audio', stations[station_id].stream_url);
        mediaItem.title = stations[station_id].name;
        mediaItem.artworkImageURL = stations[station_id].image_url;
        player.playlist = playlist;
        player.playlist.push(mediaItem);
        player.play();
        nowPlaying = {station_name: stations[station_id].name, artist: "", title: "", image: "", timestamp: 0}
        PinguinRadio.getNowPlaying();
        if (timer_id) {
          clearInterval(timer_id)
        }
        timer_id = setInterval(PinguinRadio.getNowPlaying, 10000);
      break
    }
  },

}
