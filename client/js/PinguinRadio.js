var PinguinRadio = {

  stations: function(callback, errorCallback){
    PinguinRadio.get(
      "http://player.pinguinradio.com/?c=all",
      callback, errorCallback
    )
  },

  getNowPlaying: function(callback, errorCallback) {
    nowPlaying.timestamp = Date.now();
    PinguinRadio.get(
      "http://player.pinguinradio.com/index.php?c=" + nowPlaying.title + "&_=" + nowPlaying.timestamp, 
      function(data) {
        title = data.artist + ' | ' + data.title
        if (player.currentMediaItem.title !== title) {
          image = 'http://player.pinguinradio.com/' + data.image
          player.currentMediaItem.title           = title
          player.currentMediaItem.artworkImageURL = image
          player.present();
        }
      }, function(error) {
        console.log('error:', nowPlaying, error);
      }
    )
  },

  get: function(url, callback, errorCallback){
    request = new XMLHttpRequest()
    request.open("GET", url)
    request.addEventListener("load", function(){
      try {
        callback(JSON.parse(request.responseText))
      } catch(error){
        errorCallback(error)
      }
    })
    request.send()
  }
}
