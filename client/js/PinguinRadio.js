var PinguinRadio = {

  stations: function(callback, errorCallback){
    PinguinRadio.get(
      "http://player.pinguinradio.com/?c=all",
      callback, errorCallback
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
