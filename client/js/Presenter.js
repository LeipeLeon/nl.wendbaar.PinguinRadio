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
    var self = this,
    element = event.target,

    view = element.getAttribute("view")
    streamURL = element.getAttribute("stream_url")
    title = element.getAttribute("title")
    artwork = element.getAttribute("image")
    switch(view) {
      case "station":
        var player = new Player();
        var playlist = new Playlist();
        var mediaItem = new MediaItem('audio', streamURL);
        mediaItem.title = title;
        mediaItem.artworkImageURL = artwork;
        player.playlist = playlist;
        player.playlist.push(mediaItem);
        player.present();
        player.play();
      break
    }
  },

}
