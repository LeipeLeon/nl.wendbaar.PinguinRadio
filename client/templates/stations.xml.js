var Template = function() {
  function stationLockups(){
    output = ``

    for(i = 0; i < stations.length; i++){
      station = stations[i]

      image = 'http://player.pinguinradio.com/' + station.logo
      stream_url = (station.streams["Default Quality"] || station.streams["High Quality (320kbs)"])["mp3"]

      output += `<lockup view="station" title="${station.name}" stream_url="${stream_url}" image="${image}">
        <img src="${image ? image : resourceLoader.BASEURL + 'images/static.gif'}" width="482" height="160"/>
        <title>${station.name}</title>
      </lockup>`
    }

    return output;
  }

  return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
        .marqueeOnHighlight {
          tv-text-highlight-style: marquee-on-highlight;
        }
      </style>
    </head>
    <stackTemplate>
      <collectionList>
        <grid>
          <header>
            <title>Pinguin Radio Stations</title>
          </header>
          <section>` + stationLockups() + `</section>
        </grid>
      </collectionList>
    </stackTemplate>
  </document>`
}
