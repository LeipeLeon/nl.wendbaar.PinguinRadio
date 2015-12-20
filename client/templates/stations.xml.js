var Template = function() {
  function stationLockups(){
    output = ``

    for(i = 0; i < stations.length; i++){
      station = stations[i]

      output += `<lockup view="station" station_id="${i}">
        <img src="${station.image_url ? station.image_url : resourceLoader.BASEURL + 'images/static.gif'}" width="482" height="160"/>
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
