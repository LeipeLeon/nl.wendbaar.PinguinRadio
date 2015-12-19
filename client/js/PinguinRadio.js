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
        image = 'http://player.pinguinradio.com/' + data.image

        player.playlist.item(0).title           = data.artist + ' - ' + data.title
        player.playlist.item(0).artworkImageURL = image

        console.log('data:', nowPlaying, data);
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